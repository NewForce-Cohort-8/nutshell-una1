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


export const nutshellTaskrender = () => {
    fetchTask().then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}



mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
// nutshellTaskrender()

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
mainContainer.addEventListener("click", click => {
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
    nutshellTaskrender()
}