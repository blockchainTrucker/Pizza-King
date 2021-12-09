const Order = require("../models/Order");

module.exports = function newOrder(req, res, next) {
	let items = req.body.items;
	let total = req.body.total;
	let userID = req.body.userID;
	Order.create({ items, total, userID })
		.then((createdOrder) => res.send(createdOrder))
		.catch((err) => {
			res.send("Error");
			console.log(err);
		});
};
