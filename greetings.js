const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

  // 브라우저 로컬 스토리지
  const USER_LS = "currentUser";
    // html form의 class 이름
  const SHOWING_CN = "showing";

  function saveName(text) {
    localStorage.setItem(USER_LS, text);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
  }

  function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
  }

  function paintGreeting(text) {
    // html
    // 유저정보를 출력할거라면 폼을 숨김
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    saveName(text);
  }

  function loadName() {
    // 브라우저 로컬 스토리지
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
      // 유저정보가 로컬스토리지에 저장되어 있지 않을 경우
      // input 폼을 노출시킴
      askForName();
    } else {
      // 유저정보가 로컬스토리지에 저장되어 있을 경우
      // 유저정보 HTML 출력
      paintGreeting(currentUser); 
    }
  }

  function init() {
    loadName();
  }

  init();