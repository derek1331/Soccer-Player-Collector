// Store wins, losses and score
var wins = 0;
var losses = 0;
var score = 0;

// Apply random numbers to 
var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var kane = Math.floor(Math.random() * 12) + 1;
var messi = Math.floor(Math.random() * 12) + 1;
var ronaldo = Math.floor(Math.random() * 12) + 1;
var neymar = Math.floor(Math.random() * 12) + 1;

// Update wins/loseses and score after game ends
var updateScore = function() {
  $("#score").text("Current Score: " + score);

  $("#wins").text("Wins: " + wins);

  $("#losses").text("losess " + losses);
};

// Restart game after it ends
var restart = function() {
  score = 0;
  goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

  $("#randomscore").text("Goal: " + goal);

  var kane = Math.floor(Math.random() * 12 + 1);
  var messi = Math.floor(Math.random() * 12 + 1);
  var ronaldo = Math.floor(Math.random() * 12 + 1);
  var neymar = Math.floor(Math.random() * 12 + 1);
  updateScore();
};

// Gameplay
var game = function() {
  if (score == goal) {
    wins++;
    alert("Ahrooooo");
    restart();
  } else if (score > goal) {
    losses++;
    alert("I'm a little tea pot and that's all I am");
    restart();
  } else {
    updateScore();
  }
};

// Applys random numbers to each 
$(document).ready(function() {
  $("#randomscore").text("Goal: " + goal);

  $("#messi").click(function() {
    $("#score").html((score = score + messi));
    game();
  });

  $("#ronaldo").click(function() {
    $("#score").html((score = score + ronaldo));
    game();
  });

  $("#neymar").click(function() {
    $("#score").html((score = score + neymar));
    game();
  });

  $("#kane").click(function() {
    $("#score").html((score = score + kane));
    game();
  });
});

