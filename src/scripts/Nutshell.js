import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
//////////////////////////////////////////////////////////add task import 
import { Tasks } from "./tasks.js";
//////////////////////////////////////////////////////////////////////
import { Messages } from "./messages.js";

//creates the new message button and calls the messages function to return the HTML content in the messages.js module which generates the list of messages
export const Nutshell = () => {
                       LogOutButton()


  const nutshellHTML = `
  <hr>
                <button id="button"> New Article </button>    
                <div id="button"> ${NewsForm()}</div>
                <hr>              
                <button id="newTaskBtn">New Task</button>  <!--- //////////////////////////////added html button -->
                                  // ${Tasks()}
                                  <button id="newMsgBtn">New Message</button> 
                                  ${Messages()}
                                  
  <hr>

                        `
  return nutshellHTML 
  
  
}
 
