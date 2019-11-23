/***
 * Play button actions
 */

var playButton = document.getElementById('play-button');
var options = document.getElementsByName('level');
var gameScreen = document.getElementById('game-screen');

playButton.onclick = function() {
    if (options[0].checked) {
        alert('Easy');

    } else if (options[1].checked) {
        alert('intermediate');

    } else if (options[2].checked) {
        alert('hard');

    } else {
        alert('Error: Please select your level!');

    }
    gameScreen.style.visibility = "visible";
}

window.addEventListener('DOMContentLoaded', (event) => {
    gameScreen.style.visibility = "hidden";
});