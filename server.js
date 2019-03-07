var express = require("express");
var bodyParser = require("body-parser");
var PORT =  8000;
var app = express();
var methodOverride = require('method-override');

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});