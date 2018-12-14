
//modules
var express = require("express");
var http = require("http");
var path = require("path");


//port setup
var port = process.argv[2];
var app = express();

var server = http.createServer(app);

const WebSocket = require('ws');
const wss = new WebSocket.Server({
    port: 8080,
});

wss.on("connection", function(ws){
    var user = new User;
});

function User(ws){
    this.ws = ws;
    console.log("A user connected");
    var user = this;
}

module.exports.broadcast = function(data){
    if(wss == null){
      return false;
    }
}


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






/*const ws = new WebSocket("ws://localhost:3000", {
    perMessageDeflate: false
});
//module websocket
//var wss = require("webSocketServer")//add location ^^^

//setup wss
//wss.start();


/*app.use("/", function(req, res) {
    res.sendFile("index.js", {root: "./"});// add file
});


wss.on("connection", function(ws){

    ws.on("message", function incomming(message){
        console.log("[LOG] + message");
    })

})
*/