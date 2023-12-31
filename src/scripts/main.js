import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataAccess.js"
/////////////////////////////////////////////////////////////////////////////TASK imports
import { fetchTask } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js";
/////////////////////////////////////////////////////////////////////////////
import { fetchMessage } from "./dataAccess.js"
import { deleteMessage} from "./dataAccess.js";

const mainContainer = document.querySelector(".dashboard")


export const nutshellRender = () => {
    fetchNews()
    .then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}

//task import
export const nutshellTaskrender = () => {
    fetchTask().then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}


//messageimport
export const nutshellMessagerender = () => {
    fetchMessage().then(
        () => {
            // alert('before nutshell')
            mainContainer.innerHTML = Nutshell()
            // alert('after nutshell')
        }
    )
}
//////////////////////////////////////////////////////////////////////////////////////////////////  TASK 
mainContainer.addEventListener(//statechanged listener for Task , Article
    "stateChanged",
    customEvent => {
        // alert('i caught the state changed event')
        nutshellRender()
        nutshellTaskrender()////////////added render function for tasks//////////////////////////////////////////////////////////
        nutshellMessagerender()
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


////////// LISTENS FOR TOGGLE BUTTON ---New Article--- in Nutshell.js /////////////
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newArticleBtn") {
        const newsForm = document.querySelector(".news-form");
        newsForm.style.display = (newsForm.style.display === "none") ? "block" : "none";
    }})




//*****************************messages

mainContainer.addEventListener("click", clickEvent => {//reveal forms for message
    if (clickEvent.target.id === "newMsgBtn") {
        const messageForm = document.querySelector(".message-form");
       messageForm.style.display = (messageForm.style.display === "none") ? "block" : "none";
    }})

    mainContainer.addEventListener("change", changeEvent => {//////////// EventListener on check box to delete for message
        if (changeEvent.target.classList.contains("message-checkbox")) {
            const messageId = changeEvent.target.id.split("--")[1];
            
            // Check if the checkbox is checked
            if (changeEvent.target.checked) {
                // Perform the same action as delete button
                deleteMessage(parseInt(messageId));
                // alert('start render')
                nutshellMessagerender()
                // alert('end render')
                
              }
    
            
        }
    
    });
//*****************************end of messages


const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    nutshellRender()
    nutshellTaskrender()////////////added render function for tasks//////////////////////////////////////////////////////////
    nutshellMessagerender()
}
