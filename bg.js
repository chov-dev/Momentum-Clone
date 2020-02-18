const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleLoadend() {
  body.appendChild(image);
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  image.addEventListener("loadend", handleLoadend);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
