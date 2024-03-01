const slider = document.querySelector(".slider");
const sliderImg = slider.querySelector("img");

let i = 1;

function imageSlider() {
  sliderImg.src = `img/hero/${i}.jpg`;
  i++;
  if (i === 6) {
    i = 1;
  }
}

setInterval(imageSlider, 5000);
