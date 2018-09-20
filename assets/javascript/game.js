
var wins = 0;
var losses = 0;
var score = 0;

var goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
var kane = Math.floor(Math.random() * 12) + 1;
var messi = Math.floor(Math.random() * 12) + 1;
var ronaldo = Math.floor(Math.random() * 12) + 1;
var neymar = Math.floor(Math.random() * 12) + 1;

var updateScore = function () {
    $("#score").text("Current Score: " + score);

    $("#wins").text("Wins: " + wins);

    $("#losses").text("losess " + losses);
}

var restart = function () {
    score = 0;
    goal = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#randomscore").text("Goal: " + goal);

    var kane = Math.floor((Math.random() * 12) + 1);
    var messi = Math.floor((Math.random() * 12) + 1);
    var ronaldo = Math.floor((Math.random() * 12) + 1);
    var neymar = Math.floor((Math.random() * 12) + 1);
    updateScore();
}

var game = function () {
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
}

$(document).ready(function () {

    $("#randomscore").text("Goal: " + goal);

    $("#messi").click(function () {
        $("#score").html(score = score + messi);
        game();
    });

    $("#ronaldo").click(function () {
        $("#score").html(score = score + ronaldo);
        game();
    });

    $("#neymar").click(function () {
        $("#score").html(score = score + neymar);
        game();
    });

    $("#kane").click(function () {
        $("#score").html(score = score + kane);
        game();
    });
});

// Can't figure out whats going on with losses











