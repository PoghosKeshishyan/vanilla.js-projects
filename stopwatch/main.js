document.addEventListener('DOMContentLoaded', () => {
    const text = document.querySelector('.stopwatch');
    const start = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    const lap = document.querySelector('.lap');
    const reset = document.querySelector('.reset');
    const ul = document.querySelector('.laps');

    let seconds = 0, minutes = 0, hours = 0, interval;

    const addZero = num => (num < 10 ? '0' + num : num);

    const updateDisplay = () => {
        text.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
    }

    const stopwatch = () => {
        seconds++;
        if (seconds === 60) { seconds = 0; minutes++; }
        if (minutes === 60) { minutes = 0; hours++; }
        updateDisplay();
    }

    start.addEventListener('click', () => {
        start.disabled = true;
        stopBtn.disabled = false;
        stopBtn.style.display = lap.style.display = reset.style.display = 'inline';
        interval = setInterval(stopwatch, 1000);
    });

    stopBtn.addEventListener('click', () => {
        clearInterval(interval);
        start.disabled = false;
        stopBtn.disabled = true;
    });

    reset.addEventListener('click', () => {
        clearInterval(interval);
        [seconds, minutes, hours] = [0, 0, 0];
        ul.innerHTML = '';
        updateDisplay();
        start.disabled = false;
        stopBtn.style.display = lap.style.display = reset.style.display = 'none';
    });

    lap.addEventListener('click', () => {
        const li = document.createElement('li');
        li.innerText = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
        ul.appendChild(li);
    });
});