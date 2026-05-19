const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

const cells = document.querySelectorAll(".cell");
const restartBtn = document.querySelector("#start-button");

let board;
let currentPlayer;
let gameStarted;

initializeGame();

function initializeGame() {
    board = ["", "", "", "", "", "", "", "", "",];
    currentPlayer = "X";
    gameStarted = true;

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }

    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (board[cellIndex] === '' && gameStarted == true) {
        board[cellIndex] = currentPlayer;
        this.textContent = currentPlayer;

        if (checkWinner()) {
            gameStarted = false;
            return;
        }
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    let roundOne = false;
    
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
            
        if (board[a] != "" &&
            board[a] == board[b] && 
            board[b] == board[c]) {

            roundOne = true;
            alert("Player " + currentPlayer + " won!");
            gameStarted = false;
            return;
        }
    }
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", "",];
    currentPlayer = "X";
    cells.forEach(cell => cell.textContent = "");
    gameStarted = true;
}