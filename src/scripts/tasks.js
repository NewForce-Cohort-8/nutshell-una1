import { getTask } from "./dataAccess.js"
import { sendRequest } from "./dataAccess.js";
import { TaskForm } from "./TaskForm.js";


export let Tasks = () => {
    let tasks = getTask()

    let html = 
    `
        ${TaskForm()}  <!--i added taskForm -->
            <ul>
            ${tasks.map(task => `
            <li>
                <input type="checkbox" id="task--${task.id}" class="task-checkbox">
                <label for="task--${task.id}">
                    ${task.task} by ${task.neededBy}
                </label>
            </li>`).join("")}
            </ul>
      `
    return html
}


// ${tasks.map(task => `<li>${task.task} by ${task.neededBy}
//                                         <button class="task__delete"id="request--${task.id}"> Delete </button>
//                                      </li>`).join("")}