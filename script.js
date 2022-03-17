// Create a function, computerPlay, that will randomly return 'rock', 'paper', or 'scissors'. 
// let computerSelection equal the output of computerPlay
// let playerSelection equal player input of 'rock', 'paper', or 'scissors'
//Function, playRound, that takes playerSelection and computerSelection as inputs and returns the winner. 
//If player=choice, switch (computer) case rock, case paper, case scissors
//
function computerPlay () {
    let randomNumber = Math.floor(Math.random()*3+1)
    
    switch (randomNumber){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';        
    }
}
