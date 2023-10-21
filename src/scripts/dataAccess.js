const applicationState = {
    user: [],
    events: [],
    friends: [],
    tasks: [],
    messages: [],
    news: [],
}

const API = "http://localhost:8088"

const mainContainer = document.querySelector(".dashboard")

export const getNews = () => {
    return applicationState.news.map(news => ({...news}))
}
export let getMessages= () => {
    // alert('getting messages from application state')
    return applicationState.messages.map(x => ({...x}))
    // alert('received messages from application state')
    
}

export const fetchNews = () => {
    return fetch(`${API}/news`)
        .then(response => response.json())
        .then(
            (news) => {
                applicationState.news = news
            }
        )
}

export const sendNews = (userNews) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userNews)
    }
    return fetch(`${API}/news`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// Function initiate the fetch request to delete a news post must have primary key sent to it as and argument

export const deleteNewsPost = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
} 


//////// /////////////////////////////////////////////////////////////////////////////////start of tasks
export const fetchTask = () => {
    return fetch(`${API}/tasks`)
        .then(response => response.json())
        .then(
            (task) => {
                // Store the external state in application state
                applicationState.tasks = task
            }
        )
}



export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/tasks`, fetchOptions)
        .then(task => task.json())
        .then(() => {
            document.querySelector(".dashboard").dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/tasks/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export let getTask= () => {
    return applicationState.tasks.map(x => ({...x}))
}
////////////////////////////////////////////////////////////////////////////////////////////End of taks

export const fetchMessage = () => {
    return fetch(`${API}/messages`)
        .then(response => response.json())
        .then(
            (messages) => {
                // Store the external state in application state
                applicationState.messages = messages
            }
        )
}

//sends the post request to API messages, letting other parts of the application know that the status has changed
export const sendMessages = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/messages`, fetchOptions)
    .then(message => message.json())
    .then(() => {
        document.querySelector(".dashboard").dispatchEvent(new CustomEvent("stateChanged"))
    })
}

//function that sends a delete request to the API to let other parts of the application know the status has changed 
export const deleteMessage = (id) => {
    return fetch(`${API}/messages/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                // window.location.reload();
            }
        )
}



//exports get messages and returns a new array containing the new information
