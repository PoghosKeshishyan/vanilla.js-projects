import {Todo} from './todo.js';


export class TodoService{

    constructor(){
        this.todos = this.loadTodos();
    }

    loadTodos(){
        const storedTodos = localStorage.getItem('todos'); // '[{}, {}, {}]'
        if(storedTodos)
            return JSON.parse(storedTodos);
        return [];
    }

    saveTodos(){
        localStorage.setItem('todos', JSON.stringify(this.todos) );
    }

    addTodo(text){
        const id = Date.now().toString();// '1231239183791837198237'
        const todo = new Todo(id, text); // {id: , text: , compeleted: false}
        this.todos.push(todo);
        this.saveTodos();
        return todo;
    }

    removeTodo(id){
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.saveTodos();
    }

    getTodos(){
        return this.todos;
    }

}