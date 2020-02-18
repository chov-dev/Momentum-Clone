const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const NAME_LS = "current_user",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(NAME_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  input.value = "";
  saveName(currentValue);
  paintGreeting(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello, ${text}!`;
}

function loadName() {
  const CURRENT_USER = localStorage.getItem(NAME_LS);
  if (CURRENT_USER === null) {
    askForName();
  } else {
    paintGreeting(CURRENT_USER);
  }
}

function init() {
  loadName();
}

init();
