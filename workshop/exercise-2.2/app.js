//DOM variables
let main = document.querySelector('#main');

//generating BUTTONS
for (let i = 0; i < 20; i++) {
    let newBtn = document.createElement('DIV');
    let newSpan = document.createElement('SPAN');

    newBtn.setAttribute('class', 'btn');
    newBtn.setAttribute('id', `btn${i + 1}`);
    newSpan.innerText = `${i + 1}`;

    main.appendChild(newBtn);
    newBtn.appendChild(newSpan);
}

    
//changes bkg color on click
let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('green');
    });
});