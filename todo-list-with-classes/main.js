import {TodoService} from './modules/todoService.js';
import {DOM} from './modules/dom.js';

document.addEventListener('DOMContentLoaded', ()=>{
    const todoService = new TodoService();
    const dom = new DOM();

    // Render saved todos
    const todos = todoService.getTodos();
    dom.renderTodos(todos);

    // Handle add todo event
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const input = document.querySelector('#app input[type="text"]');
        const todoText = input.value.trim(); 
        if(todoText !== ''){
            const newTodo = todoService.addTodo(todoText); // {id: 1, text: todoText, completed: false}
            dom.addTodo(newTodo);

            input.value = '';
        }
    });


    // Handle delete todo event 
    const todoList = document.getElementById('todo-list');
    todoList.addEventListener('click', (e)=>{
        if(e.target.classList.contains('delete-btn')){
            const id = e.target.dataset.id;
            todoService.removeTodo(id);
            dom.removeTodo(id);
        }
    });


});
