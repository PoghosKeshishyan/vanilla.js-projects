// Selectors
const todoList = document.querySelector('.todoList');
const inputText = document.querySelector('.inputText');
const addTodo = document.querySelector('.addTodo');
const selectTodo = document.querySelector('.selectTodo');
const modalWindow = document.querySelector('.modal');
const okBtnModal = document.querySelector('.ok');
const cancelBtnModal = document.querySelector('.cancel');

let data = [];
let currentId;

// Event listeners
document.addEventListener('DOMContentLoaded', onLoadHtml);
todoList.addEventListener('click', handlerTodoList);
addTodo.addEventListener('click', addTodoFunc);
okBtnModal.addEventListener('click', deleteTodoFunc);
cancelBtnModal.addEventListener('click', function(){modalWindow.classList.remove('active')});
selectTodo.addEventListener('change', selectTodoFunc);

// Functions
function onLoadHtml() {
    const localData = JSON.parse(localStorage.getItem('todos'));

    if (localData) {
        data = localData;
        if (data.length) todoList.style.display = 'block';
    }

    renderTodoList(data);
}

function renderTodoList(data) {
    todoList.innerHTML = '';
    if (data.length) todoList.style.display = 'block';

    data.forEach(function (elem) {
        const div = document.createElement('div');
        div.className = elem.done ? 'todo active' : 'todo';
        div.setAttribute('id', elem.id);

        const text = document.createElement('p');
        text.innerText = elem.text;
        div.appendChild(text);

        const icons = document.createElement('div');
        icons.className = 'icons';
        icons.innerHTML = `
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-trash"></i>
        `;
        div.appendChild(icons);

        todoList.appendChild(div);
    });
}

function handlerTodoList(event) {
    const parent = event.target.parentElement.parentElement;

    if (event.target.className === 'fa-solid fa-check') {  
        const currentId = parseInt(parent.getAttribute('id'));

        data.forEach(function (elem) {
            if (currentId === elem.id) {
                elem.done = !elem.done;
            }
        })

        renderTodoList(data);
    }

    if (event.target.className === 'fa-solid fa-trash') {
        modalWindow.classList.add('active');
        currentId = parseInt(parent.getAttribute('id'));
    }

    saveToLocalStorage(data);
}

function deleteTodoFunc() {
    data = data.filter(function(elem) {
        return elem.id !== currentId;
    })

    renderTodoList(data);
    saveToLocalStorage(data);
    modalWindow.classList.remove('active');
    if (data.length === 0) todoList.style.display = 'none';
}

function addTodoFunc(event) {
    event.preventDefault();

    if (!inputText.value.trim()) {
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: inputText.value,
        done: false,
    };

    data.push(newTodo);
    renderTodoList(data);
    saveToLocalStorage(data);
    inputText.value = '';
}

function selectTodoFunc(event) {
    let newTodos;

    if (event.target.value == 'all') {
        renderTodoList(data);
    }

    if (event.target.value == 'completed') {
        newTodos = data.filter(function (elem) {
            return elem.done;
        });

        renderTodoList(newTodos);
    }

    if (event.target.value == 'uncompleted') {
        newTodos = data.filter(function (elem) {
            return !elem.done;
        })

        renderTodoList(newTodos);
    }
}

function saveToLocalStorage(data) {
    localStorage.setItem('todos', JSON.stringify(data));
}