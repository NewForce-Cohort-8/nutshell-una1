import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { News } from "../newsPost.js"
export const Nutshell = () => {

  

  // Combine the HIML of LogOutButton and Tasks
  LogOutButton()
  const nutshellHTML = `
    
  <button id="myButton"> New Article </button>
  
  <div class="myButton"> 
  ${NewsForm()}
  </div> 
<div>
${News()}
</div>

  `
  return nutshellHTML 
  
  
}
 
