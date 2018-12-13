/*check if a move is possible
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



*/


//tests if a piece can jump
this.canJump = function () {
if(this.canEnemyJump([this.place[0] + 2, this.place[1] + 2]) ||
    this.canEnemyJump([this.place[0] + 2, this.place[1] - 2]) ||
    this.canEnemyJump([this.place[0] - 2, this.place[1] + 2]) ||
    this.canEnemyJump([this.place[0] - 2, this.place[1] - 2])){
    return true;
    }

    return false;
};

//tests if enemeny could made a specific jump
this.CanEnemyJump = function(newplace){
    //find the x-movement and y-movement
    var dx = newplace[1] - this.place[1];
    var dy = newplace[0] = this.place[0];

    //Make sure the tile doesn't make a move backwards
            if(this.player == "1" && this.bigpiece == false){
                if(new.Place[0] < this.place[0]){
                return false;
                }
            }
            else if(this.player == "2" && this.bigpiece == false){
                if(new.place[0] > this.place[0]){
                return false;
                }
            }
}

//must be on the board
if(newplace[0] > 7 || newplace[1] > 7 || newplace[0] < 0 || newplace[1] < 0){
    return false;
}
//piece that's gonna be jumped over
var tileToCheckx = this.place[1] + dx/2;
var tileToChecky = this.place[0] + dy/2;

//check is there is a piece and there is no piece after that piece
if(!Gamepad.isValidPlacetoMove(tileToChecky, tileToChecky) && Gamepad.isValidPlacetoMove(newplace[0], newplace[1])){
    //find which piece
    for(pieceIndex in pieces){
        if(pieces[pieceIndex].place[0] == tileToChecky && pieces[pieceIndex].place[1] == tileToCheckx) {
            if(this.player != pieces[pieceIndex].player){
                return pieces[pieceIndex];
            }
        }
    }
}


this.enemyJump = function(tile){
    var pieceToRemove = this.canEnemyJump(tile.place);
    //if there is a piece to be removed
    if(pieceToRemove){
        pieces[pieceIndex].remove();
        return true;
    }
    return false;
}

this.remove = function() {
    //remove and delete it from the gameboard
    this.element.css("display", "none");
    if(this.player == 1) $("#player 2").append("<div class= 'capturedPiece'>< /div");
    if(this.player == 2) $("#player 1").append("<div class= 'capturedPiece'>< /div");
    Game.board[this.place[0]][this.place[1]] = 0;

    //reset position so it won't be taken by the for loop in de canEnemyJump method
    this.place = [];
}