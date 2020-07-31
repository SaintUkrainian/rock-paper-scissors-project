const startGameBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const result = document.getElementById("result");
const opponent = document.getElementById("opponent-text");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const choices = [ROCK, PAPER, SCISSORS];

let userChoice;
let opponentChoice;

function showInfo() {
    alert("It's not done yet!");
}

function getResult() {
    let getIndex = Math.floor(Math.random() * Math.floor(3));;
    opponentChoice = choices[getIndex];
    if (
        (userChoice == ROCK && opponentChoice == SCISSORS) ||
        (userChoice == SCISSORS && opponentChoice == PAPER) ||
        (userChoice == PAPER && opponentChoice == ROCK)
    ) {
        opponent.textContent = opponentChoice;
        result.textContent = "You've won!";
    } else if (userChoice == opponentChoice) {
        opponent.textContent = opponentChoice;
        result.textContent = "Wow, it's a draw!";
    } else {
        opponent.textContent = opponentChoice;
        result.textContent = "You've lost.";
    }
}

function isRock() {
    userChoice = ROCK;
    getResult();
}

function isPaper() {
    userChoice = PAPER;
    getResult();
}

function isScissors() {
    userChoice = SCISSORS;
    getResult();
}

startGameBtn.addEventListener("click", showInfo);
rockBtn.addEventListener("click", isRock);
paperBtn.addEventListener("click", isPaper);
scissorsBtn.addEventListener("click", isScissors);
