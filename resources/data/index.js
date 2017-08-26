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
			"logopath": "cbr-logo.png"
		}
	],
	"awards": [
		{
			"logopath": "apse.png"
		},
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
	],
	"homepage": [
		{
			"title": "",
			"video": "https://player.vimeo.com/video/188569376"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/191251406"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/188568473"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/201616343"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/203376998"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/203378610"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/225320557"
		},
		{
			"title": "",
			"video": "https://player.vimeo.com/video/225604441"
		}
	],
	"work": [
		{
			"client": "Jose Cuervo",
			"title": "what is gangnam style?",
			"description": "A video project for Jose Cuervo in which Pro Beach Volleyball players were asked: “Do you know what Gangnam Style is?” The results are… interesting.",
			"video": "www.youtube.com/embed/wzgkQH0r-Fs",
			"image": "gagnam.jpg"
		},
		{
			"client": "Tasted",
			"title": "Amazing Food Tricks",
			"description": "An animated video for Rodale Publishing called “Amazing Food Tricks With Jill.",
			"video": "www.youtube.com/embed/gsyMESkpvDs",
			"image": "foodtricks.jpg"
		},
		{
			"client": "Tasted",
			"title": "dude food, with dinosaur bbq’s",
			"description": "An episode of “Dude Food,” starring John Stage of the famed Dinosaur BBQ in New York, for Tasted Channel.",
			"video": "www.youtube.com/embed/8ZbmjsB6s90",
			"image": "dinobbq.jpg"
		},
		{
			"client": "Jose Cuervo",
			"title": "Impossible Vollyball Shot",
			"description": "A video for Jose Cuervo, featuring one of the most difficult volleyball trick shots ever filmed.",
			"video": "www.youtube.com/embed/HkL381Dk8A8",
			"image": "Cuervo.jpg"
		},
		{
			"client": "Berman Braun",
			"title": "Woman V. Workout: Model Trains",
			"description": "Woman V. Workout Episode: Can Model Lauren Berlingeri Handle FDNY Training?",
			"video": "www.youtube.com/embed/NNN6zQdf6ZY",
			"image": "firefighter.jpg"
		},
		{
			"client": "MLB Fancave",
			"title": "Big papi hugs new york ",
			"description": "A viral video produced for MLB FanCave, in which Red Sox first baseman David Ortiz gives New Yorkers and Yankees fans a hug.",
			"video": "www.youtube.com/embed//MhriSwt11_k",
			"image": "bigpapi.jpg"
		}
	]
}