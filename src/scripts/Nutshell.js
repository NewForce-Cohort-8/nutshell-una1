import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { Tasks } from "./tasks.js";

export const Nutshell = () => {
  // Combine the HIML of LogOutButton and Tasks
  LogOutButton()
  const nutshellHTML = `
    
  <button id="button"> New Article </button>    
  
  <div id="button"> 
  ${NewsForm()}
  </div> 
  <hr>
    ${Tasks()}


  `
  return nutshellHTML 
  
  
}
 
