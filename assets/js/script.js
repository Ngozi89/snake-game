let playBoard = document.querySelector(".play-board");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let controls = document.querySelectorAll(".controls i");

let foodA = 10, foodB = 15;
let snakeA = 5, snakeB = 10;
// Make the snake move using velocity
let velocityA = 0, velocityB = 0;

let changeFoodPosition = () => {
    //Creates two random numbers between 0 and 20 using developers tool
    foodA = Math.floor(Math.random() * 20) + 1;
    foodB = Math.floor(Math.random() * 20) + 1;
};

let changeDirection = e => {
console.log (e);
// Change value using velocity for motion on arrow key pressed using if and else if
if (e.key === "ArrowLeft" && velocityA != 1) {
    velocityA = 0;
    velocityB = -1;
} else if (e.key === "ArrowRight" && velocityA != -1) {
    velocityA = 0;
    velocityB = 1;
} else if (e.key === "ArrowUp" && velocityB != 1) {
    velocityA = -1;
    velocityB = 0;
} else if (e.key === "ArrowDown" && velocityB != -1) {
    velocityA = 1;
    velocityB = 0;
}
}


let initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodA} / ${foodB}"></div>`;
    // Add snake to the initGame
    snakeA += velocityA;
    snakeB += velocityB;
    htmlMarkup += `<div class="head" style="grid-area: ${foodA} / ${foodB}"></div>`;
    playBoard.innerHTML = htmlMarkup;
};
changeFoodPosition;
initGame();
// Add document event listner for the key arrow and call the key arrow to change direction
document.addEventListener("keydown", changeDirection)