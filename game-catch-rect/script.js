// Selectors
let $startBtn = document.querySelector('#start');
let $game = document.querySelector('#game');
let $time = document.querySelector('#time');
let $gameTimeInp = document.querySelector('#game-time');
let $result = document.querySelector('#result');
let $reset = document.querySelector('#reset');
let colors = ['red', 'blue', 'green', 'pink', 'purple', 'silver', 'tomato'];
let interval;
let score = 0;

// Events
$startBtn.addEventListener('click', startGame);
$game.addEventListener('click', handleClick);
$gameTimeInp.addEventListener('input', setGameTime);
$reset.addEventListener('click', reset);

// Functions
function startGame() {
    score = 0;
    $result.textContent = score;
    $game.style.background = 'white';
    $gameTimeInp.setAttribute('disabled', true);
    hide($startBtn);
    show($reset);

    interval = setInterval(function(){
        let time = parseFloat($time.textContent);

        if(time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100)

    renderBox();
}

function renderBox() {
    $game.innerHTML = '';
    let div = document.createElement('div');
    let divSize = random(30, 100);
    let getSize = $game.getBoundingClientRect();
    let maxTop = getSize.height - divSize;
    let maxLeft = getSize.width - divSize;
    let randomColorIndex = random(0, colors.length-1);

    div.style.position = 'absolute';
    div.style.width = div.style.height = divSize + 'px';
    div.style.top = random(0, maxTop) + 'px';
    div.style.left = random(0, maxLeft) + 'px';
    div.style.border = '2px solid';
    div.style.background = colors[randomColorIndex];
    div.style.cursor = 'pointer';
    div.setAttribute('data-box', true)
    $game.insertAdjacentElement('afterbegin', div); 
}

function endGame() {
    show($startBtn);
    hide($reset); 
    $game.innerHTML = '';
    $game.style.background = '#ccc';
    setGameTime();
    $gameTimeInp.removeAttribute('disabled');
}

function handleClick(e) {
    if(e.target.dataset.box){
        score++;
        $result.textContent = score;
        renderBox();
    } else {
        reset();
        const div = document.createElement('div');
        div.textContent = 'Game Over';
        div.style.backgroundColor = 'red';
        div.style.color = 'white';
        div.style.height = 100 + '%';
        div.style.fontSize = '2rem';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        $game.appendChild(div);
    }
}

function setGameTime() {
    let time = +$gameTimeInp.value;
    $time.textContent = time.toFixed(1);
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1) + min);
}

function show($el) {
    $el.classList.remove('hide');
}

function hide($el) {
    $el.classList.add('hide');
}

function reset() {
    clearInterval(interval); 
    endGame();
    setGameTime();
    $result.textContent = 0;
}