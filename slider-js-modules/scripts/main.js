import { data } from './data.js';
import { initSlider, nextSlide, prevSlide } from './utils.js';


/** 
 ========================================
 * @Selectors
 ========================================
*/

const slideContainer = document.querySelector('.slider .slide');
const controlCircles = document.querySelector('.slider .control-circles');
const prevBtn = document.getElementById('left-btn');
const nextBtn = document.getElementById('right-btn');


/** 
 ========================================
 * @Event_Listeners
 ========================================
*/

document.addEventListener('DOMContentLoaded', () => {
    initSlider(data, slideContainer, controlCircles);
});

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
