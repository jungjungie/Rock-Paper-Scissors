// Variables
let rockCard = document.querySelector("#rockCard");
let paperCard = document.querySelector("#paperCard");
let scissorsCard = document.querySelector("#scissorsCard");
let userMoveCard = document.querySelector("#userMoveCard");

let userMove = "";
let compMove = ""

// Sets the user move based on the rps card clicked
function setUserMove(event) {
    // console.log(event.target)
    // console.log(event.target.textContent)

    userMove = event.target.textContent.trim();
    console.log(userMove);

    userMoveCard.textContent = userMove;

    setCompMove();
}

// Randomly sets the computer's move
function setCompMove() {
    let moves = ["ROCK", "PAPER", "SCISSORS"];

    compMove = moves[Math.floor(Math.random() * 3)];
    console.log(compMove);
}

// Event listeners
rockCard.addEventListener("click", setUserMove);
paperCard.addEventListener("click", setUserMove);
scissorsCard.addEventListener("click", setUserMove);