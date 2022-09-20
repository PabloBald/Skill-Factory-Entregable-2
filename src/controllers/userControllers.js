const db = require("../models/index");
const { User } = db;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getAll(req, res, next) {
	
	User.findAll({ include: [{ model: db.Car, as: "Cars" }] })
		.then((users) => res.status(200).send(users))
		.catch((err) => {
			err.status = 500;
			return next(err);
		});
}

async function register(req, res, next) {
	const { email, password, admin } = req.body;
	const alreadyExists = await User.findOne({
		where: {
			email: email,
		},
	});

	if (alreadyExists) {
		const err = new Error("Invalid username");
		err.status = 400;
		return next(err);
	}
	try {
		User.create({
			email: email,
			password: await bcrypt.hash(password, 10),
			admin: admin,
		});
	} catch (err) {
		return next(err);
	}

	return res.status(201).send({
		ok: true,
		message: "User succesfully created",
	});
}

async function login(req, res, next) {
	const body = req.body;
	const user = await User.findOne({ where: { email: body.email } });

	if (!user) {
		const err = new Error("User or password incorrect");
		err.status = 400;
		return next(err);
	}

	if (!bcrypt.compareSync(body.password, user.password)) {
		const err = new Error("User or password incorrect");
		err.status = 400;
		return next(err);
	}
	
	const token = jwt.sign(
		{
			id: user.id,
			user: user.email,
			admin: user.admin
		},
		process.env.TOKEN_SECRET,
		{
			expiresIn: process.env.TOKEN_EXPIRE_TIME,
		}
	);

	return res.status(200).json({
		ok: true,
		user: user.email,
		token,
	});
}

async function getById(req, res, next) {
	const { id } = req.params;
	const user = await User.findOne({
		where: {
			id,
		},
		include: [{ model: db.Car, as: "Cars" }],
	});

	if (!user) {
		const err = new Error();
		err.status = 404;
		return next(err);
	}
	return res.status(200).json(user);
}

async function edit(req, res, next) {
	const { id } = req.params;
	const newUser = req.body;
	
	User.update(newUser, { where: { id } })
		.then((user) => res.status(200).send({ ok: true, message: "User updated" }))
		.catch((err) => next(err));
}

async function destroy(req, res, next) {
	const { id } = req.params;
	const user = await User.findOne({
		where: {
			id,
		}
	});
	if (!user) {
		const err = new Error();
		err.status = 404;
		return next(err);
	}
	User.destroy({ where: { id } })
		.then((user) => res.status(200).send("User deleted"))
		.catch((err) => next(err));
}

const userControllers = {
	getAll,
	register,
	login,
	getById,
	edit,
	destroy,
};

module.exports = userControllers;
