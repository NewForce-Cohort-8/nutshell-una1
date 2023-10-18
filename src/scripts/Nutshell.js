import { LogOutButton } from "./auth/LogoutButton.js"
import { messages } from "./messages.js"
import { messagesForm } from "./messageForm.js"

//const Nutshell returns a template string containing HTML markup for the LogOutButton and Messages.
export const Nutshell = () => {

  LogOutButton()
  const nutshellHTML = `
    <div>
      ${messagesForm()}
      ${messages()} 
      


    </div>
  `
  return nutshellHTML
}