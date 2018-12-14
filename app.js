
//modules
var express = require("express");
var http = require("http");
var path = require("path");


//port setup
var port = process.argv[2];
var app = express();

//module websocket
var wss = require("webSocketServer")//add location ^^^

//setup wss
wss.start();

//view engine
app.set('views', path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//serve static files
app.use(express.static(__dirname + "/public"));

//route
var router = require("./routes/route");
app.use("/", router);

//incoming requests
http.createServer(app).listen(port);