import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { fetchMessages } from "./dataAccess.js"


//Kari added fetching the data from the messages section of the api and storing it in an application state before converting the data structures to HTML representation
const mainContainer = document.querySelector(".dashboard")

export const nutshellRender = () => {

    fetchMessages().then(
        () => {
            mainContainer.innerHTML = Nutshell()
        }
    )
}


/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


const activeUser = sessionStorage.getItem("activeUser")

if (!activeUser) {
    LoginForm()
    RegisterForm()
} else {
    nutshellRender()
}


