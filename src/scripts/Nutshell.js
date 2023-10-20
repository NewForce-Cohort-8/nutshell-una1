import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { News } from "./newsPost.js"
import { Tasks } from "./tasks.js"


export const Nutshell = () => {
                      
  LogOutButton()

  const nutshellHTML = `
  <hr>
                <section class ="news__feature">

                            <button id="newArticleBtn"> New Article </button>    
                                                ${NewsForm()}
                                                ${News()}
                </section>

<hr>
                <section class= "task__feature">

                              <button id="newTaskBtn">New Task</button> 
                                                ${Tasks()}
                </section
                
                <section class= "message__feature">

                              <button id="newTaskBtn">New Message</button>                                             
              </section

                        `
                        
  return nutshellHTML 
  
  
}
