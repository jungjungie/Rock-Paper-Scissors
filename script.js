// Variables
let userChoiceCards = document.querySelectorAll(".userChoiceCards");
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
for (let i=0; i < userChoiceCards.length; i++) {
    userChoiceCards[i].addEventListener("click", setUserMove);
}