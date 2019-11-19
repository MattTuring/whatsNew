import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

function NewsContainer(news) {
  
    let newsArticles = news.news.map(article => {
        return <NewsArticle info={article} />
    })

    return (
        <main>
            {newsArticles}
        </main>
    )

}

export default NewsContainer;