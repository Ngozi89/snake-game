let playBoard = document.querySelector(".play-board");

let foodX, foodY;
let snakeX = 5, snakeY = 10;

let changeFoodPosition = () => {
    //Creates two random numbers between 0 and 20
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

let initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY}"></div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${foodX} / ${foodY}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition
initGame();