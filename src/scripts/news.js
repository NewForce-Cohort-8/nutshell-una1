import { getNews } from "./dataAccess.js"
import { sendNews } from "./dataAccess.js";
import {NewsForm } from "./newsForm.js";

export let News = () => {
    const news = getNews()

    let html= `
    ${NewsForm()}
    <ul>
    ${news.map(New => `<li>
    <input type="checkbox" id="news--${New.id}" class="news-checkbox">
    <label for="news--${New.id}">
        Title: ${New.news} 
         <br>
        Synopsis: ${New.synopsis}
        <br>
        URL: ${New.URL}
        <br>
        Date Posted: ${New.timestamp}
        <br>
    </label>
</li>`).join("")}
    </ul>`


    return html
}
