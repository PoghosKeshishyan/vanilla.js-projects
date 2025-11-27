const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
let countDate = new Date('jan 1, 2026 00:00:00').getTime();

document.addEventListener('DOMContentLoaded', () => {
    setInterval(createSnow, 100);
    setInterval(countDown, 1000);
});

function createSnow() {
    let container = document.querySelector('.container');
    let span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span)

    setTimeout(() => {
        span.remove();
    }, 5000)
}

function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % day) / hour);
    let m = Math.floor((gap % hour) / minute);
    let s = Math.floor((gap % minute) / second);

    daysElement.innerHTML = addZero(d);
    hoursElement.innerHTML = addZero(h);
    minutesElement.innerHTML = addZero(m);
    secondsElement.innerHTML = addZero(s);
}

function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    }
    return num;
}