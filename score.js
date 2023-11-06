// Iteration 8: Making scoreboard functional

let scoreboard = document.getElementById("score-board");

var urlQuery = new URLSearchParams(window.location.search);
console.log(urlQuery);

var score = urlQuery.get("score");
console.log(score);

scoreboard.innerHTML = score;

const playAgainBtn = document.getElementById("play-again-button");
playAgainBtn.onclick=()=>{
    location.href = "./game.html";
}
