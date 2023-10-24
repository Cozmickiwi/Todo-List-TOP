import { format, compareAsc } from 'date-fns';
import { newNote } from './index.js';
import { createTodo } from './index.js';
import './style.css';
const root = document.documentElement;
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
                todoEntryDateMain.textContent = todoListing.date;
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
                todoEntryContainer.style.gridRow = ticker;
                todoEntryContainer.style.gridColumn = 1;
                todoEntryPreview.style.gridColumn = 1;
                todoEntryPreview.style.gridRow = ticker;
                todoEntryPreview.id = ticker;
                ticker ++;
                todoEntryPreview.addEventListener('click', event => {
                    todoEntryPreview.classList.toggle('previewTran');
                    console.log(event.target.id);
                    setTimeout(() => {
                        //root.style.setProperty('--margin-amount', `calc(-${(Number(event.target.id) - 1) * 10}% - ${2*(Number(event.target.id)-1)}px) + (${10 - (4*(Number(event.target.id)-1))}px)`);
                        root.style.setProperty('--margin-amount', `calc(-${(Number(event.target.id) - 1) * 13}vh + ${(6.5/(Number(event.target.id)-1)+10)}px)`);
                        console.log(root.style)
                        todoEntryPreview.style.display = 'none';
                        todoEntryContainer.classList.toggle('mainTran');
                        todoEntryContainer.style.display = 'flex';
                        todoEntryContainer.style.backdropFilter = 'blur(10px)';
                        todoEntryContainer.style.gridRow = 1
                        //todoEntryContainer.style.top = `${10*(ticker-2)}%`;
                        //todoEntryContainer.style.marginTop = `-${10*(ticker-2)}%`;
                    }, 350)
                    setTimeout(() => {
                        todoEntryContainer.style.top = 0;
                        todoEntryContainer.style.marginTop = ('8px');
                        
                    }, 700)
                    
                })
                todoEntryContainer.addEventListener('click', () => {
                    todoEntryContainer.classList.toggle('mainTran');
                    todoEntryContainer.classList.toggle('mainTranRev');
                    todoEntryPreview.classList.toggle('previewTran');
                    
                    setTimeout(() => {
                        todoEntryContainer.style.display = 'none';
                        todoEntryContainer.style.backdropFilter = 'none';
                        todoEntryPreview.style.display = 'flex';
                        todoEntryContainer.classList.toggle('mainTranRev');
                        todoEntryPreview.classList.toggle('previewTranRev');
                        
                    }, 700)
                    setTimeout(() => {
                        todoEntryPreview.classList.toggle('previewTranRev');
                    }, 1050)
                    
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
