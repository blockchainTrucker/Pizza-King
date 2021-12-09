const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/User");

module.exports = function login(req, res, next) {
	const { email, password } = req.body;
	if (email !== undefined) {
		User.findOne({ email }).then((user) => {
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
					res.status(406);
				}
			});
		});
	} else {
		res.status(406);
	}
};
