import { getTask } from "./dataAccess.js"
import { sendRequest } from "./dataAccess.js";
import { TaskForm } from "./TaskForm.js";


export const Tasks = () => {
    let tasks = getTask()

    let html = `<button id="newTaskBtn">New Task</button>
    ${TaskForm()} 
    <ul>
    ${tasks.map(task => `
    <li>${task.task} by ${task.neededBy}
        <button class="task__delete"
        id="request--${task.id}">
    Delete
</button>
        </li>`).join("")
    }
</ul>
    `

    return html
}
