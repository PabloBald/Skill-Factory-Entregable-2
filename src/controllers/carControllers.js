const db = require("../models/index");
const { Car, User } = db;

async function getAll(req, res, next) {
	Car.findAll({ where: { UserId: null }, attributes: { exclude: ["UserId"] } })
		.then((cars) => res.status(200).send(cars))
		.catch((error) => {
			error.status = 500;
			return next(error);
		});
}

async function getById(req, res, next) {
	const { id } = req.params;
	const car = await Car.findOne({ where: { id } });

	if (!car) {
		const error = new Error();
		error.status = 404;
		return next(error);
	}
	return res.status(200).send(car);
}

async function create(req, res, next) {
	const { model, brand } = req.body;
	try {
		Car.create({ model, brand });
	} catch (error) {
		return next(error);
	}

	return res.status(200).send({ ok: true, message: "Car created" });
}

async function buy(req, res, next) {
	const carId = req.params.id;
	const userId = req.user.id;
	const car = await Car.findOne({ where: { id: carId, UserId: null } });

	if (!car) {
		const error = new Error();
		error.status = 404;
		return next(error);
	}

	const newCar = { UserId: userId };
	console.log(car);
	Car.update(newCar, { where: { id: carId } })
		.then((car) =>
			res
				.status(200)
				.send({ ok: true, message: "Operation successfully completed" })
		)
		.catch((error) => next(error));
}

async function edit(req, res, next) {
	const { id } = req.params;
	const newCar = req.body;

	const car = await Car.findOne({ where: { id } });

	if (!car) {
		let error = new Error();
		error.status = 404;
		return next(error);
	}

	Car.update(newCar, { where: { id } })
		.then((car) => res.status(200).send({ ok: true, message: "Car updated" }))
		.catch((error) => next(error));
}

async function destroy(req, res, next) {
	const { id } = req.params;
	const car = await Car.findOne({
		where: {
			id,
		},
	});
	if (!car) {
		const error = new Error();
		error.status = 404;
		return next(error);
	}
	Car.destroy({ where: { id } })
		.then((car) => res.status(200).send("Car deleted"))
		.catch((error) => next(error));
}

const carControllers = {
	getAll,
	getById,
	create,
	buy,
	edit,
	destroy,
};

module.exports = carControllers;
