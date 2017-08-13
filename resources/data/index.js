var package = require('./../../package.json');

module.exports = {
    "_comment": "Application data made available to handlebars.",
    "name": "MOOSEDANCE PRODUCTIONS",
    "description": "Official MooseDance Productions Website",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
	"bodyClass": "home-bg"
}