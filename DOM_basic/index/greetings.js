const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const SHOWING_CN = "showing";
const USER_LS = "currentUser";
const HIDE_CN = "form";


function saveName (text) {
    localStorage.setItem(USER_LS, text);
}



function handleSubmit(event) {
    event.preventDefault()
    const currentValue = input.value;
    renderGreeting(currentValue);
    saveName(currentValue);
}


function askForName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}


function renderGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}



function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    } else {
        renderGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();