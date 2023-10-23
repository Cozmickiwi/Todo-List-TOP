import { newNote } from './index.js';
import { createTodo } from './index.js';
import './style.css';
export function component() {
    let ticker = 1;
    const mainContainer = document.querySelector('.mainContainer');
    const todoItemContainer = document.createElement('div');
    todoItemContainer.className = 'todoItemContainer';
    mainContainer.appendChild(todoItemContainer);
    const form = document.querySelector('.newTodo');
    form.style.display = "none";
    function todoForm() {
        let titleInput = document.getElementById('todoTitle');
        let descriptionInput = document.getElementById('todoDescription');
        let dateInput = document.getElementById('todoDate');
        const todoSubmit = document.querySelector('.submitButton');
        todoSubmit.addEventListener('click', () => {
            console.log(titleInput.value);
            form.style.display = 'none';
            document.querySelector('.button').textContent = 'New';
            todoEntry();
            function todoEntry(){
                let todoListing = createTodo(titleInput.value, descriptionInput.value, dateInput.value, 'abcda');
                let todoEntryContainer = document.createElement('div');
                let todoEntryPreview = document.createElement('div');
                let todoEntryTitle = document.createElement('p');
                let todoEntryDescription = document.createElement('p');
                let todoEntryDate = document.createElement('p');
                let todoEntryTitleMain = document.createElement('p');
                let todoEntryDescriptionMain = document.createElement('p');
                let todoEntryDateMain = document.createElement('p');
                let deleteButton = document.createElement('button');
                deleteButton.className = 'todoItemDelete';
                deleteButton.textContent = 'delete';
                todoEntryPreview.className = 'todoPreview';
                todoEntryTitle.textContent = todoListing.title;
                todoEntryTitle.className = 'todoEntryTitle';
                todoEntryDescription.textContent = todoListing.description;
                todoEntryDate.textContent = todoListing.date;
                todoEntryTitleMain.textContent = todoListing.title;
                todoEntryTitleMain.className = 'todoEntryTitle';
                todoEntryDescriptionMain.textContent = todoListing.description;
                todoEntryDate.textContent = todoListing.date;
                todoEntryPreview.appendChild(todoEntryTitle);
                todoEntryPreview.appendChild(todoEntryDate);
                todoEntryPreview.appendChild(deleteButton);
                todoItemContainer.appendChild(todoEntryPreview);
                
                todoEntryContainer.className = 'todoMain';
                todoEntryContainer.appendChild(todoEntryTitleMain);
                todoEntryContainer.appendChild(todoEntryDescriptionMain);
                todoEntryContainer.appendChild(todoEntryDateMain);
                todoItemContainer.appendChild(todoEntryContainer)
                todoEntryContainer.style.display = 'none';
                todoEntryPreview.addEventListener('click', () => {
                    todoEntryContainer.style.display = 'flex';
                    todoEntryContainer.style.backdropFilter = 'blur(10px)';
                })
                todoEntryContainer.addEventListener('click', () => {
                    todoEntryContainer.style.display = 'none';
                    todoEntryContainer.style.backdropFilter = 'none';
                })
                deleteButton.addEventListener('click', () => {
                    todoEntryPreview.style.display = 'none';
                })
                function formReset(){
                    titleInput.value = null;
                    descriptionInput.value = null;
                    dateInput.value = null;
                }
                formReset();
                return(todoEntryPreview);
            }
        })
    }
    todoForm();
    

    function button(){
        const newNoteButton = document.createElement('button');
        newNoteButton.className = 'button';
        newNoteButton.textContent = 'New';
        newNoteButton.addEventListener('click', () => {
            if(form.style.display == 'none'){
                form.style.display = 'flex';
                newNoteButton.textContent = 'Close';
            }
            else{
                form.style.display = 'none';
                newNoteButton.textContent = 'New';
            }
            console.log(form.style.display);
            newNote();
        })
        return(newNoteButton);
    }
    
    function docAppend(){
        mainContainer.appendChild(button());
        
    }
    docAppend();

    return(mainContainer);
}
