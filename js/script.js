//Make computer select either Rock, Paper, or Scissors
function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * moves.length)];

}

//Player Selection

let playerInput = prompt("Enter either Rock, Paper, or Scissors: ");


//Play a round

function playRound(playerInput, computerPlay) {
    let computerSelection = computerPlay();
    let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

    if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
        return "Enter a valid play!";
    } else {

        if (playerSelection == "Paper" && computerSelection == "Rock") {
            return "Good job, you won! Paper beats Rock!";
        } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
            return "Good job, you won! Scissors beats Paper!";
        } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
            return "Good job, you won! Rock beats Scissors!";
        } else {
            return "You lose! Better luck next time!";
        }
    }
}

console.log(playRound(playerInput, computerPlay));

