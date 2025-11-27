const boxes = document.querySelectorAll('.box');
const copied_text = document.querySelector('.copied');

boxes.forEach(elem => {
    elem.addEventListener('click', () => {
        const code = elem.querySelector('code');
        const text = code.innerText;
        navigator.clipboard.writeText(text);
        copied_text.style.display = 'initial';
        setTimeout(() => {copied_text.style.display = 'none'}, 2000);
    })
})