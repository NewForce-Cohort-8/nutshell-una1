import { sendNews } from "./dataAccess.js";

// using id in html.index file to target the button
const mainContainer = document.querySelector(".dashboard")

//
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveRequest") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='newsTitle']").value
        const userSynopsis = document.querySelector("input[name='newsSynopsis'").value
        const userURL = document.querySelector("input[name='newsURL'").value

        // Get the current timestamp in milliseconds 
        const timestamp = Date.now()

        // Make an object out of the user input
        const dataToSendToAPI = {
            news: userDescription,
            synopsis: userSynopsis,
            URL: userURL,
            timestamp: timestamp // Assign the timestamp to the property
        }

        // Send the data to the API for permanent storage
        sendNews(dataToSendToAPI)
    }
})

export const NewsForm = () => {

    let html = `
        <div class="field"> 

            <label class="label" for="newsTitle">  Title </label>
            <input type="text" name="newsTitle" class="input" />

        </div>

        <div class="field">

            <label class="label" for="newsSynopsis">  Synopsis  </label>
            <input type="text" name="newsSynopsis" class="input" />

        </div>

        <div class="field">

            <label class="label" for="newsURL">  URL  </label>
            <input type="text" name="newsURL" class="input" />

        </div>


        <button class="button" id="saveRequest">  Save Request  </button>
    `
 return html
 

}



/* export const NewsForm = () => {
    const form = document.createElement('form');
    form.id = 'newsForm';
    
    // Add form fields and submit button to the form
    // ...
    
  
    // Create a button element
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'New Article';
  
    // Add an event listener to the button that toggles the visibility of the form
    toggleButton.addEventListener('click', () => {
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });
  
    // Add the button and form to the DOM
    const container = document.createElement('div');
    container.appendChild(toggleButton);
    container.appendChild(form);
  
    return container;
  } */