import React from 'react';
import Article1 from '../Assets/Article1.png'
import ArticleHeadshot from '../Assets/Article-headshot.png'

export default function MediaCard1() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://theconversation.com/explainer-what-is-the-two-state-solution-to-the-israeli-palestinian-conflict-221872" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>Explainer: What is the two-state solution to the Israeli-Palestinian conflict?</h3>  </a>
        <p className='article-author'>Author: Thomas, Andrew
        <br></br>
        <em className=''>The Conversation, </em>7 February 2024.
        </p>
        <a className='articles' href="https://theconversation.com/explainer-what-is-the-two-state-solution-to-the-israeli-palestinian-conflict-221872" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={Article1} alt="Article 1" /></a>
        <img className='article-headshot' src={ArticleHeadshot} alt="article-headshot" />
        
          <b className='headshot-name'>Dr Andrew Thomas</b>
          <br></br>
          <p className='headshot-title'>Lecturer in Middle East Studies, Deakin University</p>
        
      </div>
    </div>
  );
}
