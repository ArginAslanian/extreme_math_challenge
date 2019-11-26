/**
 * Levels breakdown:
 * 
 * Easy:            Numbers from 0-9
 * Intermediate:    Numbers from 10-50
 * Hard:            Numbers from 51-100
 */

 // Variables 
var min = 0;
var max = 0;
var playButton = document.getElementById('play-button');
var options = document.getElementsByName('level');
var gameScreen = document.getElementById('game-screen');
var question = document.getElementById('question-display');
var answers = new Array();
var correctAnswer;
var score = 0;
var numberOfQuestions = 0;
var button1 = document.getElementById("button_1");
var button2 = document.getElementById("button_2");
var button3 = document.getElementById("button_3");
var button4 = document.getElementById("button_4");
var scoreDisplay = document.getElementById("score-display");


/// Gameplay function!!!
function gamePlay(min, max) {
    // Find the operator +, -, *, or /
    var operator = Math.floor(Math.random() * 4);

    if (operator == 0) {
        // opertor 0: Addition
        var x = min + Math.floor(Math.random() * max);
        var y = min + Math.floor(Math.random() * max);
        
        question.innerHTML = (x + " + " + y);
        
        correctAnswer = Math.floor(Math.random() * 4);
        
        for (var i = 0; i < 4; i++) {
            
            if (i == correctAnswer) {
                
                answers[i] = x + y;
                
            } else {
                
                var incorrectAnswer = 1 + Math.floor(Math.random() * 100);
                
                while (incorrectAnswer == x + y || answers.includes(incorrectAnswer)) {
                    
                    incorrectAnswer = 1 + Math.floor(Math.random() * max);
                    
                }
                
                answers[i] = incorrectAnswer;
                
            }
            
        }
        
        button1.innerHTML = answers[0];
        button2.innerHTML = answers[1];
        button3.innerHTML = answers[2];
        button4.innerHTML = answers[3];
    
    } else if (operator == 1) {
        // opertor 1: Subtraction
        var x = min + Math.floor(Math.random() * max);
        var y = min + Math.floor(Math.random() * max);
        
        question.innerHTML = (x + " - " + y);
        
        correctAnswer = Math.floor(Math.random() * 4);
        
        for (var i = 0; i < 4; i++) {
            
            if (i == correctAnswer) {
                
                answers[i] = x - y;
                
            } else {
                
                var incorrectAnswer = 1 + Math.floor(Math.random() * 100);
                
                while (incorrectAnswer == x - y || answers.includes(incorrectAnswer)) {
                    
                    incorrectAnswer = 1 + Math.floor(Math.random() * max);
                    
                }
                
                answers[i] = incorrectAnswer;
                
            }
            
        }
        
        button1.innerHTML = answers[0];
        button2.innerHTML = answers[1];
        button3.innerHTML = answers[2];
        button4.innerHTML = answers[3];
    
    } else if (operator == 2) {
        // opertor 2: Multiplication
        var x = min + Math.floor(Math.random() * max);
        var y = min + Math.floor(Math.random() * max);
        
        question.innerHTML = (x + " * " + y);
        
        correctAnswer = Math.floor(Math.random() * 4);
        
        for (var i = 0; i < 4; i++) {
            
            if (i == correctAnswer) {
                
                answers[i] = x * y;
                
            } else {
                
                var incorrectAnswer = 1 + Math.floor(Math.random() * 100);
                
                while (incorrectAnswer == x * y || answers.includes(incorrectAnswer)) {
                    
                    incorrectAnswer = 1 + Math.floor(Math.random() * max);
                    
                }
                
                answers[i] = incorrectAnswer;
                
            }
            
        }
        
        button1.innerHTML = answers[0];
        button2.innerHTML = answers[1];
        button3.innerHTML = answers[2];
        button4.innerHTML = answers[3];
    
    } else if (operator == 4) {
        // opertor 4: Division
        var x = min + Math.floor(Math.random() * max);
        var y = min + Math.floor(Math.random() * max);
        var temp = x * y;
        
        question.innerHTML = (x + " / " + y);
        
        correctAnswer = Math.floor(Math.random() * 4);
        
        for (var i = 0; i < 4; i++) {
            
            if (i == correctAnswer) {
                
                answers[i] = temp / y;
                
            } else {
                
                var incorrectAnswer = 1 + Math.floor(Math.random() * 100);
                
                while (incorrectAnswer == temp / y || answers.includes(incorrectAnswer)) {
                    
                    incorrectAnswer = 1 + Math.floor(Math.random() * max);
                    
                }
                
                answers[i] = incorrectAnswer;
                
            }
            
        }
        
        button1.innerHTML = answers[0];
        button2.innerHTML = answers[1];
        button3.innerHTML = answers[2];
        button4.innerHTML = answers[3];
    
    }
}

// Answer button pressed
$(".answers").click(function() {
    
    if ($(this).attr("name") == correctAnswer) {
        score++;
    } 
    
    numberOfQuestions++;
    scoreDisplay.innerHTML = score + " / " + numberOfQuestions;
    
    gamePlay(min, max);
    
});


/***
 * Play button actions
 */

playButton.onclick = function() {
    if (options[0].checked) {
        min = 0;
        max = 9;
        gameScreen.style.visibility = "visible";

    } else if (options[1].checked) {
        min = 10;
        max = 50;
        gameScreen.style.visibility = "visible";

    } else if (options[2].checked) {
        min = 51;
        max = 100;
        gameScreen.style.visibility = "visible";

    } else {
        alert('Error: Please select your level!');

    }
    
    gamePlay(min, max);
}

window.addEventListener('DOMContentLoaded', (event) => {
    gameScreen.style.visibility = "hidden";
});