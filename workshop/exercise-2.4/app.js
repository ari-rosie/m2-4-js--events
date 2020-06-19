//DOM variables
let main = document.querySelector('#main');
let body = document.querySelector('body');

let counter = 3; // timer start time
let clickNum = 0; //counts user's click
const buttonNum = 2; //amount of buttons
let flagWin = false; //will tell the timer function user won

//creating START button
let startBtn = document.createElement('DIV');
startBtn.setAttribute('class', 'start');
startBtn.innerText = 'Start!';
startBtn.classList.add('not_selectable');

body.insertBefore(startBtn, main);

//MAIN invisible
main.style.display = 'none';


//creating a header for timer
let header = document.createElement('HEADER');
let timeText = document.createElement('P');

body.insertBefore(header, startBtn);
timeText.innerHTML = "Timer: <span id='timer'></span>";
header.appendChild(timeText);
header.style.display = 'none';
header.classList.add('not_selectable');

//generating 20 buttons
for (let i = 0; i < buttonNum; i++) {
    let newBtn = document.createElement('DIV');
    let span = document.createElement('SPAN');

    newBtn.setAttribute('id', `btn${i + 1}`);
    newBtn.setAttribute('class', 'btn');
    span.innerText = `${i + 1}`;
    span.classList.add('not_selectable');

    //random position
    let topNum = Math.random() * 90;
    let leftNum = Math.random() * 90;
    newBtn.style.position = 'absolute';
    newBtn.style.top = `${topNum}%`;
    newBtn.style.left = `${leftNum}%`;
    
    main.appendChild(newBtn);
    newBtn.appendChild(span);
}

//click BUTTON event
const gameOn = function() {
    this.classList.toggle('green');
    clickNum++;
    if (clickNum >= buttonNum && checkBkg()){
        message.innerHTML = 'You won! 🦄';
        flagWin = true;
        endGame();
        timeText.style.display = 'none';
    }
}

let buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', gameOn);
});

//click START event
startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    main.style.display = 'block';
    header.style.display = 'flex';
    runTimer(); 
});

//function that checks if all buttons were clicked
const checkBkg = function() {
    let btnArray = [];//object into array to use the every() method
    buttons.forEach(btn => {
        btnArray.push(btn.className);
    });
    return btnArray.every(flagGreen);
}
const flagGreen = btn => {
    return btn == 'btn green';
}

//TIMER function
const runTimer = function () {
    let timer = document.querySelector('#timer');
    timer.innerText = `${counter}`;

    const countDown = setInterval(() => {
        counter--;
        timer.innerText = `${counter}`;
        if (counter === 0){
            clearInterval(countDown);
            if(!flagWin) {
                message.innerHTML = 'You lost.. 🤦‍♀️';
                endGame();
            }
        }
        }, 1000);
}

//creating END SCREEN
let endDiv = document.createElement('DIV');
let message = document.createElement('SPAN');
body.insertBefore(endDiv, body.lastChild);
endDiv.classList.add('end_div');
endDiv.appendChild(message);
message.classList.add('not_selectable');
endDiv.style.display = 'none';


//ENDGAME function
const endGame = () => {
    buttons.forEach(btn => {
        btn.removeEventListener('click', gameOn);
    });            
    endDiv.style.display = 'flex'; 
    console.log(checkBkg());

}



