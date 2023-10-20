
import {  sendMessages } from "./dataAccess.js";

//this returns input fields for both the user name and messages as well as a submit button for the chat
export const MessageForm = () => { 
    let html = `
    <div class="message-form" style="display: none;"> <!-- added css styling into <div> html to hide forms -->

    <div class="field">
            <label class="label" for="userName">User Name</label>
            <input type="text" id="userName"
            name= "userName" class="input" />
            </div>
     
    <div class="field">
            <label class="label" for="newMessage">New Message</label>
            <input type="text" id="newMessage" name="newMessage" class="input" />
            <button class="button" id="submitMessage">Submit Chat</button>
        </div>
       `
    return html
}

//this click event passes the user name and messages into the API for permanent storage
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
