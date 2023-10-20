import { LogOutButton } from "./auth/LogoutButton.js"
import { NewsForm } from "./newsForm.js"
import { News } from "./newsPost.js"
import { Tasks } from "./tasks.js"
import { Messages } from "./messages.js";

export const Nutshell = () => {
                      
  LogOutButton()

  const nutshellHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <!-- Include your CSS file -->
    <link rel="stylesheet" href="./styles/main.css">
    <!-- ... -->
</head>
<body>
    <header>
        <article class="container">
            <article class="auth">
                <!-- ... -->
            </article>
        </article>
      
    </header>
    <main>
        <section>
            <article class="dashboard">
                <!-- All your Nutshell features belong here -->
                <section class="feature">
                    <button id="newArticleBtn" class="action-button">New Article</button>
                    ${NewsForm()}
                    ${News()}
                </section>
                <section class="feature">
                    <button id="newTaskBtn" class="action-button">New Task</button>
                    ${Tasks()}
                </section>
                <section class="feature">
                    <button id="newMsgBtn" class="action-button">New Message</button>
                    ${Messages()}
                </section>
            </article>
        </section>
    </main>
    <!-- ... -->
</body>
</html>

`;

return nutshellHTML;
}
