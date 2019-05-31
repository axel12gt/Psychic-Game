var wins = 0
var losses = 0
var guessesLeft = 9

//array for guesses
var alphabet = [ 'a', 'b', 'c', 'd',  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var compGuess

function renderLetter(){
    compGuess = alphabet[Math.floor(Math.random()*alphabet.length)]
}

function updateWins(){ //updates wins
    document.querySelector("#wins").innerHTML = "Wins: " + wins
}
function updateLosses(){ // updates losses
    document.querySelector("#losses").innerHTML = "Losses: " + losses
}
function updateGuessesLeft(){// updates guesses left
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft
}

// starts the game by rendering letter
renderLetter()
updateLosses() //initializes losses to 0
updateWins() //initializes wins to 0
updateGuessesLeft() //initializes guesses to 9


// Logic for key press event
document.onkeyup = function(event){

    //Says which key was pressed
    var userguess = event.key
    console.log(userguess)

    // checks to see if user guess is a part of the alphabet array
    if(alphabet.indexOf(userguess) !== -1 ){
        if(userguess == compGuess){ 
            //wins +1
            wins++
            //resets guesses to 9
            guessesLeft = 9
            //updates wins
            updateWins()
            //updates guesses
            updateGuessesLeft()
            //renders next letter
            renderLetter()
        }else{
            //nested if statement to catch if guesses left = 0 and updates losses
            if(guessesLeft == 0){
                //losses +1
                losses++
                //resets guesses to 9
                guessesLeft = 9
                //updates losses
                updateLosses()
                // updates guesses
                updateGuessesLeft()
                //renders next letter
                renderLetter()
            }
            //guesses left --
            guessesLeft--
            //updates guesses
            updateGuessesLeft()
        }

    }

    //logic that updates wins and losses
    // if (compGuessText === userguess){
    //     wins++
    // } else{
    //     losses++
    // }


}


