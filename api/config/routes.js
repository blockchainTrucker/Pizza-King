// const router = require("../routes/");
const cartPOST = require("../utils/cartPOST");

module.exports = (app) => {
	app.use("/api/cart/add", cartPOST);

	// app.use('/api/origami', router.origami);

	app.use("*", (req, res, next) =>
		res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
	);
};
