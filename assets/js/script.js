let playBoard = document.querySelector(".play-board");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let controls = document.querySelectorAll(".controls i");

let foodA = 10, foodB = 15;
let snakeA = 5, snakeB = 10;

let changeFoodPosition = () => {
    //Creates two random numbers between 0 and 20
    foodA = Math.floor(Math.random() * 20) + 1;
    foodB = Math.floor(Math.random() * 20) + 1;
};

let initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodA} / ${foodB}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${foodA} / ${foodB}"></div>`;
    playBoard.innerHTML = htmlMarkup;
};
changeFoodPosition;
initGame();