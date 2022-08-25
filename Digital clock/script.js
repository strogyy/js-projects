var clock = document.querySelector(".clock");
clock.innerText = "00:00:00 PM";
const setClock = () => {
  var current = new Date();

  var currentTime = current.toLocaleTimeString();

  clock.innerText = currentTime;
};

const invertal = setInterval(setClock,1000)

invertal();