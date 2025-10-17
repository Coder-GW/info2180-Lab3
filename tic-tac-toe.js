window.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const squares = board.querySelectorAll("div");
    const status = document.getElementById("status");
    const newGameBtn = document.querySelector(".btn");

    squares.forEach(square => {
        square.classList.add("square");
    });
});