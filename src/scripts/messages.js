import { getMessages } from "./dataAccess.js";
import { MessageForm } from "./messageForm.js";

export let Messages = () => {
  let messages = getMessages();

  let html = `
   
    <div id="chat-container">
        <ul>
            ${messages
              .map(
                (message) => `
                  <li>
                      <input type="checkbox" id="message--${message.id}" class="message-checkbox">
                      <label for="message--${message.id}">
                          ${message.user}, ${message.message}
                      </label>
                      <button class="like-button" data-message-id="${message.id}">👍</button>
                      <span class="like-count" id="like-count-${message.id}">0</span>
                      <button class="dislike-button" data-message-id="${message.id}">👎</button>
                      <span class="dislike-count" id="dislike-count-${message.id}">0</span>
                  </li>`
              )
              .join("")}
        </ul>
    </div>
    ${MessageForm()}  
  `;

  // Scroll to the bottom of the chat container
  setTimeout(() => {
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 0);

  // Event listeners for like and dislike buttons
  document.querySelectorAll(".like-button").forEach((button) => {
    // alert("before like button clicked!")
    button.addEventListener("click", () => {
        // alert("like button clicked!")
      const messageId = button.getAttribute("data-message-id");
      const likeCount = document.getElementById(`like-count-${messageId}`);
      likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
  });

  document.querySelectorAll(".dislike-button").forEach((button) => {
    // alert("before dislike button clicked!")
    button.addEventListener("click", () => {
        // alert("dislikebutton clicked!")
      const messageId = button.getAttribute("data-message-id");
      const dislikeCount = document.getElementById(`dislike-count-${messageId}`);
      dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
    });
  });

  return html;
};































//before like and dislike was added
// import { getMessages } from "./dataAccess.js";
// import { MessageForm } from "./messageForm.js"; // check this

// // generates the HTML list of messages when you enter user and new message
// export let Messages = () => {
//   let messages = getMessages(); // calls get messages function to retrieve list of messages

//   let html = `
//     ${MessageForm()}  
//     <div id="chat-container">
//         <ul>
//             ${messages
//               .map(
//                 (message) => `
//                   <li>
//                       <input type="checkbox" id="message--${message.id}" class="message-checkbox">
//                       <label for="message--${message.id}">
//                           ${message.user}, ${message.message}
//                       </label>
//                   </li>`
//               )
//               .join("")}
//         </ul>
//     </div>
//   `;

//   // Scroll to the bottom of the chat container
//   setTimeout(() => {
//     let chatContainer = document.getElementById("chat-container");
//     chatContainer.scrollTop = chatContainer.scrollHeight;
//   }, 0);

//   return html;
// };










