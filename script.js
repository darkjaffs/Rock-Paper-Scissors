let playerChoice = '';
let score = 0, scoreComputer = 0;
let resultAlert = '';
let win_alert = '';
let roundno = 0, flag = 0;
const rckbtn = document.querySelector('#rock');
const papbtn = document.querySelector('#paper');
const scsbtn = document.querySelector('#scissors');
const container = document.querySelector('#container');
const text_content = document.createElement('div');
const score_card = document.createElement('div');
const winText = document.createElement('div');
const btncontainer = document.querySelector('#buttoncontainer');



function getComputerChoice() {
    let computer_choice, num_gen;

    num_gen = Math.floor(Math.random() * 3) + 1;

    if (num_gen === 1) {
        computer_choice = "ROCK";
    }
    else if (num_gen === 2) {
        computer_choice = "PAPER";
    }
    else if (num_gen === 3) {
        computer_choice = "SCISSORS";
    }

    return computer_choice;  //We are going to uppercase so we could compare no matter the case
}

function playRound(computerSelection, playerSelection) {

    let gameCondition;
    

    roundno++;
    
    if (computerSelection === playerSelection) {
        return gameCondition = "Oh no! You Tied!";
    }
    else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        score++;
        return gameCondition = `You have won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        score++;
        return gameCondition = `You have won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        score++;
        return gameCondition = `You have won! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        scoreComputer++;
        return gameCondition = `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function winCheck() {

    if (score > scoreComputer && roundno >= 5)
    {
        winText.textContent = `Congratulations you win with a score of ${score}`;
        roundno = 0;
        flag = 1;
        score = 0;
        btncontainer.appendChild(winText);
    }
    else if (roundno >= 5 && score < scoreComputer)
    {
        winText.textContent = `You have lost with a score of ${score} while computer scored ${scoreComputer}`;
        roundno = 0;
        flag = 1;
        score = 0;
        btncontainer.appendChild(winText);
    }
    else if (roundno === 1 && flag === 1)
    {
        btncontainer.removeChild(winText);
    }
}

startGame = "Lets play a game of Rock, Paper and Scissors!";
text_content.textContent = startGame;
container.appendChild(text_content);


rckbtn.addEventListener('click', () => {
    playerChoice = 'ROCK';
    let computerChoice = getComputerChoice();
    resultAlert = playRound(computerChoice, playerChoice);

    score_card.textContent = `Current Score = ${score}`;
    container.appendChild(score_card);

    text_content.textContent = resultAlert;
    container.appendChild(text_content);

    winCheck();
})

papbtn.addEventListener('click', () => {
    playerChoice = 'PAPER';

    let computerChoice = getComputerChoice();
    resultAlert = playRound(computerChoice, playerChoice);

    score_card.textContent = `Current Score = ${score}`;
    container.appendChild(score_card);

    text_content.textContent = resultAlert;
    container.appendChild(text_content);

    winCheck();
})

scsbtn.addEventListener('click', () => {
    playerChoice = 'SCISSORS';

    let computerChoice = getComputerChoice();
    resultAlert = playRound(computerChoice, playerChoice);

    score_card.textContent = `Current Score = ${score}`;
    container.appendChild(score_card);

    text_content.textContent = resultAlert;
    container.appendChild(text_content);

    winCheck();
})


