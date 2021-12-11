const Order = require("../models/Order");

module.exports = function pastOrders(req, res, next) {
	const { userID } = req.body;

	if (userID !== undefined) {
		Order.find({ userID }).then((orders) => {
			res.status(200);
			res.send(JSON.stringify(orders));
		});
	} else {
		res.status(200);
		res.send(JSON.stringify("no orders found"));
	}
};
