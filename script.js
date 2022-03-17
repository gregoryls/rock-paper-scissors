// Create a function, computerPlay, that will randomly return 'rock', 'paper', or 'scissors'. 
// let computerSelection equal the output of computerPlay
// let playerSelection equal player input of 'rock', 'paper', or 'scissors'.  Convert all submissions to lowercase. 
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

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'rock':
                return 'Tie!';
            case 'paper':
                return 'You lose! Paper beats rock';
            case 'scissors':
                return 'You win! Rock beats scissors';
        }
    }else if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
                return 'You win! Paper beats rock';
            case 'paper':
                return 'Tie!';
            case 'scissors':
                return 'You lose! Scissors beats paper';
        }
    }else {
        switch (computerSelection){
            case 'rock':
                return 'You lose! Rock beats scissors';
            case 'paper':
                return 'You win! Scissors beats paper';
            case 'scissors':
                return 'Tie!';
        }
    }
}
let playerSelection = prompt('Enter rock, paper, or scissors', 'rock')
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));