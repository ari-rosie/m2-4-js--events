//DOM variables
let main = document.querySelector('#main');

//generating 20 BUTTONS
for (let i = 0; i < 20; i++) {
    let newBtn = document.createElement('DIV');
    let newSpan = document.createElement('SPAN');    
    
    newSpan.innerText = `${i + 1}`;
    newBtn.setAttribute('id', `btn-${i + 1}`);
    newBtn.setAttribute('class', 'btn');
    main.appendChild(newBtn);
    newBtn.appendChild(newSpan);
}

//button ONCLICK
let btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = 'green';
    });
});