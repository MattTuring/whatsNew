import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({news}) => {
    let newsArticles = news.map(article => {
      return <NewsArticle key={Date.now()+Math.random()} info={article} />
    })

    return (
        <main>
          {newsArticles}
        </main>
    )

}

export default NewsContainer;
