//Full game, 5 rounds

let roundNum = 0;
let playerScore = 0;
let computerScore = 0;

function game() {
    let computerSelection = computerPlay();

    function computerPlay() {
        let moves = ["Rock", "Paper", "Scissors"];
        return moves[Math.floor(Math.random() * moves.length)];

    }

    //Play a round
    function playRound() {


        let playerInput = prompt("Enter either Rock, Paper, or Scissors: ");
        let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

        if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
            return "Enter a valid play!";
        } else {

            if (playerSelection == "Paper" && computerSelection == "Rock") {
                playerScore++;
                roundNum += 1;
                return `Good job, you won! Paper beats Rock! The score is: Player - ${playerScore} Computer - ${computerScore}!`;
            } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                playerScore++;
                roundNum += 1;
                return `Good job, you won! Scissors beats Paper! The score is: Player - ${playerScore} Computer - ${computerScore}!`;
            } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                playerScore++;
                roundNum += 1;
                return `Good job, you won! Rock beats Scissors! The score is: Player - ${playerScore} Computer - ${computerScore}!`;
            } else {
                computerScore++;
                roundNum += 1;
                return `You lose! Better luck next time! The score is: Player - ${playerScore} Computer- ${computerScore}!`;
            }
        }


    }
    //Get the score
    function checkRound(roundNum) {
        for (roundNum = 0; roundNum <= 5; roundNum++) {
            if (roundNum < 5) {
                console.log(playRound());
                console.log(`Round ${roundNum + 1}/5`);
            } else {
                if (playerScore > computerScore) {
                    return `Game over! You won the game! Final score: Player - ${playerScore} Computer - ${computerScore}`
                } else {
                    return `Game over! You lost! Final score - Player ${playerScore} Computer - ${computerScore}`
                }
            }
        }

    }

    console.log(checkRound());
}

game();

