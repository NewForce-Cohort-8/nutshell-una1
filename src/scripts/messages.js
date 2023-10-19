import { getMessages } from "./dataAccess.js"
import { sendMessages } from "./dataAccess.js";
import { MessageForm } from "./messageForm.js"; //check this


//generates the HTML list of messages 
export let Messages = () => {    //exports function messages
    let messages = getMessages()  //calls get messages function to retrieve list of messages

    let html = 
    `
        ${MessageForm()}  <!--i added messageForm to generate HTML form for adding new messages the result is then added into the HTML string -->
            <ul>
            ${messages.map(message => `
            <li>
                <input type="checkbox" id="message--${message.id}" class="message-checkbox">
                <label for="message--${message.id}">
                    ${message.user},${message.message}
                </label>
            </li>`).join("")}
            </ul>
      `
    return html
}



