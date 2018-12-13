window.onload = function(){
    
    //play button 1v1
$("#play").on("click", function() {
    res.sendFile("game.html", {root: "./public"});
});

//play battle royal button
$("#Battle").on("click", function() {
   alert("Battle Royal Mode hasn't been released yet");
});

}




//play button 1v1
//$("#play").on("click", function() {
  //  alert("Help!");
//});

 //play online button
 //$("#br").on("click", function() {
   // res.sendFile("game.html", {root: "./public"});
//});

 /*/show statistics button
 $("#stats").on("click", function() {
    Game.reset();
});

*/
