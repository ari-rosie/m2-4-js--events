// Exercise 1.1
// ------------
console.log('exercise 1.1');

let body = document.querySelector('body');
let p = document.querySelector('#result');
const text = function(){
    p.innerText = 'It works!';
}
body.addEventListener('click', text);

