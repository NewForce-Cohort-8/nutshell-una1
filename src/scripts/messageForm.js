import { sendMessages } from "./dataAccess.js";  

//code inside this block executes when there is a click event inside the container element.
const mainContainer = document.querySelector("#container") 

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {    //checks if the clicked element has the id submitRequest
        // Gets what the user typed into the form fields
        const userName = document.querySelector("input[name='userName']").value
        const newMessage = document.querySelector("input[name='newMessage']").value
       
       
        // Makes an object out of the user input
        const dataToSendToAPI = {
            user: userName,
            message: newMessage,
            
            
        }

        // Sends the data to the API for permanent storage
        sendMessages(dataToSendToAPI)
    }
})


//HTML form THIS IS THE NEW FORM WITH THE THREE ELEMENTS
export const messagesForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="userName">User Name</label>
            <input type="text" name="userName" class="input" />
            <button class="button" id="submitUser">Submit User</button>
        </div>
        <div class="field">
            <label class="label" for="newMessage">New Message</label>
            <input type="text" name="newMessage" class="input" />
            <button class="button" id="submitChat">Submit Chat</button>
        </div>
        
    `
    return html
}