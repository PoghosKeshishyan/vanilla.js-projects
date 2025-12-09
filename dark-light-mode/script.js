const btn = document.getElementById('btn');

btn.addEventListener('click', handleBtn);

function handleBtn() {
    document.body.classList.toggle('active');

    if (btn.classList.contains('fa-moon')) {
        btn.className = 'fa-solid fa-sun';
    } else {
        btn.className = 'fa-solid fa-moon';
    }
}