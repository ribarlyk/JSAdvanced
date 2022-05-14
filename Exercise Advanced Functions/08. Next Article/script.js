function getArticleGenerator(articles) {
    let contentElement = document.querySelector('#content');

    return function articleSeparator() {


        if (articles.length > 0) {
            let createArticle = document.createElement('article');

            createArticle.textContent += (articles.shift())
            contentElement.appendChild(createArticle);
        }
    }
}
