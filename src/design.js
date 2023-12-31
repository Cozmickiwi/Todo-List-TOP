import { format, compareAsc } from 'date-fns';
import { newNote } from './index.js';
import { createTodo } from './index.js';
import { todoDateObj } from './index.js';
import { dateSort } from './index.js';
import { todoDelete } from './index.js';
import { projectObj } from './index.js';
import './style.css';
import CloseIcon from './images/close-circle-svgrepo-com1.png';
import MoreIcon from './images/more-horizontal-circle-svgrepo-com.png';
const root = document.documentElement;
export function component() {
    let currentlySorted = false;
    let ticker = 1;
    let todoListArr = [];
    let todoListDateObjArr = [];
    let todoListDateObjArrCopy = [];
    let todayTodoArr = [];
    let weekTodoArr = [];
    let monthTodoArr = [];
    let currentEl;
    let fullDateStr;
    let unForDate;
    let dateFormatRegex = /[^T:-]/g;
    let unsort = true;
    let currentFilter = 'none';
    let projectCount = 1;
    let projectMenuOpen = false;
    let projectList = [];
    let projectTodos = [];
    let currentProject = undefined;
    let projectActive = false;
    const mainContainer = document.querySelector('.mainContainer');
    const todoItemContainer = document.createElement('div');
    const menu = document.createElement('div');
    menu.className = 'menu';
    todoItemContainer.appendChild(menu);
    menu.style.gridRow = '1 / -1';
    menu.style.gridColumn = '1';
    function todayFilter(){
        let date = new Date();
        let timeNow = date.getTime();
        todayTodoArr = [];
        for(let i=0; i<todoListDateObjArr.length; i++){
            if((todoListDateObjArr[i].fullDate) >= (timeNow - 86400000) && ((todoListDateObjArr[i].fullDate)) <= (timeNow + 86400000)){
                todayTodoArr.push(todoListDateObjArr[i]);
            }
            else{
                (todoListDateObjArr[i].element).style.display = 'none';
                (todoListDateObjArr[i].element).style.gridRow = undefined;
                (todoListDateObjArr[i].element).id = undefined;
                ticker--;
            }
        }
        todayTodoArr = dateSort(todayTodoArr, unsort);
    }
    function weekFilter(){
        let date = new Date();
        let timeNow = date.getTime();
        weekTodoArr = [];
        for(let i=0; i<todoListDateObjArr.length; i++){
            if((todoListDateObjArr[i].fullDate) >= (timeNow - 604800000) && ((todoListDateObjArr[i].fullDate)) <= (timeNow + 604800000)){
                weekTodoArr.push(todoListDateObjArr[i]);
            }
            else{
                (todoListDateObjArr[i].element).style.display = 'none';
                (todoListDateObjArr[i].element).style.gridRow = undefined;
                (todoListDateObjArr[i].element).id = undefined;
                ticker--;
            }
        }
        weekTodoArr = dateSort(weekTodoArr, unsort);
    }
    function monthFilter(){
        let date = new Date();
        let timeNow = date.getTime();
        monthTodoArr = [];
        for(let i=0; i<todoListDateObjArr.length; i++){
            if((todoListDateObjArr[i].fullDate) >= (timeNow - 2629746000) && ((todoListDateObjArr[i].fullDate)) <= (timeNow + 2629746000)){
                monthTodoArr.push(todoListDateObjArr[i]);
            }
            else{
                (todoListDateObjArr[i].element).style.display = 'none';
                (todoListDateObjArr[i].element).style.gridRow = undefined;
                (todoListDateObjArr[i].element).id = undefined;
                ticker--;
            }
        }
        monthTodoArr = dateSort(monthTodoArr, unsort);
    }
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
                    mainSort();
                });
                document.getElementById('sortMenuExit').addEventListener('click', () => {
                    document.querySelector('.sortMenu').classList.toggle('sortMenuTran');
                    document.querySelector('.sortMenu').classList.toggle('sortMenuCloseTran');
                    sortArrow.classList.toggle('arrowRotate');
                    sortMenuOpen = false;
                });
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
        function projectMenu(){
            projectMenu = document.createElement('div');
            projectMenu.className = 'projectMenu';
            todoItemContainer.appendChild(projectMenu);
            const newProject = document.createElement('div');
            newProject.className = 'newProjectButton';
            newProject.textContent = 'New';
            projectMenu.appendChild(newProject);
            const pMenuClose = new Image;
            pMenuClose.src = CloseIcon;
            pMenuClose.className = 'pMenuClose';
            projectMenu.appendChild(pMenuClose);
            const projectContainer = document.createElement('div');
            projectContainer.className = 'projectContainer';
            projectMenu.appendChild(projectContainer);
            const projectForm = document.createElement('form');
            function projectItem(){
                projectForm.className = 'projectForm';
                const projectTitle = document.createElement('input');
                projectTitle.className = 'projectTitle';
                projectTitle.setAttribute('type', 'text');
                projectTitle.setAttribute('name', 'projectTitle');
                projectTitle.setAttribute('required', '');
                projectTitle.setAttribute('placeholder', 'Title:');
                projectTitle.id = 'projectTitle';
                projectForm.appendChild(projectTitle);
                todoItemContainer.appendChild(projectForm);
                const projectCancel = document.createElement('button');
                projectCancel.setAttribute('type', 'button');
                projectCancel.textContent = 'Cancel';
                projectCancel.style.gridColumn = '2';
                projectForm.appendChild(projectCancel);
                projectCancel.addEventListener('click', () => {
                    projectForm.style.display = 'none';
                    projectTitle.value = null;
                })
                const projectSubmit = document.createElement('button');
                projectSubmit.setAttribute('type', 'submit');
                projectSubmit.textContent = 'Submit';
                projectSubmit.style.gridColumn = '5'
                projectForm.appendChild(projectSubmit);
            }
            projectForm.addEventListener('submit', event =>{
                event.preventDefault();
                Object[`project${projectCount}`] = projectObj(document.getElementById('projectTitle').value);
                document.getElementById('projectTitle').value = null;
                document.querySelector('.projectForm').style.display = 'none';
                projectList.push(Object[`project${projectCount}`]);
                console.log(projectList);
                let project = document.createElement('div');
                project.className = 'project';
                let projectText = document.createElement('p');
                projectText.textContent = Object[`project${projectCount}`].title;
                const projectSelect = document.getElementById('projectSelect');
                let projectOption = document.createElement('option');
                projectOption.setAttribute('value', Object[`project${projectCount}`].title);
                projectOption.textContent = Object[`project${projectCount}`].title;
                projectSelect.appendChild(projectOption);
                project.appendChild(projectText);
                projectContainer.appendChild(project);
                project.addEventListener('click', () => {
                    currentProject = project.childNodes[0].textContent;
                    todoListDateObjArrCopy = todoListDateObjArr;
                    let projectTicker = 1;
                    for(let i=0; i<todoListDateObjArr.length; i++){
                        if(todoListDateObjArr[i].project != currentProject){
                            todoListDateObjArr[i].element.style.display = 'none';
                            todoListDateObjArr[i].element.id = undefined;
                        }
                        else{
                            todoListDateObjArr[i].element.id = projectTicker;
                            todoListDateObjArr[i].element.style.gridRow = projectTicker;
                            projectTicker++;
                            projectTodos.push(todoListDateObjArr[i]);
                        }
                        
                    }
                    todoListDateObjArr = projectTodos;
                    projectActive = true;
                    sort();
                })
            })
            newProject.addEventListener('click', () => {
                projectForm.style.display = 'grid';
            })
            projectItem();
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
            projectMenu();
        }
        menuAppend();
        
    }
    menuItems();
    todoItemContainer.className = 'todoItemContainer';
    mainContainer.appendChild(todoItemContainer);
    const form = document.querySelector('.newTodo');
    form.style.display = "none";
    function mainSort(){
        currentlySorted = true;
        if(unsort == true){
            unsort = false;
            document.getElementById('sortDateButton').style.backgroundColor = '#90ee90';
            todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
        }
        else if(unsort == false){
            unsort = true;
            currentFilter = 'none';
            for(let i=0; i<todoListDateObjArr.length; i++){
                console.log((todoListDateObjArr[i].element).id);
                if((todoListDateObjArr[i].element).id == 'undefined'){
                    ticker++;
                    (todoListDateObjArr[i].element).id = Number(ticker);
                }
            }
            document.getElementById('sortDateButton').style.backgroundColor = '#ffa07a';
            todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
            currentlySorted = false;
        }
    }
    function todoForm(){
        let titleInput = document.getElementById('todoTitle');
        let descriptionInput = document.getElementById('todoDescription');
        let dateInput = document.getElementById('todoDate');
        let priorityInputLow = document.getElementById('priorityRadio1');
        let priorityInputMed = document.getElementById('priorityRadio2');
        let priorityInputHigh = document.getElementById('priorityRadio3');
        let projectInput = document.getElementById('projectSelect');
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
                let todoListing = createTodo(titleInput.value, descriptionInput.value, dateInput.value, prioritySelection, projectInput.value);
                Object[`todoListing${ticker}`] = todoListing;
                let todoEntryContainer = document.createElement('div');
                let todoEntryPreview = document.createElement('div');
                let todoEntryTitle = document.createElement('p');
                let todoEntryDescription = document.createElement('p');
                let todoEntryDate = document.createElement('p');
                let todoEntryTitleMain = document.createElement('p');
                let todoEntryDescriptionMain = document.createElement('p');
                let todoEntryDateMain = document.createElement('p');
                let todoEntryProjectMain = document.createElement('p');
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
                todoEntryProjectMain.textContent = todoListing.project;
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
                todoMainDescription.textContent = 'Description:';
                let todoMainDate = document.createElement('h3');
                todoMainDate.textContent = 'Date/Time:';
                let todoMainProject = document.createElement('h3');
                todoMainProject.textContent = "Project:";
                todoEntryContainer.appendChild(todoMainTitle);
                todoEntryContainer.appendChild(todoEntryTitleMain);
                todoEntryContainer.appendChild(todoMainDescription);
                todoEntryContainer.appendChild(todoEntryDescriptionMain);
                todoEntryContainer.appendChild(todoMainDate);
                todoEntryContainer.appendChild(todoEntryDateMain);
                todoEntryContainer.appendChild(todoMainProject);
                todoEntryContainer.appendChild(todoEntryProjectMain);
                todoItemContainer.appendChild(todoEntryContainer);
                ticker = (todoListDateObjArr.length +1);
                todoEntryContainer.style.display = 'none';
                todoEntryContainer.style.gridRow = ticker;
                //todoEntryContainer.style.gridColumn = 2;
                //todoEntryPreview.style.gridColumn = 2;
                todoEntryPreview.id = Number(ticker);
                todoEntryPreview.style.gridRow = todoEntryPreview.id;
                todoListArr.push(ticker);
                console.log(todoListArr);
                currentEl = document.getElementById(ticker);
                unForDate = (currentEl.querySelector('.todoEntryDate').textContent);
                console.log(unForDate);
                /*function dateFormat(filteredDate) {
                    if (filteredDate) {
                        let filteredStr = filteredDate.join('');
                        console.log(filteredStr);
                        return(filteredStr)
                    }
                    else {
                        console.log('no date');
                    }
                }*/
                const setDate = new Date(unForDate);
                const date = new Date(); 
                Object [`tododateObj${ticker}`] = todoDateObj(ticker, ticker, setDate.getTime(), date.getTime(), document.getElementById(Number(ticker)), projectInput.value);
                todoListDateObjArr.push(Object[`tododateObj${ticker}`]);
                console.log(todoListDateObjArr);
                //ticker ++;
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
                });
                todoClose.addEventListener('click', () => {
                    ticker--
                    console.log(todoListArr);
                    todoDelete(Number(todoEntryPreview.id), todoListDateObjArr);
                    for(let i=0; i<todayTodoArr.length; i++){
                        if(todayTodoArr[i].element == todoEntryPreview){
                            todayTodoArr.splice(i,1);
                        }
                    }
                    for(let i=0; i<todoListDateObjArr.length; i++){
                        if(todoListDateObjArr[i].element == todoEntryPreview){
                            todoListDateObjArr.splice(i,1);
                        }
                    }
                });
                function formReset(){
                    titleInput.value = null;
                    descriptionInput.value = null;
                    dateInput.value = null;
                }
                formReset();
                if(currentFilter == 'none'){
                    for(let i=0; i<todoListDateObjArr.length; i++){
                        console.log((todoListDateObjArr[i].element).id);
                        if((todoListDateObjArr[i].element).id == 'undefined'){
                            (todoListDateObjArr[i].element).id = Number(ticker);
                            ticker++;
                        }
                    }
                    todoListDateObjArr = dateSort(todoListDateObjArr, unsort);
                }
                else if(currentFilter == 'today'){
                    todayFilter();
                }
                else if(currentFilter == 'week'){
                    weekFilter();
                }
                else if(currentFilter == 'month'){
                    monthFilter();
                }
                return(todoEntryPreview);
            }
        });
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
        });
        return(newNoteButton);
    }
    function docAppend(){
        mainContainer.appendChild(button());
    }
    docAppend();
    function projectMenuTran(){
        if(projectMenuOpen == false){
            document.querySelector('.projectMenu').classList.toggle('pOpenTran');
            projectMenuOpen = true;
        }
        else if(projectMenuOpen == true){
            document.querySelector('.projectMenu').classList.toggle('pOpenTran');
            document.querySelector('.projectMenu').classList.toggle('pCloseTran');
            projectMenuOpen = 'initialized';
        }
        else{
            document.querySelector('.projectMenu').classList.toggle('pOpenTran');
            document.querySelector('.projectMenu').classList.toggle('pCloseTran');
        }
    }
    document.getElementById('today').addEventListener('click', () => {
        currentFilter = 'today';
        todayFilter();
    })
    week.addEventListener('click', () => {
        currentFilter = 'week';
        weekFilter();
    })
    month.addEventListener('click', () => {
        currentFilter = 'month';
        monthFilter();
    })
    home.addEventListener('click', () => {
        currentFilter = 'none';
        unsort = false;
        if(projectActive == true){
            todoListDateObjArr = todoListDateObjArrCopy;
            projectActive = false;
        }

        mainSort();
    })
    projects.addEventListener('click', () => {
        projectMenuTran();
    })
    document.querySelector('.pMenuClose').addEventListener('click', () => {
        projectMenuTran();
    })
    return(mainContainer);
}