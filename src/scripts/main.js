import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"

import { fetchNews } from "./dataAccess.js"
import { fetchTask } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js";
import { deleteNews } from "./dataAccess.js";
/////////////////////////////////////////////////////////////////////////////

const mainContainer = document.querySelector(".dashboard")


export const nutshellRender = () => {
    fetchNews()
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newNewsBtn") {
        const newsForm = document.querySelector(".news-form");
        newsForm.style.display = (newsForm.style.display === "none") ? "block" : "none";
    }})

    mainContainer.addEventListener("change", changeEvent => {//////////// EventListener on check box to delete for 
        if (changeEvent.target.classList.contains("news-checkbox")) {
            const newsId = changeEvent.target.id.split("--")[1];
            
            // Check if the checkbox is checked
            if (changeEvent.target.checked) {
                // Perform the same action as delete button
                deleteNews(parseInt(newsId));
            }
    
            
        }
    
    });

////////////////////////////////////////task import
export const nutshellTaskrender = () => {
    fetchTask().then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}
//////////////////////////////////////////////////////////////////////////////////////////////////  TASK 
mainContainer.addEventListener(//statechanged listener for Task
    "stateChanged",
    customEvent => {
        // render()
    }
)
mainContainer.addEventListener("click", clickEvent => {//////////////////// reveal forms for Task
    if (clickEvent.target.id === "newTaskBtn") {
        const taskForm = document.querySelector(".task-form");
        taskForm.style.display = (taskForm.style.display === "none") ? "block" : "none";
    }})

    mainContainer.addEventListener("change", changeEvent => {//////////// EventListener on check box to delete for TASK
        if (changeEvent.target.classList.contains("task-checkbox")) {
            const taskId = changeEvent.target.id.split("--")[1];
            
            // Check if the checkbox is checked
            if (changeEvent.target.checked) {
                // Perform the same action as delete button
                deleteRequest(parseInt(taskId));
            }
    
            
        }
    
    });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    nutshellRender()
    nutshellTaskrender()////////////added render function for tasks//////////////////////////////////////////////////////////
}
