var drums = document.querySelectorAll(".drum");
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

const drumW = new Audio("sounds/tom-1.mp3");
const drumA = new Audio("sounds/tom-2.mp3");
const drumS = new Audio("sounds/tom-3.mp3");
const drumD = new Audio("sounds/tom-4.mp3");
const drumJ = new Audio("sounds/snare.mp3");
const drumK = new Audio("sounds/crash.mp3");
const drumL = new Audio("sounds/kick-bass.mp3");

window.addEventListener("keydown", (event) => {
  var lowerd = event.key.toLowerCase();

  if (lowerd == "w") {
    drumW.play();
  } else if (lowerd === "a") {
    drumA.play();
  } else if (event.key === "s") {
    drumS.play();
  } else if (event.key === "d") {
    drumD.play();
  } else if (event.key === "j") {
    drumJ.play();
  } else if (event.key === "k") {
    drumK.play();
  } else if (event.key === "l") {
    drumL.play();
  }
});

for (var i = 0; i < numberOfDrumButtons; i++) {
  drums[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        drumW.play();
        break;
      case "a":
        drumA.play();
        break;
      case "s":
        drumS.play();
        break;
      case "d":
        drumD.play();
        break;
      case "j":
        drumJ.play();
        break;
      case "k":
        drumK.play();
        break;
      case "l":
        drumL.play();
        break;

      default:
    }
  });
}
