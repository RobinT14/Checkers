
//modules
var express = require("express");
var http = require("http");
var path = require("path");
var websocket = require("ws");

var server = http.create.Server(app);

const wss = new websocket.Server({server});

var port = process.argv[2];
var app = express();

app.set('views', path.join(__dirname, "/views"));
app.set("view engine", "ejs");


app.use(express.static(__dirname + "/public"));

var router = require("./routes/route");
app.use("/", router);

http.createServer(app).listen(port);