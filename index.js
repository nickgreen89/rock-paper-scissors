//Specify round/game win messages 
let playerWinRound = 'You win this round!'; 
let computerWinRound = 'Computer wins this round!'; 
let draw = 'It\'s a tie!'; 
let playerWinGame = 'Congratulations! You\'ve won the game!'; 
let computerWinGame = 'You lose! Better luck next time!'; 

//Get computer's choice. 
function getComputerChoice() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    if (getRandomInt(1, 3) === 1) {
        return 'rock'; 
    }
    else if (getRandomInt(1, 3) === 2) {
        return 'paper'; 
    }
    else {
        return 'scissors';
    }
}
let computerSelection = getComputerChoice(); 

//Play one round. 
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return draw;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        return playerWinRound;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        return computerWinRound;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        return playerWinRound;
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        return computerWinRound; 
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        return playerWinRound; 
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        return computerWinRound;
    }
    else {
        return 'Hmmm, you can\'t use that...'
    }
}

let playerScore = 0; 
let computerScore = 0; 


//Plays 5 rounds 
for (let i = 1; i < 6; i++) {
    let playerSelection = prompt('Make your move.'); 
    let computerSelection = getComputerChoice(); 
    let roundResult = playRound(playerSelection, computerSelection); 
    function game() {
        //Check for final round & declare winner or draw 
        if (i % 5 === 0 && roundResult === playerWinRound && playerScore > computerScore) {
            return `${roundResult} The final score is  Player: ${++playerScore} Computer: ${computerScore}. ${playerWinGame}`;
        }
        else if (i % 5 === 0 && roundResult === playerWinRound && computerScore > playerScore) {
            return `${roundResult} The final score is Player: ${++playerScore} Computer: ${computerScore}. ${computerWinGame}`; 
        }
        else if (i % 5 === 0 && roundResult === computerWinRound && computerScore > playerScore) {
            return `${roundResult} The final score is Player: ${playerScore} Computer: ${++computerScore}. ${computerWinGame}`;
        }
        else if (i % 5 === 0 && roundResult === computerWinRound && computerScore < playerScore) {
            return `${roundResult} The final score is Player: ${playerScore} Computer: ${++computerScore}. ${playerWinGame}`;
        }
        else if (i % 5 === 0 && roundResult === draw && computerScore > playerScore) {
            return `${roundResult} The final score is Player: ${playerScore} Computer: ${computerScore}. ${computerWinGame}`;
        }
        else if (i % 5 === 0 && roundResult === draw && playerScore > computerScore) {
            return `${roundResult} The final score is Player: ${playerScore} Computer: ${computerScore}. ${playerWinGame}`; 
        } 
        else if (i % 5 === 0 && playerScore === computerScore) {
            return `${roundResult} The final score is Player: ${playerScore} Computer: ${computerScore}. How anti-climactic.`; 
        }
        //If tie, nobody gets a point
        else if (roundResult === draw) {
            return `${roundResult} The score is now Player: ${playerScore} Computer: ${computerScore}`; 
        }
        //If player wins, increase player score by 1 
        else if (roundResult === playerWinRound) {
            return `${roundResult} The score is now Player: ${++playerScore} Computer: ${computerScore}`; 
        } 
        //If computer wins, increase computer score by 1
        else if (roundResult === computerWinRound) {
            return `${roundResult} The score is now Player: ${playerScore} Computer: ${++computerScore}`;
        }
    } 
    console.log(game()); 
} 




