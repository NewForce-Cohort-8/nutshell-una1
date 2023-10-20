import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { News } from "./newsPost.js"
import { Tasks } from "./tasks.js"


//////////////////////////////////////////////////////////add task import 

//////////////////////////////////////////////////////////////////////
export const Nutshell = () => {
                       LogOutButton()


  const nutshellHTML = `
  <hr>
                <button id="newArticleBtn"> New Article </button>    
                <div id="button"> ${NewsForm()}</div>
                <div id="button"> ${News()}</div>
                <hr>              
                <button id="newTaskBtn">New Task</button>  <!--- //////////////////////////////added html button -->
                                  ${Tasks()}
                                  
  <hr>

                        `
  return nutshellHTML 
  
  
}
