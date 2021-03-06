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

    //function to control piece
    function Piece (element, place){
        this.element = element;
        this.place = place;
        this.player = '';
                
        if(this.element.attr("id") < 12){
            this.player = 1;
        }
        else{
            this.player = 2;
        }

        //check whether it is a big piece or not
        this.bigPiece = false;
        this.becomeBigPiece = function(){
            this.bigPiece = true;
            this.element.css("background-color", "green");
        }

        //move the piece
        this.move = function(tile){
          //make the tile move
            this.element.removeClass('selected');
            if(!Game.Hasanelement(tile.place[0], tile.place[1])){
            return false;
            }   

             //make sure the tile doesn't make a move backwards
            if(this.player == 1 && this.bigPiece == false){
                if(tile.place[0] < this.place[0]){
                return false;
                }
            }
            else if(this.player == 2 && this.bigPiece == false){
                if(tile.place[0] > this.place[0]){
                return false;
            }
        }
    
            //remove the mark from Game.board
            Game.board[this.place[0]][this.place[1]] = 0;
            Game.board[tile.place[0]][tile.place[1]] = this.player;
            this.place = [tile.place[0], tile.place[1]];

            //change the css
            this.element.css("top", Game.dictionary[this.place[0]]);
            this.element.css("left", Game.dictionary[this.place[1]]);

            //if the piece reaches the end on the opposide side; the piece will be a bigPiece
            if(!this.bigPiece && (this.place[0] ==0 || this.place[0] == 7)){
            this.becomeBigPiece();
            }
            Game.changeTurn();
            return true;
        };

        //tests if piece can jump anywhere
        this.canJumpAny = function () {
        if(this.canEnemyJump([this.place[0]+2, this.place[1]+2]) ||
            this.canEnemyJump([this.place[0]+2, this.place[1]-2]) ||
            this.canEnemyJump([this.place[0]-2, this.place[1]+2]) ||
            this.canEnemyJump([this.place[0]-2, this.place[1]-2])) {
                return true;
            }   
            return false;
        };

            //tests if enemy could made a specific jump
            this.canEnemyJump = function(newPlace){
                //find the x-movement and y-movement
                var dx = newPlace[1] - this.place[1];
                var dy = newPlace[0] - this.place[0];

                //Make sure the tile doesn't make a move backwards
                if(this.player == 1 && this.bigPiece == false){
                    if(newPlace[0] < this.place[0]){
                    return false;
                    }
                }
                else if(this.player == 2 && this.bigPiece == false){
                    if(newPlace[0] > this.place[0]){
                    return false;
                    }
                }
                //must be on the board
                if(newPlace[0] > 7 || newPlace[1] > 7 || newPlace[0] < 0 || newPlace[1] < 0){
                    return false;
                }
                //piece that's gonna be jumped over
                var tileToCheckx = this.place[1] + dx/2;
                var tileToChecky = this.place[0] + dy/2;
    
                //check is there is a piece and there is no piece after that piece
                if(!Game.Hasanelement(tileToChecky, tileToCheckx) && Game.Hasanelement(newPlace[0], newPlace[1])){
                    //find which piece
                    for(pieceIndex in pieces){
                        if(pieces[pieceIndex].place[0] == tileToChecky && pieces[pieceIndex].place[1] == tileToCheckx) {
                            if(this.player != pieces[pieceIndex].player){
                                return pieces[pieceIndex];
                                
                            }
                        }
                    }
                }
            };

            this.enemyJump = function(tile){
                var pieceToRemove = this.canEnemyJump(tile.place);
                //if there is a piece to be removed
                if(pieceToRemove){
                    pieces[pieceIndex].remove();
                return true;
                }
            return false;
            };
            
            

            this.remove = function() {
            //remove and delete it from the gameboard
            this.element.css("display", "none");
                if(this.player == 1){

                    $("#tilestaken1").append("I");
                }
                if(this.player == 2){

                    $("#tilestaken2").append("I");
                }
                Game.board[this.place[0]][this.place[1]] = 0;
                //reset position so it won't be taken by the for loop in de canEnemyJump method
                this.place = [];
            }

    }

    //calculate distance between places
    var distance = function (x1, y1, x2, y2){
        var calculate1 = Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2);
        return Math.sqrt(calculate1);
    }

    //check if a move is possible
    function Tile (element, place){
      this.element = element; // linked DOM element
      this.place = place; //place on the board
    //look if tile is in range for  a possible move
        this.inRange = function(piece){
        //look if move is just 1 tile; Pythagoras 1;1;sqrt(2)
        if(distance(this.place[0], this.place[1], piece.place[0], piece.place[1]) == Math.sqrt(2)){
            return "regular"; // regular move
        }
        //if it is a king it may travel further
        
        else if(distance(this.place[0], this.place[1], piece.place[0], piece.place[1]) == Math.sqrt(8)){
                return "Jump"; // regular move
        }
        }
        
    }
        
    

    //initialize game
    var Game = {
        board: gameBoard,
        playerTurn: 1,
        tilesElement: $(".tiles"),
        dictionary: ["0vw", "5vw", "10vw", "15vw", "20vw", "25vw", "30vw", "35vw", "40vw"],
        //fill the board
        setup: function() {
            var amountofpieces = 0;
            var amountoftiles = 0;
            for(row in this.board){
                for(column in this.board[row]){
                //algorithm on how the tiles should be placed on the board: for every odd row
                if(row%2 == 1) {
                    //where the column is even
                    if(column%2 == 0) {
                      this.tilesElement.append("<div class='tile' id='tile"+amountoftiles+"' style='top: "+this.dictionary[row]+"; left: "+this.dictionary[column]+";'></div>");
                      tiles[amountoftiles] = new Tile($("#tile"+amountoftiles), [parseInt(row), parseInt(column)]);
                      amountoftiles += 1;
                    }
                }
                else{
                    //where the column is odd
                    if(column%2 == 1) {
                        this.tilesElement.append("<div class='tile' id='tile"+amountoftiles+"' style='top: "+this.dictionary[row]+"; left: "+this.dictionary[column]+";'></div>");
                        tiles[amountoftiles] = new Tile($("#tile"+amountoftiles), [parseInt(row), parseInt(column)]);
                        amountoftiles += 1;
                    //how to place the pieces on the board: for player 1
                    }
                }
                if(this.board[row][column] == 1) {
                        $('.player1pieces').append("<div class='piece' id='"+amountofpieces+"' style='top: "+this.dictionary[row]+"; left: "+this.dictionary[column]+";'></div>");
                        pieces[amountofpieces] = new Piece($("#"+amountofpieces), [parseInt(row), parseInt(column)]);
                        amountofpieces += 1;
                }
                    //for player 2
                if(this.board[row][column] == 2) {
                        $('.player2pieces').append("<div class='piece' id='"+amountofpieces+"' style='top: "+this.dictionary[row]+"; left: "+this.dictionary[column]+";'></div>");
                        pieces[amountofpieces] = new Piece($("#"+amountofpieces), [parseInt(row), parseInt(column)]);
                        amountofpieces += 1;
                }
            }
        }
        },
        Hasanelement: function (row, column) {
            if(this.board[row][column] == 0) {
              return true;
            } 
            return false;
        },
        changeTurn: function () {
            if(this.playerTurn == 1) {
              this.playerTurn = 2;
              return;
            }
            if(this.playerTurn == 2) {
              this.playerTurn = 1;
            }
        },
        reset: function(){
            location.reload();
        },
        tilesElement: $('.tiles'),
    }

    Game.setup();

    
    

    //user input
    $(".piece").on("click", function(){
        var selected;
        var currentTurn = ($(this).parent().attr("class").split(' ')[0] == "player"+Game.playerTurn+"pieces");
        if(currentTurn){
            if($(this).hasClass('selected')){
                selected = true
            }
            $(".piece").each(function(index) {
                $(".piece").eq(index).removeClass('selected')});
            if(!selected){
                $(this).addClass('selected');
            }
        }
    });

    //reset button
    $("#restart").on("click", function() {
        Game.reset();
    });

    var Leave = {
        leave: function (){
            window.location.href = "Splash.html";
        }
    }

    //leave button 
    $("#leave").on("click", function() {
    Leave.leave();
});


    //move piece to clicked tile
    $(".tile").on("click", function(){
        //You can only click on tiles when there is a selected piece
        if($('.selected').length != 0){
            //take the tile id
            var tileID = $(this).attr("id").replace(/tile/, '');
            var tile = tiles[tileID];
            //take the title piece
            var piece = pieces[$('.selected').attr("id")];
            var inRange = tile.inRange(piece);
            if(inRange){
                if(inRange == 'Jump'){
                    if(piece.enemyJump(tile)){
                        piece.move(tile);
                        if(piece.canJumpAny()){
                            //now the same person can make another turn, which he has right to
                            Game.changeTurn();
                            piece.element.addClass('selected');
                        }
                    }
                }
                else if(inRange == 'regular'){
                    if(!piece.canJumpAny()){
                        piece.move(tile);
                    }
                    else{
                        alert("If you can slay an enemys' piece you have to!")
                    }
                }
            }
        }
    });

}
