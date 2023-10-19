import { getMessages } from "./dataAccess.js"
import { sendMessages } from "./dataAccess.js";
import { MessageForm } from "./messageForm.js"; //check this

export let Messages = () => {
    let messages = getMessages()

    let html = 
    `
        ${MessageForm()}  <!--i added messageForm -->
            <ul>
            ${messages.map(message => `
            <li>
                <input type="checkbox" id="message--${message.id}" class="message-checkbox">
                <label for="message--${message.id}">
                    ${message.message}
                </label>
            </li>`).join("")}
            </ul>
      `
    return html
}

