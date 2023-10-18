import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"

export const Nutshell = () => {
  // Combine the HIML of LogOutButton and Tasks
  LogOutButton()
  const nutshellHTML = `
    
  <button id="button"> New Article </button>    
  
  <div id="button"> 
  ${NewsForm()}
  </div> 
    


  `
  return nutshellHTML 
  
  
}
 
