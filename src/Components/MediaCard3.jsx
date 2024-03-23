import React from 'react';
import Article3 from '../Assets/Article3.png'
import ArticleWriter from './ArticleWriter';

export default function MediaCard3() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://theconversation.com/understanding-the-history-of-the-israeli-palestinian-conflict-in-5-charts-216165" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>Understanding the history of the Israeli-Palestinian conflict in 5 charts.</h3>  </a>
        <p className='article-author'>Authors: Garrow, Matt and Andrew Thomas
        <br></br>
        <em className=''>The Conversation, </em>25 October 2023.
        </p>
        <a className='articles' href="https://theconversation.com/understanding-the-history-of-the-israeli-palestinian-conflict-in-5-charts-216165" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={Article3} alt="Article 3" /></a>
        <ArticleWriter/>
      </div>
    </div>
  );
}
