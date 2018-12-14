//WebSocket server

const ws = require("ws");
const User = require("User")//add location ^^^

var wss = null;

//start wss
module.exports.start = function(){
    wss = new ws.Server({port: 3001});

    //creates a new websocket connection
    wss.on("connection", function(ws){
        var user = new User(ws);
    })
}

//message to all open websockets
module.exports.broadcast = function(data){
    if(wss == null){
        return false;
    }

    if(typeof data != "String"){
        data = JSON.stringify(data);
    }

    wss.clients.forEach(function each(client){//location!!!
        if(client.readySate === ws.OPEN){
            client.send(data)
        }
    })
}