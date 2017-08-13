var package = require('./../../package.json');

module.exports = {
    "_comment": "Application data made available to handlebars.",
    "name": "MOOSEDANCE PRODUCTIONS",
    "description": "Official MooseDance Productions Website",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
	"clients": [
		{
			"logopath": "jose-logo.png"
		},
		{
			"logopath": "microsoft-logo.png"
		},
		{
			"logopath": "usa-today-logo.png"
		},
		{
			"logopath": "hss-logo-web.png"
		},
		{
			"logopath": "berman-braun-logo.png"
		},
		{
			"logopath": "the-winslow-logo.png"
		},
		{
			"logopath": "tawkers-logo.png"
		},
		{
			"logopath": "completely-bare-logo.png"
		},
		{
			"logopath": "cbr-logo.png"
		},
		{
			"logopath": "mall-meds-logo.png"
		}
	],
	"awards": [
		{
			"logopath": "shorty-logo.png"
		},
		{
			"logopath": "the-webby-logo.png"
		},
		{
			"logopath": "media-awards-logo.png"
		},
		{
			"logopath": "abj_award.jpg"
		}
	]
}