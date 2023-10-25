// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

let game = document.getElementById("play-button");
game.addEventListener("click",() => {
    window.open("game.html", "_self")
})