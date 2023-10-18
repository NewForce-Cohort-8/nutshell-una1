//object named application state with a multiple properties (empty array)
const applicationState = {
    user: [],
    events: [],
    friends: [],
    tasks: [],
    messages: [],
    news: [],
}

//API holds the url for the database
const API = "http://localhost:8088"

//added all this crap IT COULD BE WRONG
const mainContainer = document.querySelector("#container")


// The POST method on any HTTP request means "Hey API!! I want you to create something new!" 
export const sendMessages = (userMessageRequest) => {   // defines function named sendMessages that takes a parameter called userMessageRequest. 
    const fetchOptions = {     //sets up options for the fetch function specifying the method is POST and the content is JSON.
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userMessageRequest)
    }
   

    //fetch call that dispatches the custom event after the post operation is completed.
    return fetch(`${API}/messages`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    // return fetch(`${API}/messages`, fetchOptions)
    
}


// This function is grabbing the messages data from the database and storing it in the variable fetchMessages. Go to the API, get the message stuff and set the state.

export const fetchMessages = () => {
    return fetch(`${API}/messages`) //asking for information in the messages array
        .then(response => response.json()) //then give back the response and j.son it so we can read it (turn it from a string to a javasript object)
        .then( //then we take that information and set it to state so we can reuse it.
            (messageRequests) => {
                // Store the external state in application state
                applicationState.messages = messageRequests
            }
        )
}



//copies messages information from the database and inputs it into an array so other modules can use it and convert to HTML
export const getMessages = () => {
    return applicationState.messages.map(messages => ({ ...messages }))
}


