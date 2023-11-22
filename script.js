console.clear();

const availableChoices = ['Rock', 'Paper', 'Scissors'];

game(5);

function game(rounds) {
    let playerWins = 0;
    let computerWins = 0;
    let computerChoice;
    let playerChoice;
    let roundResult;

    for (let i = 0; i < rounds; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt('Enter your choice: ');
        roundResult = playRound(playerChoice, computerChoice);

        if (roundResult == -1) computerWins++;
        if (roundResult == 1) playerWins++;
    }

    if (playerWins > computerWins) console.log(`Player Wins. Score: ${playerWins}-${computerWins}`);
    else if (computerWins > playerWins) console.log(`Computer Wins. Score: ${computerWins}-${playerWins}`);
    else console.log(`It's a draw. Score: ${computerWins}-${playerWins}`);
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    return availableChoices[choice];
}

function playRound(playerChoice, computerChoice) {
    let player = playerChoice.toLowerCase();
    let compu = computerChoice.toLowerCase();
    let playerWin = 1;

    if (player == compu) {
        console.log(`It's a draw. ${playerChoice} vs ${computerChoice}`);
        return 0;
    }

    if (player == 'rock' & compu == 'paper') playerWin = -1;
    if (player == 'paper' & compu == 'scissors') playerWin = -1;
    if (player == 'scissors' & compu == 'rock') playerWin = -1;


    if (playerWin == 1) {
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        return 1;
    }
    else {
        console.log(`You Lose! ${playerChoice} loses to ${computerChoice}`);
        return -1;
    }
}