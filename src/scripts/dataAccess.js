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

/* // Function initiate the fetch request to delete a request must have primary key sent to it as and argument

export const deleteNewsPost = (id) => {
    return fetch(`${API}/news/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
} */