var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require("./controllers/oden_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("listening on port " + PORT);
})