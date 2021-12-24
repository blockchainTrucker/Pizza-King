const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const config = require("../config/config");

module.exports = function login(req, res, next) {
	const { email, password } = req.body;
	if (email !== undefined) {
		User.findOne({ email }).then((user) => {
			if (user !== null) {
				bcrypt.compare(password, user.password, (err, result) => {
					if (result) {
						res.status(200);
						let userInfo = {
							id: user._id,
							email: user.email,
							firstName: user.firstName,
							lastName: user.lastName,
						};
						const token = jwt.sign(
							userInfo,
							config.jwt.secret,
							config.jwt.options
						);
						res.send(JSON.stringify(token));
					} else {
						res.status(401);
						res.send(JSON.stringify("Invalid email or password"));
					}
				});
			} else {
				res.status(401);
				res.send(JSON.stringify("Invalid email or password"));
			}
		});
	} else {
		res.status(401);
		res.send(JSON.stringify("Invalid email or password"));
	}
};
