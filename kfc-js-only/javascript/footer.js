import { footerData } from "../database/index.js";

export function renderFooterSection() {
    const footer = document.createElement("footer");

    const logo = document.createElement("img");
    logo.classList.add('logo');
    logo.src = footerData.imgUrl;
    footer.appendChild(logo);

    const contact = document.createElement("div");
    contact.classList.add('contact'); 
    contact.innerHTML = `
        <p><strong>Phone:</strong> ${footerData.phone}</p>
        <p><strong>Email:</strong> ${footerData.email}</p>
        <p><strong>Address:</strong> ${footerData.address}</p>
    `;
    footer.appendChild(contact);

    const socialSection = document.createElement("div");
    socialSection.classList.add('social-links');

    footerData.socialLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.innerHTML = `<i class="${link.iconClass}"></i>`;
        socialSection.appendChild(a);
    });

    footer.appendChild(socialSection);

    document.body.appendChild(footer); 
};
