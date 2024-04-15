import React from 'react';
import Article1 from '../Assets/Article1.png' //particle cover image import
import ArticleWriter from './ArticleWriter';

export default function MediaCard4() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://theconversation.com/a-crisis-of-legitimacy-whats-at-stake-for-israel-and-the-palestinians-215341" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>A crisis of legitimacy: what’s at stake for Israel and the Palestinians?</h3>  </a>
        <p className='article-author'>Author: Thomas, Andrew
        <br></br>
        <em className=''>The Conversation, </em>12 October 2023.
        </p>
        <a className='articles' href="https://theconversation.com/a-crisis-of-legitimacy-whats-at-stake-for-israel-and-the-palestinians-215341" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={Article1} alt="Article 1" /></a>
        <ArticleWriter/>
      </div>
    </div>
  );
}
