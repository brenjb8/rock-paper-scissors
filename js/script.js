//Make computer select either Rock, Paper, or Scissors
function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    //let randomMove = moves[Math.floor(Math.random() * moves.length)];
    return moves[Math.floor(Math.random() * moves.length)];
}

computerPlay();

//Player Selection

let playerInput = prompt("Enter either Rock, Paper, or Scissors: ");
