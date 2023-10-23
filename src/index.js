import './style.css';
export function newNote() {
    console.log('hello!');
}
import { component } from './design';
component();
function logic(){
}

export function createTodo(title, description, date, priority){
    return {
        title: title,
        description: description,
        date: date,
        priority: priority,
    }
}