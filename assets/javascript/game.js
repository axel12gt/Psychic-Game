var wins = 0
var losses = 0
var guessesLeft = 9

//array for guesses
var alphabet = [ 'a', 'b', 'c', 'd',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// variables that hook into HTML
var instructionText = document.getElementById("instruction-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesText = document.getElementById("guesses-left-text")
var compGuessText = document.getElementById("comp-guess-text")
var userGuessText = document.getElementById("user-guess-text")

var compGuessText = alphabet[Math.floor(Math.random()*alphabet.length)]



