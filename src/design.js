import { format, compareAsc } from 'date-fns';
import { newNote } from './index.js';
import { createTodo } from './index.js';
import { todoDateObj } from './index.js';
import { dateSort } from './index.js';
import { todoDelete } from './index.js';
import './style.css';
import CloseIcon from './images/close-circle-svgrepo-com1.png';
import MoreIcon from './images/more-horizontal-circle-svgrepo-com.png'
const root = document.documentElement;
export function component() {
    let currentlySorted = false;
    let ticker = 1;
    let todoListArr = [];
    let todoListDateObjArr = [];
    let currentEl;
    let fullDateStr;
    let unForDate;
    let dateFormatRegex = /[^T:-]/g;
    let unsort = true;
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
            let sortMenuOpen = false;
            sort.addEventListener('click', () => {
                if(sortMenuOpen == false) {
                    document.querySelector('.sortMenu').classList.toggle('sortMenuTran');
                    document.querySelector('.sortMenu').classList.toggle('sortMenuCloseTran');
                    sortArrow.classList.toggle('arrowRotate');
                    sortMenuOpen = true;
                }
            });
            setTimeout(() => {
                document.getElementById('sortDateButton').addEventListener('click', () => {
                    currentlySorted = true;
                    if(unsort == true){
                        unsort = false;
                        document.getElementById('sortDateButton').style.backgroundColor = '#90ee90';
                        todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
                    }
                    else if(unsort == false){
                        unsort = true;
                        document.getElementById('sortDateButton').style.backgroundColor = '#ffa07a';
                        todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
                        currentlySorted = false;
                    }
                })
                document.getElementById('sortMenuExit').addEventListener('click', () => {
                    document.querySelector('.sortMenu').classList.toggle('sortMenuTran');
                    document.querySelector('.sortMenu').classList.toggle('sortMenuCloseTran');
                    sortArrow.classList.toggle('arrowRotate');
                    sortMenuOpen = false;
                })
            }, 100);
            
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
            let sortDate = document.createElement('button');
            sortDate.id = 'sortDateButton';
            sortDate.textContent = 'Date';
            let exitButton = new Image();
            exitButton.src = CloseIcon;
            exitButton.id = ('sortMenuExit');
            sortMenu.appendChild(sortDate);
            sortMenu.appendChild(exitButton);
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
                const todoClose = new Image();
                const todoMore = new Image();
                todoClose.src = CloseIcon;
                todoMore.src = MoreIcon;
                todoClose.id = 'todoClose';
                todoMore.id = 'todoMore';
                todoEntryPreview.appendChild(todoEntryTitle);
                todoEntryPreview.appendChild(todoEntryDate);
                todoEntryPreview.appendChild(todoMore);
                todoEntryPreview.appendChild(todoClose);
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
                todoEntryPreview.id = Number(ticker);
                todoEntryPreview.style.gridRow = todoEntryPreview.id;
                todoListArr[ticker-1] = ticker;
                console.log(todoListArr);
                currentEl = document.getElementById(ticker);
                unForDate = (currentEl.querySelector('.todoEntryDate').textContent);
                console.log(unForDate);
                function dateFormat(filteredDate) {
                    if (filteredDate) {
                        let filteredStr = filteredDate.join('');
                        console.log(filteredStr);
                        return(filteredStr)
                    }
                    else {
                        console.log('no date');
                    }
                }
                //dateFormat(unForDate.match(dateFormatRegex))
                const setDate = new Date(unForDate);
                const date = new Date(); 
                Object [`tododateObj${ticker}`] = todoDateObj(ticker, ticker, setDate.getTime(), date.getTime());
                todoListDateObjArr[ticker-1] = Object[`tododateObj${ticker}`];
                console.log(todoListDateObjArr);
                ticker ++;
                todoMore.addEventListener('mouseup', () => {
                    todoEntryPreview.classList.toggle('previewTran');
                    setTimeout(() => {
                        if (todoEntryPreview.id == 1){
                            root.style.setProperty('--margin-amount', '20px');
                        }
                        else {
                            root.style.setProperty('--margin-amount', `calc(-${(Number(todoEntryPreview.id) - 1) * 13}vh + ${(6.5/(Number(todoEntryPreview.id)-1)+10)}px)`);
                        }
                        todoEntryPreview.style.display = 'none';
                        todoEntryContainer.classList.toggle('mainTran');
                        todoEntryContainer.style.display = 'flex';
                        todoEntryContainer.style.gridRow = 1;
                    }, 340);
                    setTimeout(() => {
                        todoEntryContainer.style.top = 0;
                        todoEntryContainer.style.marginTop = ('8px');
                        
                    }, 700);
                });
                todoEntryContainer.addEventListener('click', () => {
                    todoEntryContainer.classList.toggle('mainTran');
                    todoEntryContainer.classList.toggle('mainTranRev');
                    todoEntryPreview.classList.toggle('previewTran');
                    setTimeout(() => {
                        todoEntryContainer.style.display = 'none';
                        todoEntryPreview.style.display = 'grid';
                        todoEntryPreview.classList.toggle('previewTranRev');
                    }, 690);
                    setTimeout(() => {
                        todoEntryPreview.classList.toggle('previewTranRev');
                        todoEntryContainer.classList.toggle('mainTranRev');
                    }, 1050);
                })
                todoClose.addEventListener('click', () => {
                    ticker--
                    console.log(todoListArr);
                    todoDelete(Number(todoEntryPreview.id), todoListDateObjArr);
                })
                function formReset(){
                    titleInput.value = null;
                    descriptionInput.value = null;
                    dateInput.value = null;
                }
                formReset();
                
                todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
                
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
