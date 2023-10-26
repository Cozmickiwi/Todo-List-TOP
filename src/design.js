import { format, compareAsc } from 'date-fns';
import { newNote } from './index.js';
import { createTodo } from './index.js';
import './style.css';
const root = document.documentElement;
export function component() {
    let ticker = 1;
    const mainContainer = document.querySelector('.mainContainer');
    const todoItemContainer = document.createElement('div');
    const menu = document.createElement('div');
    menu.className = 'menu';
    todoItemContainer.appendChild(menu);
    menu.style.gridRow = '1 / -1';
    menu.style.gridColumn = '1';
    function menuItems(){
        function sort(){
            const sort = document.createElement('div');
            sort.id = 'sort';
            sort.className = 'menuItem';
            const sortText = document.createElement('h4');
            sortText.textContent = 'Sort';
            const sortArrow = document.createElement('h4');
            sortArrow.id = 'sortArrow';
            sortArrow.textContent = '>';
            sort.appendChild(sortText);
            sort.appendChild(sortArrow);
            sort.addEventListener('click', () => {
                document.querySelector('.sortMenu').classList.toggle('sortMenuTran');
                document.querySelector('.sortMenu').classList.toggle('sortMenuCloseTran');
                sortArrow.classList.toggle('arrowRotate');
            });
            return(sort);
        }
        function home(){
            const home = document.createElement('div');
            home.id = 'home';
            home.className = 'menuItem';
            const homeText = document.createElement('h3');
            homeText.textContent = 'Home';
            home.appendChild(homeText);
            return(home);
        }
        function today(){
            const today = document.createElement('div');
            today.id = 'today';
            today.className = 'menuItem';
            const todayText = document.createElement('h3');
            todayText.textContent = 'Today';
            today.appendChild(todayText);
            return(today);
        }
        function week(){
            const week = document.createElement('div');
            week.id = 'week';
            week.className = 'menuItem';
            const weekText = document.createElement('h3');
            weekText.textContent = 'Week';
            week.appendChild(weekText);
            return(week);
        }
        function month(){
            const month = document.createElement('div');
            month.id = 'month';
            month.className = 'menuItem';
            const monthText = document.createElement('h3');
            monthText.textContent = 'Month';
            month.appendChild(monthText);
            return(month);
        }
        function projects(){
            const projects = document.createElement('div');
            projects.id = 'projects';
            projects.className = 'menuItem';
            const projectsText = document.createElement('h3');
            projectsText.textContent = 'Projects';
            projects.appendChild(projectsText);
            return(projects);
        }
        function notes(){
            const notes = document.createElement('div');
            notes.id = 'notes';
            notes.className = 'menuItem';
            const notesText = document.createElement('h3');
            notesText.textContent = 'Notes';
            notes.appendChild(notesText);
            return(notes);
        }
        function sortMenu(){
            sortMenu = document.createElement('div');
            sortMenu.className = 'sortMenu';
            sortMenu.classList.add('sortMenuCloseTran');
            return(sortMenu);
        }
        function menuAppend () {
            menu.appendChild(sort());
            menu.appendChild(home());
            menu.appendChild(today());
            menu.appendChild(week());
            menu.appendChild(month());
            menu.appendChild(projects());
            menu.appendChild(notes());
            menu.appendChild(sortMenu());
        }
        menuAppend();
        
    }
    menuItems();
    todoItemContainer.className = 'todoItemContainer';
    mainContainer.appendChild(todoItemContainer);
    const form = document.querySelector('.newTodo');
    form.style.display = "none";
    function todoForm() {
        let titleInput = document.getElementById('todoTitle');
        let descriptionInput = document.getElementById('todoDescription');
        let dateInput = document.getElementById('todoDate');
        let priorityInputLow = document.getElementById('priorityRadio1');
        let priorityInputMed = document.getElementById('priorityRadio2');
        let priorityInputHigh = document.getElementById('priorityRadio3');
        const todoSubmit = document.querySelector('.submitButton');
        form.addEventListener('submit', event => {
            let prioritySelection;
            if(priorityInputLow.checked){
                prioritySelection = 'Low';
            }
            else if(priorityInputMed.checked){
                prioritySelection = 'Med';
            }
            else if(priorityInputHigh.checked){
                prioritySelection = 'High';
            }
            event.preventDefault();
            console.log(titleInput.value);
            form.style.display = 'none';
            document.querySelector('.button').textContent = 'New';
            todoEntry();
            function todoEntry(){
                let todoListing = createTodo(titleInput.value, descriptionInput.value, dateInput.value, prioritySelection);
                Object[`todoListing${ticker}`] = todoListing;
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
                todoEntryDate.className = 'todoEntryDate';
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
                let todoMainTitle = document.createElement('h3');
                todoMainTitle.textContent = 'Title:';
                let todoMainDescription = document.createElement('h3');
                todoMainDescription.textContent = 'Description:'
                let todoMainDate = document.createElement('h3');
                todoMainDate.textContent = 'Date/Time:'
                todoEntryContainer.appendChild(todoMainTitle);
                todoEntryContainer.appendChild(todoEntryTitleMain);
                todoEntryContainer.appendChild(todoMainDescription);
                todoEntryContainer.appendChild(todoEntryDescriptionMain);
                todoEntryContainer.appendChild(todoMainDate);
                todoEntryContainer.appendChild(todoEntryDateMain);
                todoItemContainer.appendChild(todoEntryContainer)
                todoEntryContainer.style.display = 'none';
                todoEntryContainer.style.gridRow = ticker;
                todoEntryContainer.style.gridColumn = 2;
                todoEntryPreview.style.gridColumn = 2;
                todoEntryPreview.style.gridRow = ticker;
                todoEntryPreview.id = ticker;
                ticker ++;
                todoEntryPreview.addEventListener('click', event => {
                    console.log(document.getElementById(1).querySelector('.todoEntryDate').textContent);
                    todoEntryPreview.classList.toggle('previewTran');
                    console.log(event.target.id);
                    setTimeout(() => {
                        //root.style.setProperty('--margin-amount', `calc(-${(Number(event.target.id) - 1) * 10}% - ${2*(Number(event.target.id)-1)}px) + (${10 - (4*(Number(event.target.id)-1))}px)`);
                        root.style.setProperty('--margin-amount', `calc(-${(Number(event.target.id) - 1) * 13}vh + ${(6.5/(Number(event.target.id)-1)+10)}px)`);
                        if (event.target.id == 1){
                            root.style.setProperty('--margin-amount', '20px');
                        }
                        console.log(root.style)
                        todoEntryPreview.style.display = 'none';
                        todoEntryContainer.classList.toggle('mainTran');
                        todoEntryContainer.style.display = 'flex';
                        todoEntryContainer.style.backdropFilter = 'blur(10px)';
                        todoEntryContainer.style.gridRow = 1
                        //todoEntryContainer.style.top = `${10*(ticker-2)}%`;
                        //todoEntryContainer.style.marginTop = `-${10*(ticker-2)}%`;
                    }, 340)
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
                        
                        todoEntryPreview.classList.toggle('previewTranRev');
                        
                    }, 690)
                    setTimeout(() => {
                        todoEntryPreview.classList.toggle('previewTranRev');
                        todoEntryContainer.classList.toggle('mainTranRev');
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
