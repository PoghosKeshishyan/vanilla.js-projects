// Selectors
const board = document.querySelector('#board #squareContainer');
const controlColors = document.querySelectorAll('#controls div');
const colors = ['#dcff8f', '#ff0083', '#7c83ff', '#40ffec', '#ffd104'];
const squareNumbers = 750;
let currentColor = 'random';


// Event Listeners
controlColors.forEach(color => {
    color.addEventListener('click', setColorControls);
})

for(let i = 0; i < squareNumbers; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}


// Functions
function setColorControls(event) {
    currentColor = event.target.className;
    document.querySelector('#controls .active').classList.remove('active');
    event.target.classList.add('active');
}

function setColor(element){
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    if (currentColor === 'random') {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    } else if (currentColor === 'green') {
        return '#dcff8f';
    } else if (currentColor === 'yellow') {
        return '#ffd104';
    } else if (currentColor === 'pink') {
        return '#ff0083';
    } else if (currentColor === 'blue') {
        return '#7c83ff';        
    } else if (currentColor === 'cyan') {
        return '#40ffec';
    }
}
