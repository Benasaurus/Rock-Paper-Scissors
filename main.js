
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
function computerPlay(){
    let computerGuess = getRandomInt(3)
    if (computerGuess === 0){
        computerHand = "Rock"
    }
    else if (computerGuess === 1){
        computerHand = "Paper"
    }
    else if (computerGuess === 2){
        computerHand = "Scissors"
    }
    return computerHand
}