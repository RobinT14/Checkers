/*const Games = require("Games"); // add Location 

function User(ws){
    this.ws = ws;
    console.log("A new user has connected!");
    vas user = this;

    this.ws.on("message", function(data){

        if(data.action == "startGame"){
            Games.connectUser(user);
        }
    });

    this.getWebSocket = function(){
        return this.ws;
    }

}

module.exports = User;