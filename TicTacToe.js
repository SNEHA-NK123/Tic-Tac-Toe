const board = document.querySelector(".board");
const message = document.querySelector(".message");
const squares = Array.from(document.querySelectorAll(".box"));
const restartBtn = document.querySelector(".restart");

const players = ['X', 'O'];

let currentPlayer = players[0];

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

message.textContent = `${currentPlayer}'s turn`;

squares.forEach((square, index) => {

    square.addEventListener("click", () => {
        if (square.textContent || checkWinner(currentPlayer))
            return;

        square.textContent = currentPlayer;

        if (checkWinner(currentPlayer)) {
            message.textContent = `Game over. ${currentPlayer} wins the game! Please restart`;
        }
        else if (checkTieResult()) {
            message.textContent = "Game tied! Please restart";
        }
        else {
            currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
            message.textContent = `${currentPlayer}'s turn`;
        }
    });

});

const checkWinner = (player) => winningPatterns.some(
    (pattern) => pattern.every(
        (index) => squares[index].textContent === player
    )
);

const checkTieResult = () => {
    squares.every((square) => square.textContent);
};

const restartGame = () => {
    squares.forEach(
        (square) => (square.textContent = "")
    );
    currentPlayer = players[0];
    message.textContent = `${currentPlayer}'s turn`;
};

restartBtn.addEventListener("click", restartGame);