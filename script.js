let playerChoice = '';
let score = 0, scoreComputer = 0;
const rckbtn = document.querySelector('#rock');
const papbtn = document.querySelector('#paper');
const scsbtn = document.querySelector('#scissors');



function getComputerChoice() {
    let computer_choice, num_gen;

    num_gen = Math.floor(Math.random() * 3) + 1;

    if (num_gen === 1) {
        computer_choice = "rock";
    }
    else if (num_gen === 2) {
        computer_choice = "paper";
    }
    else if (num_gen === 3) {
        computer_choice = "scissors";
    }
    else {
        getComputerChoice(); //This is to make sure there are no error, this will rerun the function until a proper value is generated.
    }
    return computer_choice.toUpperCase();  //We are going to uppercase so we could compare no matter the case
}

function playRound(computerSelection, playerSelection) {

    let gameCondition;

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



let computerChoice = getComputerChoice();

rckbtn.addEventListener('click', () => {
    playerChoice = 'ROCK';
    console.log(playRound(computerChoice, playerChoice));
})

papbtn.addEventListener('click', () => {
    playerChoice = 'PAPER';
    console.log(playRound(computerChoice, playerChoice));
})

scsbtn.addEventListener('click', () => {
    playerChoice = 'SCISSORS';
    console.log(playRound(computerChoice, playerChoice));
})

if (score > scoreComputer) {
    alert(`Congratulations, You have won with a score of ${score} out of 5`);
}
else {
    alert(`You have lost the game with score of ${score}`);
}




console.log("Lets play a game of Rock, Paper and Scissors!");
