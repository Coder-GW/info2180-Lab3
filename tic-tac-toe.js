window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    let currentPlayer = "X";
    let gameActive = true;

    squares.forEach(square => {
        square.classList.add("square");

        square.addEventListener("mouseover", () => {
            if (gameActive && !square.textContent) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });

        square.addEventListener("click", () => handleMove(square));
    });

    function handleMove(square) {
        if (!gameActive || square.textContent) return;

        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (checkWinner(currentPlayer)) {
            status.textContent = "Congratulations! " + currentPlayer + " is the Winner!";
            status.classList.add("you-won");
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner(player) {
        const combos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        return combos.some(combo =>
            combo.every(index => squares[index].textContent === player)
        );
    }
});