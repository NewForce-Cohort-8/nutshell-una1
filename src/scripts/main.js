import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchNews } from "./dataAccess.js"
//TASK
import { fetchTask } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js";


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


//task statechanged listener
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        // render()
    }
)
// nutshellTaskrender()

mainContainer.addEventListener("click", click => {// task delete button 
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


const activeUser = sessionStorage.getItem("activeUser")

if(!activeUser){
    LoginForm()
    RegisterForm()
} else {
    nutshellRender()
    nutshellTaskrender()//task
}
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newTaskBtn") {
        const taskForm = document.querySelector(".task-form");
        taskForm.style.display = (taskForm.style.display === "none") ? "block" : "none";
    }})