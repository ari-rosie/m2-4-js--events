// Exercise 1.1
// ------------


let body = document.querySelector('body');
let p = document.querySelector('p');
let flag = false;

const userClick = function() {
    flag = true;
}

const showMessage = function() {
    body.removeEventListener('click', userClick);
    if(flag)
        p.innerHTML = 'You win! &#129321;';
    else
        p.innerHTML = 'You lose! &#128541;';
}


body.addEventListener('click', userClick);
setTimeout(showMessage, 1000);

