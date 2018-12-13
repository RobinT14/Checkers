
window.onload = function() {    
  
  //Piece object - there are 24 instances of them in a checkers game
  function Piece (element, position) {
   
    
    
    //tests if piece can jump anywhere
    this.canJumpAny = function () {
      if(this.canOpponentJump([this.position[0]+2, this.position[1]+2]) ||
         this.canOpponentJump([this.position[0]+2, this.position[1]-2]) ||
         this.canOpponentJump([this.position[0]-2, this.position[1]+2]) ||
         this.canOpponentJump([this.position[0]-2, this.position[1]-2])) {
        return true;
      } return false;
    };
    
    //tests if an opponent jump can be made to a specific place
    this.canOpponentJump = function(newPosition) {
      //find what the displacement is
      var dx = newPosition[1] - this.position[1];
      var dy = newPosition[0] - this.position[0];
      //make sure object doesn't go backwards if not a king
      if(this.player == 1 && this.king == false) {
        if(newPosition[0] < this.position[0]) return false;
      } else if (this.player == 2 && this.king == false) {
        if(newPosition[0] > this.position[0]) return false;
      }
      //must be in bounds
      if(newPosition[0] > 7 || newPosition[1] > 7 || newPosition[0] < 0 || newPosition[1] < 0) return false;
      //middle tile where the piece to be conquered sits
      var tileToCheckx = this.position[1] + dx/2;
      var tileToChecky = this.position[0] + dy/2;
      //if there is a piece there and there is no piece in the space after that
      if(!Board.isValidPlacetoMove(tileToChecky, tileToCheckx) && Board.isValidPlacetoMove(newPosition[0], newPosition[1])) {
        //find which object instance is sitting there
        for(pieceIndex in pieces) {
          if(pieces[pieceIndex].position[0] == tileToChecky && pieces[pieceIndex].position[1] == tileToCheckx) {
            if(this.player != pieces[pieceIndex].player) {
              //return the piece sitting there
              return pieces[pieceIndex];
            }
          }
        }
      }
      return false;
    };
    
    this.opponentJump = function (tile) {
      var pieceToRemove = this.canOpponentJump(tile.position);
      //if there is a piece to be removed, remove it
      if(pieceToRemove) {
        pieces[pieceIndex].remove();
        return true;
      }
      return false;
    };
    
    this.remove = function () {
      //remove it and delete it from the gameboard
      this.element.css("display", "none");
      if(this.player == 1) $('#player2').append("<div class='capturedPiece'></div>");
      if(this.player == 2) $('#player1').append("<div class='capturedPiece'></div>");
      Board.board[this.position[0]][this.position[1]] = 0;
      //reset position so it doesn't get picked up by the for loop in the canOpponentJump method
      this.position = [];
    }
  }
  
  
  /***
  Events
  ***/
  
  //select the piece on click if it is the player's turn
  $('.piece').on("click", function () {
    var selected;
    var isPlayersTurn = ($(this).parent().attr("class").split(' ')[0] == "player"+Board.playerTurn+"pieces");
    if(isPlayersTurn) {
      if($(this).hasClass('selected')) selected = true;
      $('.piece').each(function(index) {$('.piece').eq(index).removeClass('selected')});
      if(!selected) {
        $(this).addClass('selected');
      }
    }
  });
  
  //reset game when clear button is pressed
  $('#cleargame').on("click", function () {
    Board.clear();
  });
  
  //move piece when tile is clicked
  $('.tile').on("click", function () {
    //make sure a piece is selected
    if($('.selected').length != 0) {
      //find the tile object being clicked
      var tileID = $(this).attr("id").replace(/tile/, '');
      var tile = tiles[tileID];
      //find the piece being selected
      var piece = pieces[$('.selected').attr("id")];
      //check if the tile is in range from the object
      var inRange = tile.inRange(piece);
      if(inRange) {
        //if the move needed is jump, then move it but also check if another move can be made (double and triple jumps)
        if(inRange == 'jump') {
          if(piece.opponentJump(tile)) {
            piece.move(tile);
            if(piece.canJumpAny()) {
               Board.changePlayerTurn(); //change back to original since another turn can be made
               piece.element.addClass('selected');
            }
          } 
          //if it's regular then move it if no jumping is available
        } else if(inRange == 'regular') {
          if(!piece.canJumpAny()) {
            piece.move(tile);
          } else {
            alert("You must jump when possible!");
          }
        }
      }
    }
  });
  
}
