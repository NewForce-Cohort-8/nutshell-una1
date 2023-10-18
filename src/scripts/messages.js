//Messages module, added by Kari Rehe to add the message feature to our group project Nutshell
import { getMessages } from "./dataAccess.js"

// Defining the function to convert message object into HTML representation. This will be passed on to the map method. Adds a delete button to the service requests.
const convertRequestToListElement = (messages) => {
    messages = getMessages()
    return `
    <li>
        ${messages.description}
        <select class="messages" id="messages">
        <option value="">New Message</option>
        ${messages.map(
        message => {
            return `<option value="message--${message.id}">${message.message}</option>`
        }
    ).join("")
        }
    </select>
        <button class="message__delete"
                id="message--${messages.id}">
            Delete
        </button>
    </li>
`
};

// Getting the messages to make a list
export const messages = () => {
    const messages = getMessages();

    // Mapping each message object to its HTML representation and joining them into a string
    const messagesHTML = messages.map(convertRequestToListElement).join("");

    // Wrapping the HTML representations with <ul> element
    let html = `
   <ul>
       ${messagesHTML}
   </ul>
`;

    return html;

};

