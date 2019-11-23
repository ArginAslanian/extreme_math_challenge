/**
 * Levels breakdown:
 * 
 * Easy:            Numbers from 0-9
 * Intermediate:    Numbers from 10-50
 * Hard:            Numbers from 51-100
 */

 // Variables 
var playButton = document.getElementById('play-button');
var options = document.getElementsByName('level');
var gameScreen = document.getElementById('game-screen');

 // Easy Level
function easy(min, max) {
    alert("Easy level selected");
}

// Intermediate Level
function intermediate(min, max) {
    alert("Intermediate level selected");
}

// Hard Level
function hard(min, max) {
    alert("Hard level selected");
}


/***
 * Play button actions
 */

playButton.onclick = function() {
    if (options[0].checked) {
        easy(0, 9);

    } else if (options[1].checked) {
        intermediate(10, 50);

    } else if (options[2].checked) {
        hard(51, 100);

    } else {
        alert('Error: Please select your level!');

    }
    gameScreen.style.visibility = "visible";
}

window.addEventListener('DOMContentLoaded', (event) => {
    gameScreen.style.visibility = "hidden";
});