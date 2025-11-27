import { productsSectionData } from "../database/index.js";

export function renderProductsSection() {
    const section = document.createElement('section');
    section.classList.add('products');
    section.setAttribute('id', 'products');

    const h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerHTML = productsSectionData.heading.split('').map(char => `<span>${char}</span>`).join('');
    section.appendChild(h2);

    const div = document.createElement('div');
    div.classList.add('products-container');
    section.appendChild(div);

    productsSectionData.products.forEach(elem => {
        const product = document.createElement('div');
        product.classList.add('product');

        const image = document.createElement('img');
        image.src = elem.imgUrl;
        product.appendChild(image);

        const title = document.createElement('h3');
        title.classList.add('title');
        title.textContent = elem.title;
        product.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('description');
        description.textContent = elem.description;
        product.appendChild(description);

        const btn = document.createElement('button');
        btn.classList.add('add-card');
        btn.innerHTML = elem.btn_text;
        product.appendChild(btn);

        div.appendChild(product);
    });

    document.body.appendChild(section);
};