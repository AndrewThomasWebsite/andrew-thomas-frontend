import React from 'react';
import Article5 from '../Assets/Article5.png'
import ArticleHeadshot from '../Assets/Article-headshot.png'

export default function MediaCard5() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://doi.org/10.1111/mepo.12030" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>"Pariah States" and sanctions: the case of Syria,’ Middle East Policy 20 no. 3, pp. 27-40.</h3>  </a>
        <p className='article-author'>Author: Thomas, Andrew
        <br></br>
        17 September, 2013.
        </p>
        <a className='articles' href="https://doi.org/10.1111/mepo.12030" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={Article5} alt="Article 5" /></a>
        <img className='article-headshot' src={ArticleHeadshot} alt="article-headshot" />
        
          <b className='headshot-name'>Dr Andrew Thomas</b>
          <br></br>
          <p className='headshot-title'>Lecturer in Middle East Studies, Deakin University</p>
        
      </div>
    </div>
  );
}
