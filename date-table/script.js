// selectors
const btn = document.querySelector('button');
const table = document.querySelector('table');



// event listeners
btn.addEventListener('click', function () {
    const date = new Date();
    const tr = document.createElement('tr');

    const tdDay = document.createElement('td');
    tdDay.innerText = addZero(date.getDate());
    tr.appendChild(tdDay);

    const tdMonth = document.createElement('td');
    tdMonth.innerText = addZero(date.getMonth() + 1);
    tr.appendChild(tdMonth);

    const tdYear = document.createElement('td');
    tdYear.innerText = date.getFullYear();
    tr.appendChild(tdYear);

    const tdHour = document.createElement('td');
    tdHour.innerText = addZero(date.getHours());
    tr.appendChild(tdHour);

    const tdMin = document.createElement('td');
    tdMin.innerText = addZero(date.getMinutes());
    tr.appendChild(tdMin);

    const tdSec = document.createElement('td');
    tdSec.innerText = addZero(date.getSeconds());
    tr.appendChild(tdSec);

    const tdDelete = document.createElement('td');
    tdDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    tr.appendChild(tdDelete);

    table.appendChild(tr);
});

table.addEventListener('click', function(event) {

    if (event.target.className === 'fa-solid fa-trash') {
        event.target.parentElement.parentElement.remove();
    }
    
})

// functions
function addZero(num) {
    if (num <= 9) {
        return `0${num}`;
    }

    return num;
}