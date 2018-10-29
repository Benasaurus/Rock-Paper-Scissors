var playerSelection = ""
var computerSelection= ""
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
function computerPlay(){
    let computerGuess = getRandomInt(3)
    if (computerGuess === 0){
        computerSelection = "Rock"
    }
    else if (computerGuess === 1){
        computerSelection = "Paper"
    }
    else if (computerGuess === 2){
        computerSelection = "Scissors"
    }
    return computerSelection
    }
function playRound(){
    let playerSelection = prompt("Enter your guess")
    let computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        document.write("Tie!");
    }
    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            document.write("Paper covers rock, you lose!");
        }   
        else if (computerSelection == "Scissors"){
            document.write("Rock destroys scissors, you win!");
        }
    }
    else if (playerSelection == "Paper"){
        if (computerSelection == "Rock"){
            document.write("Paper covers rock, you win!");
        }
        else if (computerSelection == "Scissors"){
            document.write("Scissors cut paper, you lose!");
        }
    }
    else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock"){
            document.write("Rock destroys scissors, you lose!");
        }
        else if (computerSelection == "Paper"){
            document.write("Scissors cut paper, you win!");
        }
    }
}