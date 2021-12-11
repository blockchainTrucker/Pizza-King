const registerUser = require("../controllers/registerUser");
const login = require("../controllers/login");
const newOrder = require("../controllers/newOrder");
const pastOrders = require("../controllers/pastOrders");

module.exports = (app) => {
	app.post("/api/users/register", registerUser);

	app.post("/api/users/login", login);

	app.post("/api/new-order", newOrder);

	app.post("/api/past-orders", pastOrders);

	app.use("*", (req, res, next) =>
		res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
	);
};
