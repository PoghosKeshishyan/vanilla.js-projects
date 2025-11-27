const menu_bar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menu_bar.addEventListener('click', () => {
    navbar.classList.toggle('active');
});