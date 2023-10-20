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

export let getNews = () => {
    return applicationState.news.map(x => ({...x}))
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
            document.querySelector(".dashboard").dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteNews = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}
