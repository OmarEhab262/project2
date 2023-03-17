var link = document.querySelector(".menu-slide");
var icon = document.querySelector(".icon");
icon.addEventListener("click", () => {
  link.classList.toggle("show");
});
const imageElement = document.getElementById("myImage");
const imageSources = [
  "images/71FuI8YvCNL._AC_SX679_.png",
  "images/81sxRBhe2sS._AC_SX466_-removebg-preview.png",
  "images/71+fj-NuMwL._AC_SX466_-removebg-preview.png",
];
let currentIndex = 0;
let timerId;

function changeImage() {
  if (currentIndex === imageSources.length) {
    currentIndex = 0;
  }
  imageElement.src = imageSources[currentIndex];
  currentIndex++;
}

function startTimer() {
  timerId = setInterval(changeImage, 2500);
}

function stopTimer() {
  clearInterval(timerId);
  imageElement.src = imageSources[0];
}

startTimer();

// call stopTimer function after 10 seconds
