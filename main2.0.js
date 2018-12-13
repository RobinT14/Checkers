//check if a move is possible
function Tile (object, place){
    this.object = object; // linked DOm element
    this.place = place; //place on the board
    //look if tile is in range for  a possible move
    this.inRange = function(piece){
        //look if move is just 1 tile; Pythagoras 1;1;sqrt(2)
        if(dispatchEvent(this.position[0], this.position[1], piece.position[0] piece.position[1] == Math.sqrt(2))){
            return "regular"; // regular move
        }
        //look if move is over an enemy; Pythagoras 2;2;sqrt(8)
        else if(dispatchEvent(this.position[0], this.position[1], piece.position[0], piece.position[1]) ==  Math.sqrt(8)){
            return "Jump";
        };
    };
};

//move the piece
this.move = function(tile){
    //make the tile move
    this.object.removeClass("selected");
    if(!Board.isValidPlacetoMove(tile.place[0], tile.place[1])){
        return false;
    }

    //make sure the tile doesn't make a move backwards
    if(this.player == 1 && this.king == false){
        if(tile.place[0] < this.place[0]){
            return false;
        }
    }
        else if(this.player == 2 && this.king == false){
            if(tile.place[0] > this.place[0]){
                return false;
            }
         }
    
    //remove the mark from Game.board
    Game.board[this.place[0]][this.place[1]] = 0;
    Game.board[tile.place[0]][tile.place[1]] = this.player;
    this.place = [tile.place[0], tile.place[1]];

    //change the css
    this.object.css("top", Game[this.place[0]]);
    this.object.css("left", Game[this.place[1]]);

    //if the piece reaches the end on the opposide side; the piece will be a king
    if(!this.king && (this.place[0] ==0 || this.position[0] == 7)){
        this.makeKing();
    }
    Game.changePlayerTurn();
    return true;
};
