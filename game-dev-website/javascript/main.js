const nav = document.querySelector('nav');
const mobilNav = document.querySelector('nav.mobile-nav');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const mobileMenuContainer = document.querySelector('.mobile-menu-container');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 60) {
        nav.classList.add('scrolled');
        mobilNav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled')
        mobilNav.classList.remove('scrolled');
    }
})

menuIcon.addEventListener('click', function() {
    mobileMenuContainer.classList.add('active');
})

closeIcon.addEventListener('click', function() {
    mobileMenuContainer.classList.remove('active');
})