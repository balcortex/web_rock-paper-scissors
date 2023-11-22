console.clear();

const availableChoices = ['rock', 'paper', 'scissors'];

const playerScoreField = document.querySelector('#player-score');
const computerScoreField = document.querySelector('#computer-score');
const roundResultField = document.querySelector('#round-result');
const winnerField = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;
let roundResult = '';

document.querySelector('#rock').addEventListener('click', playRound);
document.querySelector('#paper').addEventListener('click', playRound);
document.querySelector('#scissors').addEventListener('click', playRound);

function disableButtons() {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissors').disabled = true;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return availableChoices[choice];
}

function playRound() {
    let playerChoice = this.id;
    let computerChoice = getComputerChoice();
    let playerWin = 1;

    if (playerChoice == computerChoice) {
        roundResult = `It's a draw. ${playerChoice} vs ${computerChoice}`
        roundResultField.textContent = roundResult;
        return;
    }

    if (playerChoice == 'rock' & computerChoice == 'paper') playerWin = -1;
    if (playerChoice == 'paper' & computerChoice == 'scissors') playerWin = -1;
    if (playerChoice == 'scissors' & computerChoice == 'rock') playerWin = -1;

    if (playerWin == 1) {
        roundResult = `Round result: Player wins - ${playerChoice} beats ${computerChoice}`;
        playerScoreField.textContent = `Player Score: ${++playerScore}`
        roundResultField.textContent = roundResult;
    }
    else {
        roundResult = `Round result: Player loses - ${playerChoice} loses to ${computerChoice}`;
        computerScoreField.textContent = `Computer Score: ${++computerScore}`
        roundResultField.textContent = roundResult;
    }

    if (playerScore >= 5) {
        winnerField.textContent = 'YOU WIN!';
        disableButtons();
    }
    if (computerScore >= 5) {
        winnerField.textContent = 'YOU LOSE!';
        disableButtons();
    }
}