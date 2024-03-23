import React from 'react';
import Article1 from '../Assets/Article1.png'; {/* Article cover image import */}
import ArticleWriter from './ArticleWriter';

export default function MediaCard6() {
  

  return (
    <div>
      <div className='media-card'>
      <a className='articles' href="input_link_here" target="_blank" rel="noopener noreferrer"><h3          className='article-heading'>Explainer: What is the two-state solution to the Israeli-Palestinian conflict?</h3>  </a>
        <p className='article-author'>Author: Thomas, Andrew
        <br></br>
        <em className=''>Article publisher,</em> 7 February 2024.
        </p>
        <a className='articles' href="input_link_here" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={{/* Article cover image import */}} alt="Article 1" /></a>
        <ArticleWriter/>
      </div>
    </div>
  );
}
