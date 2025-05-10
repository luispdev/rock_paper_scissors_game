// Players score variables
let computerScore = 0;
let humanScore = 0

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
const playRound = function (computerSelection, humanSelection) {
    // Create a switch statement for all the possible cases
    switch (`${computerSelection}-${humanSelection}`) {
        case "ROCK-SCISSORS":
            computerScore++;
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "PAPER-ROCK":
            computerScore++
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "SCISSORS-PAPER":
            computerScore++
            console.log(`Computer selection was: ${computerSelection} | Human selection was: ${humanSelection}`);
            console.log(`The computer wins this round. Score = Computer: ${computerScore} and Human: ${humanScore}`);
            return;

        case "SCISSORS-ROCK":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;

        case "ROCK-PAPER":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;

        case "PAPER-SCISSORS":
            humanScore++
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`The human wins this round. Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;
    
        default:
            console.log(`Human selection was: ${humanSelection} | Computer selection was: ${computerSelection}`);
            console.log(`This round was a tie! Score = Human: ${humanScore} and Computer: ${computerScore}`);
            return;
    // End the statement
    }
// End the function 
}

// Create playGame function that play 5 rounds
function playGame(numberOfRounds) {
    // Loop through the game 5 times
    for (let rounds = 0; rounds < numberOfRounds; rounds++) {
        console.log(`Round ${rounds + 1}`);
        // Call the playRound function
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();  
        playRound(computerSelection, humanSelection);
    }
    // If statement for the highest score
    if (computerScore > humanScore) {
        console.log("Computer Wins!")
    } else if (humanScore > computerScore) {
        console.log("Human Wins!")
    } else {
        console.log("It's a tie!");
    }
// End the function
}

let numberOfRounds = prompt("How many rounds do you want to play?");
playGame(numberOfRounds); 