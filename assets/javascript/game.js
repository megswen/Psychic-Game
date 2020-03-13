// List the letters the user and computer can guess in an array
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables that hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Create a blank array that will hold the user's guesses so far 
var lettersGuessed = [];

// Create variables that hold the html elements where we want to display info
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("userguesses-text");

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Create a function that is run when the user presses a key
document.onkeyup = function (event) {
    var letter = event.key;

    if (!lettersGuessed.includes(letter)) {
        lettersGuessed.push(letter);
        if (letter === computerGuess) {
            wins++;
        } else {
            guessesLeft--;
            if(guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                lettersGuessed = [];
                computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
            }
        }
        console.log(losses);
        console.log(lettersGuessed);
    }

    // Display the wins, losses, and guesses left in their div ID's
    winsText.textContent = "Your wins: " + wins;
    lossesText.textContent = "Your losses: " + losses;
    guessesLeftText.textContent = "Number of guesses left: " + guessesLeft;

    // Display all letters guessed by user for the duration of the round
    lettersGuessed.textContent = "Letters guessed: " + lettersGuessed;
};