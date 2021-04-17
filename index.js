






/*

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  /*
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if(hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  } 
  //--comment ended
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
*/


/*
// #title --> id
// .title --> class
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(255, 255, 255)";
const OTHER_COLOR = "#9b59b6";

function handleClick() {
  const currentColor = title.style.color;
  if(currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  window.addEventListener("click", handleClick);window.addEventListener("offline", handleOffline);
  window.addEventListener("online", handleOnline);
}

function handleOffline() {
  console.log("Bye bye");
}

function handleOnline() {
  console.log("Welcome Back!");
}

init();

*/