let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.getElementById('p2Display');
let resetButton = document.getElementById('reset');
let numInput = document.querySelector("input[type='number']");
let scoreToWinDisplay = document.querySelector("p span");

let p1Score = 1;
let p2Score = 1;

let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function () {
    if (p1Score >= winningScore) {
        gameOver = true;
        p1Display.classList.add("winner");
        alert("Player One Won The Game!");
    }
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        //alert(`Score ${p1Score}`);
    }
});

p2Button.addEventListener("click", function () {
    if (p2Score >= winningScore) {
        gameOver = true;
        p2Display.classList.add("winner");
        alert("Player Two Won The Game!");
    }
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        //alert(`Score ${p1Score}`);
    }
});

resetButton.addEventListener("click", function () {
    reset();
});

numInput.addEventListener("change", function () {
    scoreToWinDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

function reset () {
    gameOver = false;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
}