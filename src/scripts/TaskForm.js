import {  sendRequest } from "./dataAccess.js";
export const TaskForm = () => {
    let html = `
    <div class="field">
        
    <label class="label" for="serviceDescription">Your Task Name</label>
    <input type="text" id="serviceDescription" name="serviceDescription" class="input" />
</div>

<div class="field">
    <label class="label" for="serviceDate">Date needed To be Completed</label>
    <input type="date" id="serviceDate" name="serviceDate" class="input" />
</div>
<button class="button" id="submitRequest">Make New Task</button>
    `

    return html
}

const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            task: userDescription,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})
