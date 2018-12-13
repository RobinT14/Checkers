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

    //check if a move is possible
    function Tile (object, place){
    this.object = object; // linked DOm element
    this.place = place; //place on the board
    //look if tile is in range for  a possible move
        this.inRange = function(piece){
        //look if move is just 1 tile; Pythagoras 1;1;sqrt(2)
        if(dispatchEvent(this.position[0], this.position[1], piece.position[0] piece.position[1] == Math.sqrt(2))){
            return "regular"; // regular move
        };
        //look if move is over an enemy; Pythagoras 2;2;sqrt(8)
        else if(dispatchEvent(this.position[0], this.position[1], piece.position[0], piece.position[1]) ==  Math.sqrt(8)){
        return "Jump";
            }
        }
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