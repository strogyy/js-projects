var seconds = 00;
var tens = 00;

var appendTens = document.querySelector(".tens");
var appendSeconds = document.querySelector(".seconds");
var buttonStart = document.querySelector(".start");
var buttonStop = document.querySelector(".stop");
var buttonRestart = document.querySelector(".restart");
var interval;

function startTimer() {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
buttonStart.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);
});

buttonStop.addEventListener("click", () => {
  clearInterval(interval);
});

buttonRestart.addEventListener("click", () => {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
});
