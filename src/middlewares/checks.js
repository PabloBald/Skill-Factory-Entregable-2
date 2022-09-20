require("dotenv").config();
const jwt = require("jsonwebtoken");

function checkLoggedIn(req, res, next) {
	const token = req.headers.authorization;
	if (!token)
		return res.status(401).send({ ok: false, message: "Unauthorized" });

	const decodedToken = jwt.decode(req.headers.authorization.split(" ")[1]);
	const user = {
		id: decodedToken.id,
		user: decodedToken.user,
		admin: decodedToken.admin,
	};
	req.user = user;
	next();
}

function checkAdminPrivileges(req, res, next) {
	const token = req.headers.authorization.split(" ")[1];
	const decodedToken = jwt.decode(token, { complete: true });
	
	if (!decodedToken || !decodedToken.payload.admin) {
		return res.status(403).send({ ok: false, message: "Access denied" });
	}
		const user = {
			id: decodedToken.id,
			user: decodedToken.user,
			admin: decodedToken.admin,
		};
		req.user = user;
		return next();
	
}

const checks = {
	checkAdminPrivileges,
	checkLoggedIn,
};

module.exports = checks;
