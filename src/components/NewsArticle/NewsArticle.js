import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
    return (
    <article className='news'>
            <img alt='' src={props.info.img}/>
            <h1>{props.info.headline}</h1>
            <p>{props.info.description}</p>
            <footer>
                <p>
                    <a href={props.info.url}>LINK</a>
                </p>
            </footer>
        </article>
    )
}

export default NewsArticle;
