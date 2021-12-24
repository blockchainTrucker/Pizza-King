const saltConfig = require("../config/config").saltRounds;
let bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function registerUser(req, res, next) {
	let email = req.body.email.toLowerCase().trim();
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let password = req.body.password;
	let emailRegex = new RegExp(/[a-z0-9]+[a-z0-9]*@[a-z0-9]*.\w\w\w/i);
	let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
	let passRegex = new RegExp(/[\S+]{6,24}/);
	let firstGood = false;
	let lastGood = false;
	let emailGood = false;
	let passGood = false;
	if (!nameRegex.test(firstName)) {
		firstGood = false;
	} else {
		firstGood = true;
	}
	if (!nameRegex.test(lastName)) {
		lastGood = false;
	} else {
		lastGood = true;
	}
	if (!emailRegex.test(email)) {
		emailGood = false;
	} else {
		emailGood = true;
	}
	if (!passRegex.test(password)) {
		passGood = false;
	} else {
		passGood = true;
	}
	if (
		firstGood === false ||
		lastGood === false ||
		emailGood === false ||
		passGood === false
	) {
		res.status(401);
		res.send(JSON.stringify("validation failed"));
		return;
	} else {
		User.find({ email: email }).then((users) => {
			if (users.length > 0) {
				emailGood = false;
				console.log("Email is already in use");
				let error = JSON.stringify("Email is already in use");
				res.send(error);
				return;
			}
			if (emailGood && firstGood && lastGood && passGood) {
				bcrypt.hash(password, saltConfig, function (err, hash) {
					new User({ firstName, lastName, email, password: hash })
						.save()
						.then((createdUser) =>
							res.send(JSON.stringify("success"))
						)
						.catch((err) => {
							console.log(err);
						});
				});
			} else {
				res.status(401);
				res.send(JSON.stringify("validation failed"));
			}
		});
	}
};
