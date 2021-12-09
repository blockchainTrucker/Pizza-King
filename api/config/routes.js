const registerUser = require("../controllers/registerUser");
const login = require("../controllers/login");

module.exports = (app) => {
	app.post("/api/users/register", registerUser);

	app.post("/api/users/login", login);

	app.use("*", (req, res, next) =>
		res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
	);
};
