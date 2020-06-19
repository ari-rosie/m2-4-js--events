//DOM variables
let main = document.querySelector('#main');

//generating 20 buttons
for (let i = 0; i < 20; i++) {
    let newBtn = document.createElement('DIV');
    let span = document.createElement('SPAN');

    newBtn.setAttribute('id', `btn${i + 1}`);
    newBtn.setAttribute('class', 'btn');
    span.innerText = `${i + 1}`;

    //random position
    let topNum = Math.random() * 90;
    let leftNum = Math.random() * 90;
    newBtn.style.position = 'absolute';
    newBtn.style.top = `${topNum}%`;
    newBtn.style.left = `${leftNum}%`;
    
    main.appendChild(newBtn);
    newBtn.appendChild(span);
}


//click event
let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('green');
    })
})