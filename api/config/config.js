const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 9999,
		dbURL: "mongodb://localhost:27017/pizza-king",

		production: {},
		authCookieName: "user",
		saltRounds: 11,
		jwt: {
			secret: "pizzakingsecret",
			options: {
				expiresIn: "7d",
			},
		},
	},
};

module.exports = config[env];
