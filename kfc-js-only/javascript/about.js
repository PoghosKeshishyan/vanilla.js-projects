import { aboutSectionData } from "../database/index.js";

export function renderAboutSection() {
    const section = document.createElement('section');
    section.classList.add('about');
    section.setAttribute('id', 'about');

    const h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerHTML = aboutSectionData.heading.split('').map(char => `<span>${char}</span>`).join('');
    section.appendChild(h2);

    const div = document.createElement('div');
    div.classList.add('row');

    const p = document.createElement('p');
    p.classList.add('about-text');
    p.textContent = aboutSectionData.text;
    div.appendChild(p);

    const img = document.createElement('img');
    img.src = aboutSectionData.imgUrl;
    div.appendChild(img);

    section.appendChild(div);
    document.body.appendChild(section);
};