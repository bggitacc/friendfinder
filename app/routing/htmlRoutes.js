//require npm path //

var path = require("path");

// Get routes for survey and home //

module.exports = function(app) {
	
	app.get("/survey", function (req, res) {

		res.sendFile(path.join(__dirname, "/../public/survey.html"));
		
	});

	app.use(function (req, res) {



		res.sendFile(path.join(__dirname, "/../public/home.html"));
	
	});

};