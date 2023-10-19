import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { Tasks } from "./tasks.js";//add task

export const Nutshell = () => {
                       LogOutButton()


  const nutshellHTML = `
                <button id="button"> New Article </button>    
                <div id="button"> ${NewsForm()}</div>
                <hr>              
                <button id="newTaskBtn">New Task</button>
                                  ${Tasks()}
                                  
                <hr>

                        `
  return nutshellHTML 
  
  
}
 
