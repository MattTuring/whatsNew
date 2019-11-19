import React from 'react';
import './NewsArticle.css';

NewsArticle(props) {
 <article>
 <h1>{props.headline}</h1>
 <img src={props.img}/>
 <p></p>
 </article>
}

export default NewsArticle;
