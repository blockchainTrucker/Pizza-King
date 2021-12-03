const env = process.env.NODE_ENV || "development";

const config = {
	development: {
		port: process.env.PORT || 9999,
		dbURL: "mongodb://localhost:27017/pizza-king",
		authCookieName: "x-auth-token",
	},
	production: {},
	saltRounds: 72,
};

module.exports = config[env];
