window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    let currentPlayer = "X";
    let gameActive = true;

    // --- Board Initialization ---
    squares.forEach(square => {
        square.classList.add("square");

        // Hover effects
        square.addEventListener("mouseover", () => {
            if (gameActive && !square.textContent) {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseout", () => {
            square.classList.remove("hover");
        });

        // Handle click
        square.addEventListener("click", () => handleMove(square));
    });

    // --- Move Handling ---
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

        // Switch player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // --- Check for Winner ---
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

    // --- Restart Game ---
    newGameBtn.addEventListener("click", () => {
        squares.forEach(square => {
            square.textContent = "";
            square.classList.remove("X", "O", "hover");
        });

        currentPlayer = "X";
        gameActive = true;
        status.textContent = "Move your mouse over a square and click to play!";
        status.classList.remove("you-won");
    });
});