import './style.css';
export function newNote() {
    console.log('hello!');
}
import { component } from './design';
component();
export function createTodo(title, description, date, priority, project){
    return {
        title: title,
        description: description,
        date: date,
        priority: priority,
        project: project,
    }
}
export function todoDateObj(id, prevId, fullDate, currentDate, element, project){
    return {
        id: id,
        prevId: prevId,
        fullDate: fullDate,
        currentDate: currentDate,
        element: element,
        project: project,
    }
}
export function projectObj(title){
    return {
        title: title,
    }
}
let sortedArr;
let sortedArr2;

export function dateSort(arr, unsort){
    sortedArr = [];
    if (arr.length > 0){
        for(let i=0;i<arr.length;i++){
            if(sortedArr.length == 0){
                sortedArr[i]=arr[i];
            }
            else{
                for(let x=0;x<sortedArr.length;x++){
                    if(unsort == false){
                        if(arr[i].fullDate<=sortedArr[x].fullDate){
                            sortedArr.splice(x, 0, arr[i]);
                            break;
                        }
                        else if(arr[i].fullDate>(sortedArr[sortedArr.length-1].fullDate)){
                            sortedArr.push(arr[i]);
                            break;
                        }
                    }
                    else if(unsort == true){
                        if(arr[i].currentDate<=sortedArr[x].currentDate){
                            sortedArr.splice(x, 0, arr[i]);
                            break;
                        }
                        else if(arr[i].currentDate>(sortedArr[sortedArr.length-1].currentDate)){
                            sortedArr.push(arr[i]);
                            break;
                        }
                    }
                }
            }
        }
        console.log(sortedArr);
        sortedArr2 = sortedArr;
        let currentObj;
        let prevObjIds = [];
        for(let a=0; a<sortedArr.length;a++){
            prevObjIds[a] = sortedArr[a].id;
            currentObj = arr[a].element;
            currentObj.classList.add(`obj${a+1}`);
            currentObj.id = undefined;
        }
        for(let a=0; a<sortedArr.length;a++){
            currentObj = sortedArr[a];
            (currentObj.element).classList.remove(`obj${a+1}`);
            (currentObj.element).id = (a+1);
            (currentObj.element).style.gridRow = (currentObj.element).id;
            (currentObj.element).style.display = 'grid';
            currentObj.id = (a+1);
            sortedArr2[a] = currentObj;
        }
        console.log(prevObjIds);
        return(sortedArr2);
    }
}
export function todoDelete(chosenId, todoListDateObjArr){
    let curItem;
    let nextItem;
    if (sortedArr2 == undefined) sortedArr2 = todoListDateObjArr;
    let chosenItem = sortedArr2[chosenId-1];
    sortedArr2.splice(chosenId-1, 1);
    document.getElementById(chosenId).remove();
    for(let index = chosenId-1; index < sortedArr2.length; index++){
        curItem = sortedArr2[index];
        nextItem = sortedArr2[index+1];
        sortedArr2[index].id = index+1;
        sortedArr2[index].prevId = chosenItem.prevId;
        let curEl = document.getElementById(index+2);
        curEl.id = index+1;
        console.log(index);
        console.log(sortedArr2);
        chosenItem=nextItem;
        curEl.style.gridRow = (curEl.id);
        console.log(sortedArr2);
    }
}