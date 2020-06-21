//DOM variables
const time = document.querySelector('#time');
const button = document.querySelector('#btn');

let sec = 0;
let milliSec = 0;
let countTime;

time.innerText = "00:00";
button.innerText = 'START!';
button.classList.add('not_selectable');

const timer = function() {
    if (milliSec % 100 === 0)
        if (milliSec !== 0)
            sec++;
    time.innerText = `${sec % 60}`.padStart(2,"0") + ':' + `${milliSec % 100}`.padStart(2, "0");
    milliSec++;
    
}

const startWatch = () => {
    button.innerText = 'STOP!';
    countTime = setInterval(timer, 10);
    button.removeEventListener('click', startWatch);
    button.addEventListener('click', stopWatch);
}

const stopWatch = () => {
    button.removeEventListener('click', stopWatch);
    clearInterval(countTime);
    userClick();
}

const userClick = function() {
    button.addEventListener('click', startWatch);
}

userClick();

console.log();