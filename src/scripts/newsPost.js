 import { getNews } from "./dataAccess.js"
 import { deleteNewsPost } from "./dataAccess.js"   
// Function converts request (parameter) array to HTML list items

const mainContainer = document.querySelector(".dashboard")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("news--")) {
        const [,newsId] = click.target.id.split("--")
        deleteNewsPost(parseInt(newsId))
    }
})

const convertNewsToList = (news) => {
   
    let html = `
        <div class="listParent"> 
            
                Title: ${news.news} 
                
                <br>
                Synopsis: ${news.synopsis}
                
                <br>
                URL: ${news.URL}
                <br>

                Date Posted: ${news.timestamp}
                <br>
                
                <button class="news__delete"
                    id="news--${news.id}"> 
                    Delete 
                </button>
                <br><br>
            
            
        </div>` 
           
    return html
}

export const News = () => {
    const news = getNews()
   

    let html= `
    <ul class="newRequest">
    ${
        news.map(convertNewsToList).join("")
    }  
    </ul>`
    

    return html
}


