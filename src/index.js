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
export function todoDateObj(id, prevId, fullDate, currentDate){
    return {
        id: id,
        prevId: prevId,
        fullDate: fullDate,
        currentDate: currentDate,
    }
}
let sortedArr;
let sortedArr2;

export function dateSort(arr, unsort, timeFilter, timeNow){
    sortedArr = [];
    console.log(timeNow);
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
            currentObj = document.getElementById(prevObjIds[a]);
            currentObj.classList.add(`obj${a+1}`);
            currentObj.id = undefined;
        }
        let filterCount = 0;
        for(let a=0; a<sortedArr.length;a++){
            currentObj = document.querySelector(`.obj${a+1}`);
            currentObj.classList.remove(`obj${a+1}`);
            if(timeFilter == 'day' && ((sortedArr[a].fullDate)) < (timeNow - 86400000) || ((sortedArr[a].fullDate)) > (timeNow + 86400000)){
                currentObj.style.display = 'none';
                sortedArr[a].id = null;
                currentObj.style.gridRow = 'none';
                filterCount++;
                continue;
            }
            currentObj.id = ((a-filterCount)+1);
            currentObj.style.gridRow = currentObj.id;
            sortedArr[a].id = (a+1);
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
        curEl.style.gridRow = (curEl.id)
        console.log(sortedArr2)
    }
}