// Iteration 8: Making scoreboard functional
let playAgain = document.getElementById("play-again-button");
playAgain.addEventListener("click",() => {
    window.open("game.html", "_self")
})

let scoreBoard = document.getElementById("score-board");
let value = localStorage.getItem("score")
scoreBoard.textContent = value

// location.reload("index.html")