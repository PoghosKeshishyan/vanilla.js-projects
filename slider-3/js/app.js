const images = document.querySelectorAll('.slider img');
const controls = document.querySelectorAll('.slider .controls .img-control');

controls.forEach((elem, index) => {
    elem.addEventListener('click', function() {
        images.forEach(elem => elem.classList.remove('show'));
        controls.forEach(elem => elem.classList.remove('active'));
        images[index].classList.add('show');
        elem.classList.add('active');
    });
});