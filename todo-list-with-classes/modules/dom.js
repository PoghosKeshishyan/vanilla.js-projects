
export class DOM{
    constructor(){
        // this = {}
        this.todoList = document.getElementById('todo-list');
    }

    renderTodos(todos){
        this.todoList.innerHTML = '';
        todos.forEach(todo => {
            this.addTodo(todo);
        });
    }

    addTodo(todo){
        const li = document.createElement('li');
        li.dataset.id = todo.id;
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" data-id="${ todo.id}">Delete</button>
        `;
        this.todoList.appendChild(li);
    }

    removeTodo(id){
        const todoItem = document.querySelector(`li[data-id="${id}"]`);
        this.todoList.removeChild(todoItem);
    }


}



