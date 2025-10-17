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

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

});