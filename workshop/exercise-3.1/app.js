const main = document.querySelector('#main');
const liveTime = setInterval(() => {
    let curDate = new Date();
    main.innerHTML = curDate;
}, 1000);