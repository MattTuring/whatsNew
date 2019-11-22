import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ({news}) => {
    let newsArticles = news.map(article => {
      return <NewsArticle key={Date.now() + Math.floor(Math.random() * (10000000 - 0 + 1)) + 0} info={article} />
    })

    return (
        <main>
          {newsArticles}
        </main>
    )

}

export default NewsContainer;
