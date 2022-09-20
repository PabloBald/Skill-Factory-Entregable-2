function notFound(error, req, res, next) {
	res.status(404).send({ok:false,message:"Not found"})
}

function errorParser(error, req, res, next) {
	switch (error.status) {
		case 400:
			res.status(error.status).json({ ok: false, message: error.message });
			break;
		case 401:
			res.status(error.status).json({ ok: false, message: 'Unauthorized' });
			break;
		case 403:
			res.status(error.status).json({ ok: false, message: 'Access denied' });
			break;
		case 404:
			res.status(error.status).json({ ok: false, message: 'Not found' });
			break;

		default:
			res.status(error.status).json({ ok: false, message: 'Server error' });
	}
}

const errorHandler = {
	notFound,
	errorParser,
};

module.exports = errorHandler;
