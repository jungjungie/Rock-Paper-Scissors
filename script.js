// HTML Variables
let userChoiceCards = document.querySelectorAll(".userChoiceCards");
let userMoveCard = document.querySelector("#userMoveCard");
let userMoveText = document.querySelector("#userMoveText");
let userIcon = document.querySelector(".userIcon");
let compMoveCard = document.querySelector("#compMoveCard");
let compMoveText = document.querySelector("#compMoveText");
let compIcon = document.querySelector(".compIcon");
let result = document.querySelector("#result");

// Variables
let userMove = "";
let compMove = ""

// Sets the user move based on the rps card clicked
function setUserMove(event) {
    // console.log(event.target)
    // console.log(event.target.textContent)

    userMove = event.target.textContent.trim();
    // console.log(userMove);

    // Displays text for the move the user chose
    userMoveText.textContent = userMove;
    userMoveText.setAttribute("class", "show")   

    // Sets the userIcon for the move the user chose and displays it
    if (userMove === "ROCK") {
        userIcon.setAttribute("class", "fa fa-5x fa-hand-rock-o show");
        userIcon.setAttribute("aria-hidden", "true");
    } else if (userMove === "PAPER") {
        userIcon.setAttribute("class", "fa fa-5x fa-hand-paper-o show");
        userIcon.setAttribute("aria-hidden", "true");
    } else {
        userIcon.setAttribute("class", "fa fa-5x fa-hand-scissors-o show");
        userIcon.setAttribute("aria-hidden", "true");
    }

    setCompMove();
}

// Randomly sets the computer's move
function setCompMove() {
    let moves = ["ROCK", "PAPER", "SCISSORS"];

    compMove = moves[Math.floor(Math.random() * 3)];
    // console.log(compMove);

    // Displays text for the move the comp chose
    compMoveText.textContent = compMove;
    compMoveText.setAttribute("class", "show")   

    // Sets the compIcon for the move the comp chose and displays it
    if (compMove === "ROCK") {
        compIcon.setAttribute("class", "fa fa-5x fa-hand-rock-o show");
        compIcon.setAttribute("aria-hidden", "true");
    } else if (compMove === "PAPER") {
        compIcon.setAttribute("class", "fa fa-5x fa-hand-paper-o show");
        compIcon.setAttribute("aria-hidden", "true");
    } else {
        compIcon.setAttribute("class", "fa fa-5x fa-hand-scissors-o show");
        compIcon.setAttribute("aria-hidden", "true");
    }

    determineWinner();
}

// Determines winner
function determineWinner() {

    console.log(`user: ${userMove}`);
    console.log(`comp: ${compMove}`);

    result.setAttribute("class", "show");

    if (userMove === compMove) {
        result.textContent="It's a tie!"
    } else if ((userMove === "ROCK" && compMove === "SCISSORS") || (userMove === "PAPER" && compMove === "ROCK") || (userMove === "SCISSORS" && compMove === "PAPER")) {
        result.textContent="You win!"
    } else {
        result.textContent="The computer won!"
    }

    // Clears moves & results
    setTimeout(function () {
        userIcon.setAttribute("class", "hide");
        userMoveText.setAttribute("class", "hide");   
        compIcon.setAttribute("class", "hide");
        compMoveText.setAttribute("class", "hide")   
        result.textContent="";
    }, 2000);
}

// Event listeners
for (let i=0; i < userChoiceCards.length; i++) {
    userChoiceCards[i].addEventListener("click", setUserMove);
}