const newUserCheck = require("../controllers/newUserCheck");
const registerUser = require("../controllers/registerUser");

module.exports = (app) => {
	app.get("/api/users", newUserCheck);

	app.post("/api/users", registerUser);

	app.use("*", (req, res, next) =>
		res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
	);
};
