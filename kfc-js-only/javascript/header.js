import { headerData } from "../database/index.js";

export function renderHeaderSection() {
    const header = document.createElement("header");
    header.setAttribute("id", "header");

    const menuBar = document.createElement('i');
    menuBar.setAttribute("id", "menubar")
    menuBar.className = 'fa-solid fa-bars';
    header.append(menuBar);

    const logo = document.createElement("img");
    logo.src = headerData.imgUrl;
    logo.setAttribute("id", "logo");
    header.appendChild(logo);

    const nav = document.createElement("nav");
    nav.setAttribute("id", "navbar");

    headerData.navbar.forEach(elem => {
        const a = document.createElement("a");
        a.textContent = elem.url;
        a.href = elem.href;
        nav.appendChild(a);
    })

    header.appendChild(nav);

    const icons = document.createElement('div');
    icons.setAttribute("id", "icons");
    icons.innerHTML = `
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-user"></i>
    `;
    header.appendChild(icons);

    document.body.appendChild(header);

    // Envent Listneres

    menuBar.addEventListener('click', () => {
        nav.classList.toggle('active'); 
    });

    nav.addEventListener('click', () => {
        nav.classList.remove('active');
    });
};