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
    this.object = object; // linked DOm object
    this.place = place; //place on the board
    //look if tile is in range for  a possible move
        this.inRange = function(piece){
        //look if move is just 1 tile; Pythagoras 1;1;sqrt(2)
        if(dispatchEvent(this.place[0], this.place[1], piece.place[0] piece.place[1] == Math.sqrt(2))){
            return "regular"; // regular move
        }
        //look if move is over an enemy; Pythagoras 2;2;sqrt(8)
        else if(dispatchEvent(this.place[0], this.place[1], piece.place[0], piece.place[1]) ==  Math.sqrt(8)){
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
        setup: function(){
            var amountofpieces = 0;
            var amountoftiles = 0;
            for(row in this.board){
                for(column in this.board[row])
                //algorithm on how the pieces should be placed on the tiles: for every odd row
                if(row%2 == 1) {
                    //where the column is even
                    if(column%2 == 0) {
                      this.tilesObject.append("<div class='tile' id='tile"+amountoftiles+"' style='top:;left:;'></div>");
                      tiles[amountoftiles] = new Tile($("#tile"+amountoftiles), [parseInt(row), parseInt(column)]);
                      amountoftiles += 1;
                    }
                }
            }
        },
    }


    //put in the board
    $("#board").append(gameBoard);

    //script to be removed later
    var player1;
    var player2;
}