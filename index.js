// Players score variables
let computerScore = 0;
let humanScore = 0;

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
    // Prompt the user for Rock, Paper, or Scissors choice
    let humanInput = prompt("Type your choice of Rock, Paper, or Scissors");
    // Console the user's input
    return humanInput.toUpperCase();
// End the function 
}

// Create playRound function that take the computer and human choice as parameters
function playRound(computerSelection, humanSelection) {
    // Create a switch statement for all the possible cases
    switch (`${computerSelection}-${humanSelection}`) {
        case "ROCK-SCISSORS":
            computerScore++
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            break;

        case "PAPER-ROCK":
            computerScore++
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            break;

        case "SCISSORS-PAPER":
            computerScore++
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            break;

        case "SCISSORS-ROCK":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            break;

        case "ROCK-PAPER":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            break;

        case "PAPER-SCISSORS":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            break;
    
        default:
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`This round was a tie! Score = Human: ${humanScore} and Computer: ${computerScore}`);
            break;
    // End the statement
    }
// End the function 
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);