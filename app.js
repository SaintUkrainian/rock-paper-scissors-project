const howToPlayBtn = document.getElementById("start-game-btn");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const result = document.getElementById("result");
const opponent = document.getElementById("opponent-text");
const progressBar = document.querySelectorAll("li");
const howToPlayModal = document.querySelector(".how-to-play-modal");
const backdrop = document.getElementById("backdrop");
const closeModalBtn = document.getElementById("close-modal-btn");
const conclusionModal = document.querySelector(".conclusion-modal");


const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const choices = [ROCK, PAPER, SCISSORS];

let userChoice;
let opponentChoice;
let counter = 0;
let reset = false;
let counterWins = 0;
let counterDraws = 0;
let counterLosses = 0;

function showModal(){
    howToPlayModal.classList.add("visible");
}

function closeModal(){
    howToPlayModal.classList.remove("visible");
}

function showBackdrop(){
    backdrop.classList.add("visible");
}

function closeBackdrop(){
    backdrop.classList.remove("visible");
}

function isFinished(){
    if(counter === 10){
        counter = 0;
        result.textContent = "Play again!";
        result.className = "";
        reset = true;
        showConclusionModal();
    }
}

function closeConclusionModal(){
    conclusionModal.classList.remove("visible");
    closeBackdrop();
    isReset();
}

function showConclusionModal(){
    conclusionModal.classList.add("visible");
    showBackdrop();
    const closeModalBtn = document.getElementById("conlusion-modal-close");
    closeModalBtn.addEventListener("click", closeConclusionModal);
    
    const numWins = document.getElementById("conclusion-wins");
    const numLosses = document.getElementById("conclusion-losses");
    const numDraws = document.getElementById("conclusion-draws");

    numWins.textContent = counterWins;
    numWins.className = "text-win";
    numDraws.textContent = counterDraws;
    numLosses.textContent = counterLosses;
    numLosses.className = "text-loss";
}

function isReset(){
    counterLosses = 0;
    counterWins = 0;
    counterDraws = 0;
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
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-win";
        result.textContent = "You've won!";
        progressBar[index].className = "result-win";
        progressBar[index].textContent = "W";
        counterWins++;
        isFinished();
    } else if (userChoice == opponentChoice) {
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-draw";
        result.textContent = "It's a draw!";
        progressBar[index].className = "result-draw";
        progressBar[index].textContent = "D";
        counterDraws++;
        isFinished();
    } else {
        const index = counter++;
        opponent.textContent = opponentChoice;
        result.className = "result-loss";
        result.textContent = "You've lost.";
        progressBar[index].className = "result-loss";
        progressBar[index].textContent = "L";
        counterLosses++;
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
    showModal();
    showBackdrop();
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
backdrop.addEventListener("click", ()=>{
    closeModal();
    closeBackdrop();
    closeConclusionModal();
});
closeModalBtn.addEventListener("click", ()=>{
    closeModal();
    closeBackdrop();
});
