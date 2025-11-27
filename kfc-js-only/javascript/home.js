import { homeSectionData } from "../database/index.js";

export function renderHomeSection() {
    const section = document.createElement('section');
    section.classList.add('home');

    const div = document.createElement('div');
    div.classList.add('image');
    div.style.backgroundImage = `url(${homeSectionData.imgUrl})`;
    section.appendChild(div);

    document.body.appendChild(section);
};