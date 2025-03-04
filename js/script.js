console.log("hello world! Touille's here");

/*
Make a computer choose between rock, paper and scissors

Player chooses between rock paper scissors

Verdict - win or lose
*/

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

//take buttons and add them to nodelist
const buttons = document.querySelectorAll(".btn");
const resetBtnContainer = document.querySelector("div.reset-btn");

let result = document.querySelector(".result");

let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let winner = document.querySelector(".winner");

function getComputerChoice() {
    const choices = [rock, paper, scissors];

    const index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    // If statement for player's rock 
    if (playerSelection === rock && computerSelection === rock) {
        result.textContent = "Tie!";
    } else if (playerSelection === rock && computerSelection === paper) {
        result.textContent = "You Lose! Paper beats Rock";
    } else if (playerSelection === rock && computerSelection === scissors) {
        result.textContent = "You Win! Rock beats Scissors";
    }

    //If statement for player's scissors
    if (playerSelection === scissors && computerSelection === scissors) {
        result.textContent = "Tie!";
    } else if (playerSelection === scissors && computerSelection === rock) {
        result.textContent = "You Lose! Rock beats Scissors";
    } else if (playerSelection === scissors && computerSelection === paper) {
        result.textContent = "You Win! Scissors beat Paper";
    }

    //If statement for player's paper
    if (playerSelection === paper && computerSelection === paper) {
        result.textContent = "Tie!";
    } else if (playerSelection === paper && computerSelection === scissors) {
        result.textContent = "You Lose! Scissors beat Paper";
    } else if (playerSelection === paper && computerSelection === rock) {
        result.textContent = "You Win! Paper beats Rock";
    }
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
        //add to buttons event, check who won
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.textContent, getComputerChoice());
            if (result.textContent.includes("Win")) {
                playerScore++;
                player.textContent = `Player: ${playerScore}`;
            } else if (result.textContent.includes("Lose")) {
                computerScore++;
                computer.textContent = `Computer: ${computerScore}`;
            }

            if (playerScore == 5) {
                winner.textContent = "Player WINS!";
                disableButtons();
            } else if (computerScore == 5) {
                winner.textContent = "Computer WINS!"
                disableButtons();
            }
        });
    });
}

function createResetBtn() {
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "?? Reset Game ??";
    
    return resetBtn; 
}

playGame();