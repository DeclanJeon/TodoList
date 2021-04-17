const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber+1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

// 0부터 (IMG_NUMBER-1)만큼
function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();