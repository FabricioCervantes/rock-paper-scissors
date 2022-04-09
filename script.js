let user_score = 0;
let computer_score = 0;

const button = document.querySelector("#rock")
const button2 = document.querySelector("#scissors")
const button3 = document.querySelector("#paper")
const userScore = document.querySelector(".userScore")
const computerScore = document.querySelector(".computerScore")
const winner = document.querySelector(".winner")
const test = document.querySelector(".frase")
const restore = document.createElement("button")
button.addEventListener('click', rock)
button2.addEventListener('click', scissors)
button3.addEventListener('click', paper)
restore.addEventListener("click", repeat)

function computerPlay() {
    const values = ["rock", "paper", "scissors"];
    let finalValue = (values[Math.floor(Math.random() * values.length)])
    return finalValue;
}

function repeat() {
    user_score = 0;
    computer_score = 0;
    userScore.textContent = user_score;
    computerScore.textContent = computer_score;
    restore.remove();
    winner.textContent = "";
}

function rock() {
    playerSelection = "rock"
    round(playerSelection, computerPlay())
    game();
}

function scissors() {
    playerSelection = "scissors"
    round(playerSelection, computerPlay())
    game();
}

function paper() {
    playerSelection = "paper"
    round(playerSelection, computerPlay())
    game();
}

function frase(phrase) {
    test.textContent = ""
    test.textContent = phrase
    test.style.color = "white"
    test.style.fontSize = "32px"
}

function round(playerSelection, computerSelection) {
    if (playerSelection.toLocaleLowerCase() === computerSelection) {
        frase("This is a tie!")
    }
    if (playerSelection.toLocaleLowerCase() == "rock" && computerSelection == "scissors") {
        frase("Rock beats scissors, you win!")
        user_score++;
        userScore.textContent = user_score;
    }
    if (playerSelection.toLocaleLowerCase() == "scissors" && computerSelection == "rock") {
        frase("Rock beats scissors, you lose!")
        computer_score++;
        computerScore.textContent = computer_score;
    }
    if (playerSelection.toLocaleLowerCase() == "paper" && computerSelection == "rock") {
        frase("Paper beats rock, you win!")
        user_score++;
        userScore.textContent = user_score;
    }
    if (playerSelection.toLocaleLowerCase() == "rock" && computerSelection == "paper") {
        frase("Paper beats rock, you lose!")
        computer_score++;
        computerScore.textContent = computer_score;
    }
    if (playerSelection.toLocaleLowerCase() == "scissors" && computerSelection == "paper") {
        frase("Scissors beat paper, you win!")
        user_score++;
        userScore.textContent = user_score;
    }
    if (playerSelection.toLocaleLowerCase() == "paper" && computerSelection == "scissors") {
        frase("Scissors beat paper, you lose!")
        computer_score++;
        computerScore.textContent = computer_score;
    }
}

function game() {
    if (user_score === 5) {
        frase("")
        winner.textContent = "The user wins!"
        restore.classList.add("restore")
        restore.style.backgroundColor = "white"
        restore.textContent = "REPEAT"
        winner.append(restore)
    }

    if (computer_score === 5) {
        frase("")
        winner.textContent = "The computer wins!"
        restore.classList.add("restore")
        restore.style.backgroundColor = "white"
        restore.textContent = "REPEAT"
        winner.append(restore)
    }
}