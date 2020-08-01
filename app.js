const howToPlayBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const result = document.getElementById("result");
const opponent = document.getElementById("opponent-text");
const progressBar = document.querySelectorAll("li");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const choices = [ROCK, PAPER, SCISSORS];

let userChoice;
let opponentChoice;
let counter = 0;
let reset = false;

function showInfo() {
    alert("It's not done yet!");
}

function isFinished(){
    if(counter === 10){
        counter = 0;
        alert("Round has finished!");
        result.textContent = "Play again!";
        result.className = "";
        reset = true;
    }
}

function isReset(){
    if(reset){
        for (let index = 0; index < progressBar.length; index++) {
            progressBar[index].textContent = "";
            progressBar[index].className = "";
        }
        reset = false;
    }
}

function getResult() {
    let getIndex = Math.floor(Math.random() * Math.floor(3));;
    opponentChoice = choices[getIndex];
    if (
        (userChoice == ROCK && opponentChoice == SCISSORS) ||
        (userChoice == SCISSORS && opponentChoice == PAPER) ||
        (userChoice == PAPER && opponentChoice == ROCK)
    ) {
        isReset();
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-win";
        result.textContent = "You've won!";
        progressBar[index].className = "result-win";
        progressBar[index].textContent = "W";
        isFinished();
    } else if (userChoice == opponentChoice) {
        isReset();
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-draw";
        result.textContent = "It's a draw!";
        progressBar[index].className = "result-draw";
        progressBar[index].textContent = "D";
        isFinished();
    } else {
        isReset();
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-loss";
        result.textContent = "You've lost.";
        progressBar[index].className = "result-loss";
        progressBar[index].textContent = "L";
        isFinished();
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

howToPlayBtn.addEventListener("click", () =>{
    alert("It's not done yet!");
});
rockBtn.addEventListener("click", () =>{
    userChoice = ROCK;
    getResult();
});
paperBtn.addEventListener("click", () =>{
    userChoice = PAPER;
    getResult();
});
scissorsBtn.addEventListener("click", () =>{
    userChoice = SCISSORS;
    getResult();
});
