let num = 0;
const sliderContainer = document.querySelector(".slider-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const max = document.querySelectorAll(".slide").length - 1;

nextBtn.addEventListener("click", () => {
  if (num === max) {
    num = 0;
    sliderContainer.style.left = "-700" * num + "px";
  }
  else {
    num++;
    sliderContainer.style.left = "-700" * num + "px";
  }
});
prevBtn.addEventListener("click", () => {
  num--;
  if (num >= 0) {
    sliderContainer.style.left = "-700" * num + "px";
  } else {
    num = max;
    sliderContainer.style.left = "-700" * num + "px";
  }

});
