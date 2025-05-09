// Create getComputerChoice function
function getComputerChoice() {
    // Create a random number 1-2
    let randomNumber = Math.floor(Math.random() * 3);
        // If random number equals 1 console Rock
        if (randomNumber === 1) {
            console.log("ROCK");
        } else if (randomNumber === 2) {
        // Else if random number equals 2 console Paper
            console.log("PAPER");
        } else {
        // Else console Scissors
            console.log("SCISSORS");
        }
// End the function
}

// Create getHumanChoice function
function getHumanChoice() {
    // Prompt the user for Rock, Paper, or Scissors choice
    let humanInput = prompt("Type your choice of Rock, Paper, or Scissors");
    // Console the user's input
    console.log(humanInput.toUpperCase());
// End the function 
}

getComputerChoice();
getHumanChoice();