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
//Function, playRound, that takes playerSelection and 
//computerSelection as inputs and returns the winner. 
//If player=choice, switch (computer) case rock, case paper, case scissors
function playRound (playerSelection, computerSelection) {
    let list = document.createElement('li');
    let score = document.querySelector('.score');
    let results = document.querySelector('.results');   
    if (winStatus === 1) {
        return;
    }
    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'rock':
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                list.textContent = 'Tie!'
                results.prepend(list);
                return 'Tie!';
            case 'paper':
                list.textContent = 'You lose! Paper beats rock'
                results.prepend(list);
                computerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You lose! Paper beats rock';
            case 'scissors':
                list.textContent = 'You win! Rock beats scissors'
                results.prepend(list);
                playerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You win! Rock beats scissors';
        }
    }else if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'rock':
                list.textContent = 'You win! Paper beats rock'
                results.prepend(list);
                playerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You win! Paper beats rock';
            case 'paper':
                list.textContent = 'Tie!'
                results.prepend(list);
                return 'Tie!';
            case 'scissors':
                list.textContent = 'You lose! Scissors beats paper'
                results.prepend(list);
                computerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You lose! Scissors beats paper';
        }
    }else {
        switch (computerSelection){
            case 'rock':
                list.textContent = 'You lose! Rock beats scissors'
                results.prepend(list);
                computerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You lose! Rock beats scissors';
            case 'paper':
                list.textContent = 'You win! Scissors beats paper'
                results.prepend(list);
                playerScore += 1;
                score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
                checkWinner (playerScore, computerScore);
                return 'You win! Scissors beats paper';
            case 'scissors':
                list.textContent = 'Tie!'
                results.prepend(list);
                return 'Tie!';
        }
    }
   
    
}

//function, game(), that plays 5 rounds.  For...X5,  run computerPlay, player prompt, and playRound.  Initialize count variables for player and computer, increment the winner by 1 each round.  Send round result and total score to console each round. 
// let playerSelection equal player input of 'rock', 'paper', or 'scissors'.  Convert all submissions to lowercase. 
// let computerSelection equal the output of computerPlay
function game() {
    
    
    // for (let i = 0; i<5; i++){
    //     //let playerSelection = prompt('Enter rock, paper, or scissors to play!', 'rock').toLowerCase()
        
    //     //let computerSelection = computerPlay();
    //     //console.log(playRound(playerSelection, computerSelection));
    //     rockButton.addEventListener('click',() => playRound('rock',computerSelection))
    //     console.log(`Score: Player ${playerScore} - ${computerScore} Computer`);
    // }
    // if (playerScore > computerScore){
    //     console.log('Best of 5 result - You Win!');
    // }else if (playerScore < computerScore){
    //     console.log('Best of 5 result - You Lose!');
    // }else{
    //     console.log('Best of 5 result - Tie!')
    // }
   // while (playerScore < 5 || computerScore < 5){
        removePreviousGame();

        // let rockButton = document.querySelector('.rock');
        // let paperButton = document.querySelector('.paper');
        // let scissorsButton = document.querySelector('.scissors');



        // rockButton.addEventListener('click',() => console.log(playRound('rock',computerPlay())))
        // paperButton.addEventListener('click',() => console.log(playRound('paper',computerPlay())))
        // scissorsButton.addEventListener('click',() => console.log(playRound('scissors',computerPlay())))
   

}

function checkWinner (playerScore, computerScore){
    let victoryText = document.createElement('h1');
    let victory = document.querySelector('.victory');

    if (playerScore >= 5){
        
        victoryText.textContent = 'You win the match!'
        victory.appendChild(victoryText);
        winStatus = 1;
        resetGame();
        
    }else if (computerScore >= 5){
        
        victoryText.textContent = 'You lose the match!'
        victory.appendChild(victoryText);
        winStatus = 1;
        resetGame();
    }
}

function resetGame(){
    let resetButton = document.createElement('button');
    let resetDiv = document.querySelector('.resetDiv');
    resetButton.textContent = 'Reset Game';
    resetButton.setAttribute('class', 'reset');
    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        winStatus = 0;
        removePreviousGame();
    });
    resetDiv.appendChild(resetButton);


}
function removePreviousGame() {
    let results = document.querySelector('.results')
    while (results.firstChild){
        results.removeChild(results.firstChild);
    }
    let score = document.querySelector('.score');
    score.textContent = 'Player 0 - 0 Computer';
    let resetDiv = document.querySelector('.resetDiv')
    while (resetDiv.firstChild){
        resetDiv.removeChild(resetDiv.firstChild);
    }
    let victory = document.querySelector('.victory')
    while (victory.firstChild){
        victory.removeChild(victory.firstChild);
    }
    

}

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');



rockButton.addEventListener('click',() => console.log(playRound('rock',computerPlay())))
paperButton.addEventListener('click',() => console.log(playRound('paper',computerPlay())))
scissorsButton.addEventListener('click',() => console.log(playRound('scissors',computerPlay())))

let playerScore = 0;
let computerScore = 0;
let winStatus = 0;
//game();
