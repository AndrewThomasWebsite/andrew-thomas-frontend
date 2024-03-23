import React from 'react';
import Article2 from '../Assets/Article2.png'
import ArticleWriter from './ArticleWriter';

export default function MediaCard2() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://theconversation.com/israel-hamas-war-what-is-zionism-a-history-of-the-political-movement-that-created-israel-as-we-know-it-217788" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>Israel-Hamas war: What is Zionism? A history of the political movement that created Israel as we know it.</h3></a>
        <p className='article-author'>Author: Thomas, Andrew
        <br></br>
        <em className=''>The Conversation, </em>11 December, 2023.
        </p>
        <a className='articles' href="https://theconversation.com/israel-hamas-war-what-is-zionism-a-history-of-the-political-movement-that-created-israel-as-we-know-it-217788"><img className='articlesimgs' src={Article2} alt="Article 2" /></a>
        <ArticleWriter/>
      </div>
    </div>
  );
}
