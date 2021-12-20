const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	items: { type: Array, required: true },
	total: { type: Number, required: true },
	userID: { type: String, required: true },
	dateTime: { type: Date, required: true },
});

module.exports = mongoose.model("Order", userSchema);
