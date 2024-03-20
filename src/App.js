import './App.css';
import ContactFormCard from './Components/ContactFormCard';
import Headshot from './Assets/Headshot.png'
import AboutIcon from './Assets/AboutIcon';
import BookIcon from './Assets/BookIcon';
import ContactIcon from './Assets/ContactIcon';
import MediaIcon from './Assets/MediaIcon';
import Article1 from './Assets/Article1.png'
import Article2 from './Assets/Article2.png'
import Article3 from './Assets/Article3.png'
import Article4 from './Assets/Article4.png'
import Article5 from './Assets/Article5.png'


function App() {
  return (
    <div>
      <header>
        <div 
          className='banner'>
        </div>
        <p className='andrew-thomas-text'>
          Dr Andrew Thomas
        </p>
        <h3 className='intro-text'>
          Scholar in Middle East Studies and International Relations. <br></br>Lecturer at Deakin University.
        </h3>
        <img className='headshot' src={Headshot} alt="Andrew Thomas Headshot" />
        
      </header> 
      
      <div className='about'>
        <AboutIcon />
        <h2 className='about-heading'>
          About Andrew
        </h2>
        <p> 
          Andrew is an early-career scholar and lecturer in International Relations and Middle East Studies at Deakin University, where he teaches Middle East politics and global governance.
          His research focuses on critical approaches to foreign policy in the Middle East, with a particular interest in Iranian foreign policy.
        </p>
      </div>

      <div className='publications'>
        <BookIcon />
        <h2 className='publications-heading'>
          Publications
        </h2>
        <p> 
          Andrew’s new book <em><b>Iran and the West: a non-Western approach to foreign policy</b></em> “highlights the contemporary relevance of native Iranian and non-Western perspectives to IR analysis, returning complexity and critique to Iranian studies.”
        </p>
        <br></br>
        <p>
          The book was published by Routledge in 2024 and is available in both hardcover and e-book formats.
        </p>
        <br></br>
        <div className='buy-container'>
          <a className='buy-btn' href="https://www.taylorfrancis.com/books/mono/10.4324/9781032646510/iran-west-andrew-thomas" target="_blank" rel="noopener noreferrer">
            BUY NOW
          </a>
        </div>
      </div>
      
      <div className='media'>
        <MediaIcon />
        <h2 className='media-heading'>
          Articles and Media
        </h2>
        <p> 
          Andrew has written multiple acedemic articles and has featured in various International News Bulletins. 
          <br></br>
          <br></br>
          <h3>Articles</h3>  
          <br></br>
          {/* Article 1 */}
          <a className='articles' href="https://theconversation.com/explainer-what-is-the-two-state-solution-to-the-israeli-palestinian-conflict-221872" target="_blank" rel="noopener noreferrer">Thomas, Andrew 2024, “Explainer: what is the two-state solution to the Israeli-Palestinian conflict?” <em>The Conversation,</em> 7 February 2024.</a>
          <br></br>
          <br></br>
          <a className='articles' href="https://theconversation.com/explainer-what-is-the-two-state-solution-to-the-israeli-palestinian-conflict-221872" target="_blank" rel="noopener noreferrer"><img className='articlesimg' src={Article1} alt="Article 1" /></a>
          <br></br>
          <br></br>
          {/* Article 2 */}
          <a className='articles' href="https://theconversation.com/israel-hamas-war-what-is-zionism-a-history-of-the-political-movement-that-created-israel-as-we-know-it-217788" target="_blank" rel="noopener noreferrer">Thomas, Andrew 2024, “Israel-Hamas war: What is Zionism? A history of the political movement that created Israel as we know it.” <em>The Conversation,</em> 11 December, 2024.</a>
          <br></br>
          <br></br>
          <a className='articles' href="https://theconversation.com/israel-hamas-war-what-is-zionism-a-history-of-the-political-movement-that-created-israel-as-we-know-it-217788" target="_blank" rel="noopener noreferrer"><img className='articlesimg' src={Article2} alt="Article 2" /></a>
          <br></br>
          <br></br>
          {/* Article 3 */}
          <a className='articles' href="https://theconversation.com/understanding-the-history-of-the-israeli-palestinian-conflict-in-5-charts-216165" target="_blank" rel="noopener noreferrer"><b>*Nominated for a 2024 MPC Quill Award*</b>
          <br></br>
          Garrow, Matt and Andrew Thomas, “Understanding the history of the Israeli-Palestinian conflict in 5 charts.” <em>The Conversation,</em> 25 October 2023.</a>
          <br></br>
          <br></br>
          <a className='articles' href="https://theconversation.com/understanding-the-history-of-the-israeli-palestinian-conflict-in-5-charts-216165" target="_blank" rel="noopener noreferrer"><img className='articlesimg' src={Article3} alt="Article 3" /></a>
          <br></br>
          <br></br>
          {/* Article 4 */}
          <a className='articles' href="https://theconversation.com/a-crisis-of-legitimacy-whats-at-stake-for-israel-and-the-palestinians-215341" target="_blank" rel="noopener noreferrer">Thomas, Andrew 2023, “A crisis of legitimacy: what’s at stake for Israel and the Palestinians?” <em>The Conversation,</em> 12 October 2023.</a>
          <br></br>
          <br></br>
          <a className='articles' href="https://theconversation.com/a-crisis-of-legitimacy-whats-at-stake-for-israel-and-the-palestinians-215341" target="_blank" rel="noopener noreferrer"><img className='articlesimg' src={Article4} alt="Article 4" /></a>
          <br></br>
          <br></br>
          {/* Article 5 */}
          <a className='articles' href="https://doi.org/10.1111/mepo.12030" target="_blank" rel="noopener noreferrer">Thomas, Andrew 2013, ‘"Pariah States" and sanctions: the case of Syria,’ Middle East Policy 20 no. 3, pp. 27-40.</a>
          <br></br>
          <br></br>
          <a className='articles' href="https://doi.org/10.1111/mepo.12030" target="_blank" rel="noopener noreferrer"><img className='articlesimg' src={Article5} alt="Article 5" /></a>
          <br></br>
          <br></br>
          
          <h3>Media Appearances</h3> 
          <br></br>
          
          <em>Andrew Thomas - Iran and the West: A Non-Western Approach to Foreign Policy.</em> Iran1400: Spotlighting an Author Series, March 2024, Streamed over Zoom.
          <br></br>
          <br></br>
          <iframe className='youtube-vid' src="https://www.youtube.com/embed/oU5aaYNzBuA?si=nHReFh-HkekmIBeo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <br></br>
          <br></br>
          News Bulletins:
          <br></br>
          <em>As expert on Israel-Gaza post-Oct 7th:</em>
          <br></br>
          <br></br>
          -  BBC News Singapore – 2/2024, TV appearance
          <br></br>
          - Channel News Asia – 2/2024, TV appearance
          <br></br>
          - France 24 TV News Bulletin – 10/2023, TV appearance.
          <br></br>
          - Channel 10 News First – 10/2023, TV appearance.
          <br></br>
          - France 24 TV News Bulletin – 10/2023, TV appearance.
          <br></br>
        </p>
      </div>

      <div className='contact'>
        <ContactIcon />
        <ContactFormCard className='contact-form-container' />
      </div>
    </div>
  );
}

export default App;
