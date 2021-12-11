const Order = require("../models/Order");

module.exports = function pastOrders(req, res, next) {
	const { userID } = req.body;

	if (userID !== undefined) {
		Order.find({ userID }).then((orders) =>
			res.send(JSON.stringify(orders))
		);
	} else {
		res.status(406);
	}
};
