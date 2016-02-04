// Waits for HTML to fully load

$(document).ready(function() {

// Clears textbox when clicked
  $("#p1textbox").click(function () {
    $("#p1textbox").val("");
  });
  $("#p2textbox").click(function () {
    $("#p2textbox").val("");
  });

// Binds enter Key to submit input in player one textbox and replaces the player 1 heading with submitted text
  $("#p1textbox").bind("enterKey", function(e) {
    var p1name = $("#p1textbox").val();
      $("#player1").text(p1name);
  });

// When enter is hit, checks if both player names have changed. If so, start button is shown.
  $('#p1textbox').keyup(function(e){
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    var p1name = $("#player1").text();
    var p2name = $("#player2").text();
    if (p1name != "Player 1" && p2name != "Player 2"){
      $("#startButton").show();
      }
    };
  });

// When enter is hit, checks if both player names have changed. If so, start button is shown.
  $("#p2textbox").bind("enterKey", function(e) {
    var p2name = $("#p2textbox").val();
    $("#player2").text(p2name);
  });
  $('#p2textbox').keyup(function(e){
    if(e.keyCode == 13) {
      $(this).trigger("enterKey");
    var p1name = $("#player1").text();
    var p2name = $("#player2").text();
    if (p1name != "Player 1" && p2name != "Player 2"){
      $("#startButton").show();
      }
    };
  });

// When start button is clicked: both input boxes are hidden, the player names' text size increases, a player is randomly chosen to go first (name is highlighted), and start button is hidden
  $("#startButton").click(function() {
    $("#p1textbox").hide();
    $("#p2textbox").hide();
    $("h2").animate({"font-size":"62px"});
    var randomNum = Math.floor(Math.random()*2);
      if (randomNum === 0){
        $("#leftCol").css("background-color", "#527fa9").css("color", "white").css("box-shadow", "inset 0 0 30px 15px #49628a");
      } else {
        $("#rightCol").css("background-color", "#527fa9").css("color", "white").css("box-shadow", "inset 0 0 30px 15px #49628a");
      }
    $("#startButton").hide();
  });
});
