let playBoard = document.querySelector(".play-board");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let controls = document.querySelectorAll(".controls i");

let foodA = 15, foodB = 12;

//Creates two random numbers between 1 and 20
foodA = Math.floor(Math.random() * 20) + 1;
foodB = Math.floor(Math.random() * 20) + 1;

let initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodA} / ${foodB}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame();