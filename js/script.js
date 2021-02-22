//Make computer select either Rock, Paper, or Scissors
// function computerPlay() {
//     let moves = ["Rock", "Paper", "Scissors"];
//     return moves[Math.floor(Math.random() * moves.length)];

// }


//Player Selection




//Play a round

// function playRound(playerInput, computerPlay) {
//     let computerSelection = computerPlay();
//     let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//     if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
//         return "Enter a valid play!";
//     } else {

//         if (playerSelection == "Paper" && computerSelection == "Rock") {
//             return "Good job, you won! Paper beats Rock!";
//         } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
//             return "Good job, you won! Scissors beats Paper!";
//         } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
//             return "Good job, you won! Rock beats Scissors!";
//         } else {
//             return "You lose! Better luck next time!";
//         }
//     }
// }


//Full game, 5 rounds



function game() {
    let computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;
    let roundNum = 0;

    function computerPlay() {
        let moves = ["Rock", "Paper", "Scissors"];
        return moves[Math.floor(Math.random() * moves.length)];

    }

    //Play a round
    function playRound() {

        while (roundNum < 5) {
            let playerInput = prompt("Enter either Rock, Paper, or Scissors: ");
            let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

            if (playerSelection !== "Rock" && playerSelection !== "Paper" && playerSelection !== "Scissors") {
                return "Enter a valid play!";
            } else {

                if (playerSelection == "Paper" && computerSelection == "Rock") {
                    playerScore++;
                    roundNum++;
                    return `Good job, you won! Paper beats Rock! The score is: Player- ${playerScore} Computer- ${computerScore}!`;
                } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
                    playerScore++;
                    roundNum++;
                    return `Good job, you won! Scissors beats Paper! The score is: Player- ${playerScore} Computer- ${computerScore}!`;
                } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
                    playerScore++;
                    roundNum++;
                    return `Good job, you won! Rock beats Scissors! The score is: Player- ${playerScore} Computer- ${computerScore}!`;
                } else {
                    computerScore++;
                    roundNum++;
                    return `You lose! Better luck next time! The score is: Player- ${playerScore} Computer- ${computerScore}!`;
                }
            }

        }

    }
    //Get the score
    console.log(playRound());
    console.log(`Round ${roundNum}/5`);

    //Stop at 5

}

game();

