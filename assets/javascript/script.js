//game variables
var wins = 0;
var loses = 0;
var guessRemaining = 9;
//user displays
var winDisplay = document.getElementById("wins")
var losesDisplay = document.getElementById("loses")
var guessRemainingDisplay = document.getElementById("guessRemaining")
var guessedDisplay = document.getElementById("guessed")
// array of computer choices
var computerLeters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
//user presses key
document.onkeyup = function(event) {

//user key entry
var userGuess = event.key;
var letter = String.fromCharCode(event.which).toLowerCase();
//computer letter choice
var computerLetter = computerLeters[Math.floor(Math.random() * computerLeters.length)]


if (guessRemaining > 0){
if (userGuess === computerLetter){
    alert("You won! Let's play again!");
    wins++;
    winDisplay.textContent = wins;
} else {
    alert("Wrong!! Guess Again!");
    guessRemaining--;
    guessRemainingDisplay.textContent = guessRemaining;
    guessedDisplay.textContent = userGuess;
}}  else {
    alert("You lose! Play again if you dare!");
    loses++;
    losesDisplay.textContent = loses;
    guessRemaining+ 9;
}

}



