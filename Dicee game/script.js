var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var winner = document.querySelector(".winner");
var randomNum = Math.floor(Math.random() * 6 + 1);
var randomNum2 = Math.floor(Math.random() * 6 + 1);
img1.setAttribute("src", `images/dice${randomNum}.png`);
img2.setAttribute("src", `images/dice${randomNum2}.png`);
if (randomNum > randomNum2) {
  winner.textContent = "Player 1 won!  🏁";
} else if (randomNum === randomNum2) {
  winner.textContent = "Draw";
} else {
  winner.textContent = "Player 2 won!  🏁";
}
