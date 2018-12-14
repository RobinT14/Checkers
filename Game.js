function Game(player1){
    console.log("New game of Checkers was started!");
    this.player1 = player1;
    this.player2 = null;
    this.active = false;



    // add opponent to the game
  this.setPlayer2 = function(player2){
    console.log("An opponent has been found");
    this.player2 = player2;
    this.active = true;

    /*this.braker.getWebSocket().on("message", receiveFromBraker.bind(this));
    this.braker.getWebSocket().on("close", brakerDisconnected.bind(this));

    if(this.isActive()){
      this.braker.getWebSocket().send(JSON.stringify({action: "yourRole", props: {role: "braker"}}));

      this.maker.getWebSocket().send(JSON.stringify({action: "started", props: {}}));
      this.braker.getWebSocket().send(JSON.stringify({action: "started", props: {}}));
    }

}