import React from 'react';
import Article6 from '../Assets/Article6.png'
import ArticleHeadshot from '../Assets/Article-headshot.png'

export default function MediaCard6() {
  

  return (
    <div className='media-card-container'>
      <div className='media-card'>
      <a className='articles' href="https://www.abc.net.au/triplej/programs/hack/hack/103671570" target="_blank" rel="noopener noreferrer"><h3 className='article-heading'>Interview on Triple J Hack following Penny Wong's public support for a Palestinian State</h3>  </a>
        <a className='articles' href="https://www.abc.net.au/triplej/programs/hack/hack/103671570" target="_blank" rel="noopener noreferrer"><img className='articlesimgs' src={Article6} alt="Article 6" /></a>
        <div className='media-card-container'>
        <img className='article-headshot' src={ArticleHeadshot} alt="article-headshot" />
          <a href="https://theconversation.com/profiles/andrew-thomas-710801" target="_blank" rel="noopener noreferrer"><b className='headshot-name'>Dr Andrew Thomas</b></a>
          <br></br>
          <p className='headshot-title'>Guest on Triple J - Hack</p>
      </div>
      </div>
    </div>
  );
}
