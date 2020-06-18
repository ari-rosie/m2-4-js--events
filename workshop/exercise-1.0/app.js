// Exercise 1.0
// ------------
console.log('exercise-1');

let body = document.querySelector('body');
let main = document.querySelector('#main');
const text = function(){
    main.innerText = 'It works!';
}
body.addEventListener('click', text);
