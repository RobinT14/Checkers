window.onload = function(){
    

var Splash = {
    play: function (){
        window.location.href = "game.html";
        //game.html();
    }
}

//play button 1v1
$("#play").on("click", function() {
    Splash.play();
});

//play battle royal button
$("#Battle").on("click", function() {
   window.alert("Battle Royal Mode hasn't been released yet");
});

//mute button
$("#mute").on("click", function() {
    window.alert("Sound has been muted");
 });

 //stats button
$("#stats").on("click", function() {
    window.alert("32 Games have been played \n768 Tiles had been slain\n 16 Wins so far!");
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
