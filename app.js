
//modules
var express = require("express");
var http = require("http");
var path = require("path");


//port setup
var port = process.argv[2];
var app = express();

app.use("/", function(req, res) {
    res.sendFile(".html", {root: "./"});// add file
});


var server = http.createServer(app);

const wss = new websocket.Server({ server });

wss.on("connection", function(ws){

    ws.on("message", function incomming(message){
        console.log("[LOG] + message");
    })

})

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




//module websocket
//var wss = require("webSocketServer")//add location ^^^

//setup wss
//wss.start();