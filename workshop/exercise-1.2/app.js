// Exercise 1.2
// ------------
//VARIABLES WITH DOM OBJECTS
let body = document.querySelector('body');
let time = document.querySelector('#time');
let result = document.querySelector('#result');

//BOOLEAN VAR
let flag = false;

//VARIABLES
let timer = Math.floor(Math.random() * 5) * 1000;

//FUNCTION THAT SHOWS MESSAGE
const showMessage = function() {
    if(flag)
        result.innerHTML = 'You win! 🤩';
    else
        result.innerHTML = 'You lose! 😱';
}

//FUNCTION FOR EVENT
const userClick = function() {
    flag = true;
}

//FUNCTION FOR TIMER
const clock = function() {
    let startTime = timer / 1000;
    time.innerText = startTime;
    const countDown = setInterval(function() {
        if(startTime !== 0)
            startTime--;
        else
            clearInterval(countDown);
        time.innerText = startTime;
    }, 1000);

}

clock();
body.addEventListener('click', userClick);
setTimeout(function() {
    body.removeEventListener('click', userClick);
    showMessage();
}, timer);