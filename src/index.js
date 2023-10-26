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
export function todoDateObj(id, prevId, fullDate){
    return {
        id: id,
        prevId: prevId,
        fullDate: fullDate,
    }
}
export function dateSort(arr){
    let sortedArr = [];
    if (arr.length > 0){
        for(let i=0;i<arr.length;i++){
            if(sortedArr.length == 0){
                sortedArr[i]=arr[i];
            }
            else{
                for(let x=0;x<sortedArr.length;x++){
                    if(arr[i].fullDate<=sortedArr[x].fullDate){
                        sortedArr.splice(x, 0, arr[i]);
                        break;
                    }
                    else if(arr[i].fullDate>(sortedArr[sortedArr.length-1].fullDate)){
                        sortedArr.push(arr[i]);
                        break;
                    }
                }
            }
        }
        console.log(sortedArr);
        let currentObj;
        let prevObjIds = [];
        for(let a=0; a<sortedArr.length;a++){
            prevObjIds[a] = sortedArr[a].id;
            currentObj = document.getElementById(prevObjIds[a]);
            currentObj.classList.add(`obj${a+1}`);
            currentObj.id = undefined;
        }
        for(let a=0; a<sortedArr.length;a++){
            currentObj = document.querySelector(`.obj${a+1}`);
            currentObj.classList.remove(`obj${a+1}`);
            currentObj.id = (a+1);
            currentObj.style.gridRow = currentObj.id;
            sortedArr[a].id = (a+1);
        }
        console.log(prevObjIds);
    }
}