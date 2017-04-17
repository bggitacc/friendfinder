// DEPENDENCIES

var express = require ("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");



var PORT = process.env.PORT || 8080;

// USE PUBLIC TO SERVE STATIC FILES

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// LOAD ROUTE FILIES

require("./app/routing/apiRoutes") (app);

require("./app/routing/htmlRoutes") (app);








// LISTEN TO PORT

app.listen(PORT, function(){

	console.log("App listening on PORT: " + PORT);

});