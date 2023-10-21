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

        // Get the current timestamp in milliseconds and convert to a string
        const timestamp = Date.now()
        const date = new Date(timestamp)
        const formattedDate = date.toLocaleDateString('en-US')

        // Make an object out of the user input
        const dataToSendToAPI = {
            news: userDescription,
            synopsis: userSynopsis,
            URL: userURL,
            timestamp: formattedDate// Assign the timestamp to the property
        }

        // Send the data to the API for permanent storage
        sendNews(dataToSendToAPI)
    }
})

export const NewsForm = () => {

    let html = `
        <div class="news-form" style="display: none;">  <!-- added css styling into <div> html to hide forms -->
        
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
            
        </div>
    `
 return html
 

}
