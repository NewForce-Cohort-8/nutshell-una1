import { getTask } from "./dataAccess.js"
import { sendRequest } from "./dataAccess.js";
import { TaskForm } from "./TaskForm.js";


export let Tasks = () => {
    let tasks = getTask()

    let html = 
    `
        ${TaskForm()} 
            <ul>
                ${tasks.map(task => `<li>${task.task} by ${task.neededBy}
                                        <button class="task__delete"id="request--${task.id}"> Delete </button>
                                     </li>`).join("")}
            </ul>
      `
    return html
}
