import { data } from './data.js';
let currentSlide = 0;
let intervalTime = 6000;
let interval;

export function initSlider(data, slideContainer, controlCircles) {
    data.forEach((elem, index) => {
        const slideImg = document.createElement('img');
        slideImg.src = elem;
        index === 0 && slideImg.classList.add('active');
        slideContainer.appendChild(slideImg);

        const span = document.createElement('span');
        index === 0 && span.classList.add('active');
        span.addEventListener('click', () => goToSlide(index, currentSlide));
        controlCircles.appendChild(span);
    });

    interval = setInterval(nextSlide, intervalTime);
}

export function nextSlide() {
    currentSlide++;

    if (currentSlide >= data.length) {
        currentSlide = 0;
    }

    goToSlide(currentSlide);
}

export function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = data.length-1;
    }

    goToSlide(currentSlide);
}

function goToSlide(index) {
    clearInterval(interval);
    const slides = document.querySelectorAll('.slider .slide img');
    slides.forEach((elem, idx) => elem.classList.toggle('active', index === idx));
    currentSlide = index;
    updateControlCircles(index);
    interval = setInterval(nextSlide, intervalTime);
}

function updateControlCircles(index) {
    const circles = document.querySelectorAll('.control-circles span');
    circles.forEach((elem, idx) => elem.classList.toggle('active', index === idx));
}
