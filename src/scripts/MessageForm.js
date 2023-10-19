import {  sendMessages } from "./dataAccess.js";

export const MessaForm = () => { 
    let html = `
    <div class="task-form" style="display: none;">  <!-- added css styling into <div> html to hide forms -->

                    <div class="field">
                        <label class="label" for="serviceDescription">Your Task Name</label>
                        <input type="text" id="serviceDescription" name="serviceDescription" class="input" />
                    </div>
                    <div class="field">
                        <label class="label" for="serviceDate">Date needed To be Completed</label>
                        <input type="date" id="serviceDate" name="serviceDate" class="input" />
                    </div>

                    <button class="button" id="submitTask">Make New Task</button>
    </div>
        `
    return html
}
