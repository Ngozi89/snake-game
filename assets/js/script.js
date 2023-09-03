let playBoard = document.querySelector(".play-board");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let controls = document.querySelectorAll(".controls i");

let foodA = 15, foodB = 12;

let initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodA} / ${foodB}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
initGame();