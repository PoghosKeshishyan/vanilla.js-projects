/**
==========================================
@SELECTORS
==========================================
*/
const gameOver = document.getElementById('game-over');
const clouds = document.getElementById('clouds');
const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let interval;


/**
==========================================
@EVENT_LISTENERS
==========================================
*/

document.addEventListener('keydown', startGame);


/**
==========================================
@FUNCTIONS
==========================================
*/

interval = setInterval(function () {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // ----------------- game over -----------------
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        const audio = document.createElement('audio');
        audio.src = './sounds/game-over.mp3';
        audio.autoplay = true;

        dino.style.backgroundImage = 'url(./images/dino.png)';
        dino.style.backgroundSize = '50px 50px';
        gameOver.classList.add('active');
        clouds.classList.remove('active');
        cactus.classList.remove('active');
    }
}, 10)

function startGame(event) {
    if (event.code == 'ArrowUp' || event.code == 'Space') {
        if (cactus.className != 'active') {
            dino.style.backgroundImage = 'url(./images/dino-run.gif)';
            dino.style.backgroundSize = '60px 60px';

            gameOver.className = '';
            clouds.className = 'active';
            cactus.className = 'active';
        }

        jump();
    }
}

function jump() {
    const audio = document.createElement('audio');
    audio.src = './sounds/jump.mp3';
    audio.autoplay = true;

    if (dino.className != 'active') {
        dino.className = 'active';
    }

    setTimeout(function () {
        dino.className = '';
    }, 300)
}
