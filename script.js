//Function to choose randomly one of the three choices using an array
let user_score = 0;
let computer_score = 0;

game();

function computerPlay() {
    const values = ["rock", "paper", "scissors"];
    let finalValue = (values[Math.floor(Math.random() * values.length)])
    return finalValue;
}

function round(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLocaleLowerCase() === computerSelection) {
        result = "This is a tie!"
    }
    if (playerSelection.toLocaleLowerCase() == "rock" && computerSelection == "scissors") {
        result = "Rock beats scissors, you win!"
        user_score++;
    }
    if (playerSelection.toLocaleLowerCase() == "scissors" && computerSelection == "rock") {
        result = "Rock beats scissors, you lose!"
        computer_score++;
    }
    if (playerSelection.toLocaleLowerCase() == "paper" && computerSelection == "rock") {
        result = "Paper beats rock, you win!"
        user_score++;
    }
    if (playerSelection.toLocaleLowerCase() == "rock" && computerSelection == "paper") {
        result = "Paper beats rock, you lose!"
        computer_score++;
    }
    if (playerSelection.toLocaleLowerCase() == "scissors" && computerSelection == "paper") {
        result = "Scissors beat paper, you win!"
        user_score++;
    }
    if (playerSelection.toLocaleLowerCase() == "paper" && computerSelection == "scissors") {
        result = "Scissors beat paper, you lose!"
        computer_score++;
    }
    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt("¿Qué eliges?");
        console.log(round(playerSelection, computerPlay()));
        i;
    }
    if (user_score > computer_score) {
        alert("The user wins!")
    } else {
        alert("The computer wins!")
    }
}