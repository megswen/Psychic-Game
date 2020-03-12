// List the letters the user and computer can guess in an array
var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create variables that hold the number of wins, losses, and guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Create a blank array that will hold the user's guesses so far 
var lettersGuessed = [];

// Create variables that hold the html elements where we want to display info
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var userGuessesText = document.getElementById("userguesses-text");

// Create a function that is run when the user presses a key
document.onkeyup = function(event) {
    userGuess.textContent=event.key;

// Determine what key was pressed


// Create a function that will make the computer select a random letter from the computerChoice array
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Create an if/else statement to determine if the user's letter guessed matches with the computer's, how many guesses are left, and increment wins or losses accordingly
if(userGuess === computerGuess)
{wins ++} else if (userGuess != computerGuess)
{guessesLeft --} else if (guessesLeft < 1)
{losses ++};

// Create a for Loop to make the guesses left decrement by 1 for every wrong letter guessed
var i;
for (i = 10; i < guessesLeft.length; i--)

// Display the wins, losses, and guesses left in their div ID's
winsText.textContent = "Your Wins: " + wins;
lossesText.textContent = "Your Losses: " + losses;
guessesLeftText.textContent = "Number of Guesses Left: " + guessesLeft;

// Display all letters guessed by user for the duration of the round

};