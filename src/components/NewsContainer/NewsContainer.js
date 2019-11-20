import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({news}) => {
    let newsArticles = news.map(article => {
        return <NewsArticle info={article} />
    })

    return (
        <main>
            {newsArticles}
        </main>
    )

}

export default NewsContainer;
