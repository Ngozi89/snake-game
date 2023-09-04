let playBoard = document.querySelector(".play-board");
let scoreElement = document.querySelector(".score");
let highScoreElement = document.querySelector(".high-score");
let controls = document.querySelectorAll(".controls i");

let foodA = 5, foodB = 5;
let snakeA = 10, snakeB = 10;
// Make the snake move using velocity
let velocityA = 0, velocityB = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;
let gameOver = false;

// Get high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

let updateFoodPosition = () => {
    //Creates two random numbers between 0 and 20 using developers tool
    foodA = Math.floor(Math.random() * 20) + 1;
    foodB = Math.floor(Math.random() * 20) + 1;
};

// Add GameOver, Clear the timer and reload the page when game over
let handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
};

// Change value using velocity for motion on arrow key pressed using if and else if
let changeDirection = e => {
    console.log(e)
    if (e.key === "ArrowUp" && velocityB != 1) {
        velocityA = 0;
        velocityB = -1;
    } else if (e.key === "ArrowDown" && velocityB != -1) {
        velocityA = 0;
        velocityB = 1;
    } else if (e.key === "ArrowLeft" && velocityA != 1) {
        velocityA = -1;
        velocityB = 0;
    } else if (e.key === "ArrowRight" && velocityA != -1) {
        velocityA = 1;
        velocityB = 0;
    }
};

// Call changeDirection on each key clicked
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));
let initGame = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodB} / ${foodA}"></div>`;
    // Check if the snake eat the food and increment score by 1
    if (snakeA === foodB && snakeB === foodB) {
        updateFoodPosition();
        snakeBody.push([foodB, foodX]);
        score++;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Update snake head position base on velocity
    snakeA += velocityA;
    snakeB += velocityB;

    // ShifT forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeA, snakeB];
    if (snakeA <= 0 || snakeA > 20 || snakeB <= 0 || snakeB > 20) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Div for parts of snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // If the snake head hit its body or wall, set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
};

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);