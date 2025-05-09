// Create getComputerChoice function
function getComputerChoice() {
    // Create a random number 1-2
    randomNumber = Math.floor(Math.random() * 3);
        // If random number equals 1 console Rock
        if (randomNumber === 1) {
            console.log("Rock");
        } else if (randomNumber === 2) {
        // Else if random number equals 2 console Paper
            console.log("Paper");
        } else {
        // Else console Scissors
            console.log("Scissors");
        }
// End the function
}

getComputerChoice();
getComputerChoice();
