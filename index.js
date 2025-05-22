// Players score variables
let computerScore = 0;
let humanScore = 0

let buttons = document.querySelector("#buttons");
const message = document.querySelector(".message");
const round = document.querySelector(".round");

// Create getComputerChoice function
function getComputerChoice() {
    // Create a random number 1-2
    let randomNumber = Math.floor(Math.random() * 3);
        // If random number equals 1 console Rock
        if (randomNumber === 1) {
            return "ROCK";
        } else if (randomNumber === 2) {
        // Else if random number equals 2 console Paper
            return "PAPER";
        } else {
        // Else console Scissors
            return "SCISSORS";
        }
// End the function
}

// Create getHumanChoice function
function getHumanChoice() {
    buttons.addEventListener("click", (event) => {
        let target = event.target
        const computerSelection = getComputerChoice();
        switch (target.id) {
            case "rock":
                humanSelection = "ROCK";
                playRound(computerSelection, humanSelection);
                break;

            case "paper":
                humanSelection = "PAPER";
                playRound(computerSelection, humanSelection);
                return;

            case "scissors":
                humanSelection = "SCISSORS";
                playRound(computerSelection, humanSelection);
                return;
        }
   
    });
// End the function 
}

// Create playRound function that take the computer and human choice as parameters
const playRound = function (computerSelection, humanSelection) {
    // Create a switch statement for all the possible cases
    if (computerScore === 5) {
        message.textContent = "The Computer Wins!";
        round.textContent = "";
        computerScore = 0;
        humanScore = 0;
    } else if (humanScore === 5) {
        message.textContent = "The Human Wins!";
        round.textContent = "";
        computerScore = 0;
        humanScore = 0;
    } else {
        switch (`${computerSelection}-${humanSelection}`) {
        case "ROCK-SCISSORS":
            computerScore++;
            message.textContent = `Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`;
            round.textContent =`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`;
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "PAPER-ROCK":
            computerScore++
            message.textContent = `Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`;
            round.textContent =`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`;
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "SCISSORS-PAPER":
            computerScore++
            message.textContent = `Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`;
            round.textContent =`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`;
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "SCISSORS-ROCK":
            humanScore++
            message.textContent = `Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`;
            round.textContent = `The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`;
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;

        case "ROCK-PAPER":
            humanScore++
            message.textContent = `Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`;
            round.textContent = `The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`;
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;

        case "PAPER-SCISSORS":
            humanScore++
            message.textContent = `Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`;
            round.textContent = `The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`;
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;
    
        default:
            message.textContent = `Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`;
            round.textContent = `This round was a tie! Score = Human: ${humanScore} and Computer: ${computerScore}`;
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`This round was a tie! Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;
    // End the statement
    }
    }
    
// End the function 
}

// Create playGame function that play 5 rounds
function playGame() {
    getHumanChoice();
}

playGame(); 