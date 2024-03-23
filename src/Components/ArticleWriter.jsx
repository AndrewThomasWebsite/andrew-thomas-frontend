import React from 'react';
import ArticleHeadshot from '../Assets/Article-headshot.png'

export default function ArticleWriter() {
  

  return (
    <div className='media-card-container'>
        <img className='article-headshot' src={ArticleHeadshot} alt="article-headshot" />
          <a href="https://theconversation.com/profiles/andrew-thomas-710801" target="_blank" rel="noopener noreferrer"><b className='headshot-name'>Dr Andrew Thomas</b></a>
          <br></br>
          <p className='headshot-title'>Lecturer in Middle East Studies, Deakin University</p>
      </div>
  );
}
