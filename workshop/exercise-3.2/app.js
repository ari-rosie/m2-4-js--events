//DOM variables
const time = document.querySelector('#time');
const button = document.querySelector('#btn');


let sec = 0;
let milliSec = 0;
let countTime;

//sets timer when the page loads
time.innerText = "00:00";
button.innerText = 'START!';
button.classList.add('not_selectable');

//function for seconds and milliseconds timer
const timer = function() {
    if (milliSec % 100 === 0)
        if (milliSec !== 0)
            sec++;
    time.innerText = `${sec % 60}`.padStart(2,"0") + ':' + `${milliSec % 100}`.padStart(2, "0");
    milliSec++;
    
}

//function when user starts timer
const startWatch = () => {
    button.innerText = 'STOP!';
    countTime = setInterval(timer, 10);
    button.removeEventListener('click', startWatch);
    button.addEventListener('click', stopWatch);
}


//function when user stops timer
const stopWatch = () => {
    button.innerText = 'Keep going!';
    button.removeEventListener('click', stopWatch);
    clearInterval(countTime);
    userClick();
}

// function that calls for the starting function
const userClick = function() {
    button.addEventListener('click', startWatch);
}

//first click of user
userClick();

