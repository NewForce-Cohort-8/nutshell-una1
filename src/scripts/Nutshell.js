import { LogOutButton } from "./auth/LogoutButton.js"
import { News } from "./news.js";
//////////////////////////////////////////////////////////add task import 
import { Tasks } from "./tasks.js";
//////////////////////////////////////////////////////////////////////

export const Nutshell = () => {
                       LogOutButton()


  const nutshellHTML = `
  <hr>         
                <button id="newTaskBtn">New Task</button>  <!--- //////////////////////////////added html button -->
                                  ${Tasks()}
                                  
  <hr>
                <button id="newNewsBtn">New News</button>
                                    ${News()}

                        `
  return nutshellHTML 
  
  
}
 
