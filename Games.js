const Game = require("Game");// add location^^^
const wss = require("webSocketServer");

module.exports = (function(){

  var games = [];

  function connectUser(user) {
    //look for games 
    for(var i = 0; i < games.length; i++){
      var game = games[i];
      if(game.isAvailable()){
        // if game is available assign user to it
        game.setPlayer1(user);
        wss.broadcast({action: 'playerWaitingChange', props: {playerIsWaiting: false}});
        return;
      }
    }

    // if no game is available one will be created
    var game = new Game(user);
    games.push(game);
    wss.broadcast({action: 'playerWaitingChange', props: {playerIsWaiting: true}});
  }

  // size of games[]
  function size(){
    var size = 0;

    for(var i = 0; i < games.length; i++){
      if(games[i].isActive()){
        size++;
      }
    }

    return size;
  }

  return {
    connectUser: connectUser,
    size: size,
  }

})();