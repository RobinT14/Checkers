window.onload = function(){

    //the board at the start
    var gameBoard = [
        [ 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 2, 0, 2, 0, 2, 0, 2, 0 ],
        [ 0, 2, 0, 2, 0, 2, 0, 2 ],
        [ 2, 0, 2, 0, 2, 0, 2, 0 ],
    ];

    //arrays to store the pieces and tiles
    var pieces = [];
    var tiles = [];

    //function to set pieces to the board
    function piece (object, place){
        this.object = object;
        this.place = place;
        
        
        if(this.object.attr("id") < 12){
            this.player = "player1";
        }
        else{
            this.player = "player2";
        }
        
        
        //check whether it is a big piece or not
        this.bigPiece = false;
        this.becomeBigPiece = function(){
            this.bigPiece = true;
            //update design
        }

        //move the piece
        this.move = function(tile){
            //make the tile move
        }
    }

    //calculate distance between places
    var distance = function (x1, x2, y1, y2){
        var calculate1 = Math.pow(x1-x2) + Math.pow(y1-y2);
        return Math.sqrt(calculate1);
    }

    //initialize game
    var Game = {
        board: gameBoard,
        turn: player1,
        tilesObject: $(".tiles")
        //fill the board
        
    }


    //put in the board
    $("#board").append(gameBoard);

    //script to be removed later
    var player1;
    var player2;
}