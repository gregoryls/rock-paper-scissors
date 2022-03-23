// Create a function, computerPlay, that will randomly return 'rock', 'paper', or 'scissors'.  
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
//Function, playRound, that takes playerSelection and computerSelection as inputs and returns the winner. 
//If player=choice, switch (computer) case rock, case paper, case scissors
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'rock':
                return 'Tie!';
            case 'paper':
                computerScore += 1;
                return 'You lose! Paper beats rock';
            case 'scissors':
                playerScore += 1;
                return 'You win! Rock beats scissors';
        }
    }else if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
                playerScore += 1;
                return 'You win! Paper beats rock';
            case 'paper':
                return 'Tie!';
            case 'scissors':
                computerScore += 1;
                return 'You lose! Scissors beats paper';
        }
    }else {
        switch (computerSelection){
            case 'rock':
                computerScore += 1;
                return 'You lose! Rock beats scissors';
            case 'paper':
                playerScore += 1;
                return 'You win! Scissors beats paper';
            case 'scissors':
                return 'Tie!';
        }
    }
}
let playerScore = 0;
let computerScore = 0;
//function, game(), that plays 5 rounds.  For...X5,  run computerPlay, player prompt, and playRound.  Initialize count variables for player and computer, increment the winner by 1 each round.  Send round result and total score to console each round. 
// let playerSelection equal player input of 'rock', 'paper', or 'scissors'.  Convert all submissions to lowercase. 
// let computerSelection equal the output of computerPlay
function game() {
    
    for (let i = 0; i<5; i++){
        //let playerSelection = prompt('Enter rock, paper, or scissors to play!', 'rock').toLowerCase()
        
        //let computerSelection = computerPlay();
        //console.log(playRound(playerSelection, computerSelection));
        rockButton.addEventListener('click',() => playRound('rock',computerSelection))
        console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    }
    if (playerScore > computerScore){
        console.log('Best of 5 result - You Win!');
    }else if (playerScore < computerScore){
        console.log('Best of 5 result - You Lose!');
    }else{
        console.log('Best of 5 result - Tie!')
    }
}
// let playButtons = document.querySelectorAll(".game-buttons button")
// playButtons.forEach(playButton => 
//     playButton.addEventListener('click',playRound));
let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click',() => console.log(playRound('rock',computerPlay())))
paperButton.addEventListener('click',() => console.log(playRound('paper',computerPlay())))
scissorsButton.addEventListener('click',() => console.log(playRound('scissors',computerPlay())))

//rockButton.addEventListener('click', playRound('rock',computerSelection))
//game();

