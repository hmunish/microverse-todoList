import { taskList } from "./domElements.js";
import tasksData from "./tasksData.js";

export default class TaskList{
    constructor(){
        
    }

    loadTasks(){
        let liHtml = '';
        tasksData.forEach((e)=>{
            liHtml += `<li class="tasks"><input type="checkbox" ${e.completed ? 'checked' : ''} value="${e.description}">${e.description}<i class="fa fa-ellipsis-v"></i></li>`
        })
        taskList.innerHTML = liHtml;
    }
}