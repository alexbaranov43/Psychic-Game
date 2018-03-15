var wins = 0;
var loses = 0;
var guessRemaining = 9;

var keysPressed = [];


document.onkeyup = function (event) {



    var computerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //user displays
    var winDisplay = document.getElementById("wins");
    var losesDisplay = document.getElementById("loses");
    var guessRemainingDisplay = document.getElementById("guessRemaining");
    var keysPressedDisplay = document.getElementById("guessed");




    //user key entry
    var userGuess = String.fromCharCode(event.which).toLowerCase();

    if (computerLetters.includes(userGuess)) {
        keysPressed.push(" " + userGuess);
        console.log(keysPressed);
        console.log(userGuess);

        winDisplay.innerText = wins;
        losesDisplay.innerText = loses;
        guessRemainingDisplay.innerText = guessRemaining;
        keysPressedDisplay.innerText = keysPressed;

        //computer letter choice
        var computerLetter = computerLetters[Math.floor(Math.random() * computerLetters.length)]
        console.log(computerLetter);
        //if (guessRemaining > 0){
        if (userGuess === computerLetter) {
            alert("You won! Let's play again!");
            wins++;
            winDisplay.textContent = wins;
            guessRemaining = 9;
            keysPressed = [];
        } else {
            alert("Wrong!! Guess Again!");
            guessRemaining--;
            console.log(guessRemaining);
            guessRemainingDisplay.textContent = guessRemaining;

            //guessedDisplay.textContent = (guessedDisplay + ", " (userGuess));
        
        }
        if (guessRemaining === 0) {
            alert("You lose! Play again if you dare!");
            loses++;
            losesDisplay.textContent = loses;
            guessRemaining = 9;
            keysPressed = [];
        }
    }

}



