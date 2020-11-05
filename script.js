// Variables
let rockCard = document.querySelector("#rockCard");
let paperCard = document.querySelector("#paperCard");
let scissorsCard = document.querySelector("#scissorsCard");

let userMove = "";

function setUserMove(event) {
    // console.log(event.target)
    // console.log(event.target.textContent)

    userMove = event.target.textContent;
    console.log(userMove);
}

rockCard.addEventListener("click", setUserMove);
paperCard.addEventListener("click", setUserMove);
scissorsCard.addEventListener("click", setUserMove);