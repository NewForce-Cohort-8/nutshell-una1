import {  sendMessages } from "./dataAccess.js";

export const MessageForm = () => { 
    let html = `
    <div class="field">
            <label class="label" for="userName">User Name</label>
            <input type="text" id="userName" class="input" />
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

//code inside this block executes when there is a click event inside the container element.
const mainContainer = document.querySelector(".dashboard") 

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitMessage") {  
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



