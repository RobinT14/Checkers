windows.onload = function(){
    var gameBoard = [
        [0, 1, 0, 1, 0, 1, 0, 1]
        [1, 0, 1, 0, 1, 0, 1, 0]
        [0, 1, 0, 1, 0, 1, 0, 1]
        [0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0]
        [2, 0, 2, 0, 2, 0, 2, 0]
        [0, 2, 0, 2, 0, 2, 0, 2]
        [2, 0, 2, 0, 2, 0, 2, 0]
    ];

    $("board").append(gameBoard);
}