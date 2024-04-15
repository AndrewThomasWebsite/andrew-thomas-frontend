import './App.css';
import TwitterIcon from './Assets/TwitterIcon'
import ContactFormCard from './Components/ContactFormCard';
import Headshot from './Assets/Headshot.png'
import AboutIcon from './Assets/AboutIcon';
import BookIcon from './Assets/BookIcon';
import ContactIcon from './Assets/ContactIcon';
import MediaIcon from './Assets/MediaIcon';
import MediaCard1 from './Components/MediaCard1';
import MediaCard2 from './Components/MediaCard2';
import MediaCard3 from './Components/MediaCard3';
import MediaCard4 from './Components/MediaCard4';
import MediaCard5 from './Components/MediaCard5';
import MediaCard6 from './Components/MediaCard6';
import CameraIcon from './Assets/CameraIcon';


function App() {
  return (
    <div>
      <header>
      <a href="https://twitter.com/athomas_ir" target="_blank" rel="noopener noreferrer"><TwitterIcon/></a>
        
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
          <MediaCard1 />
          {/* Article 2 */}
          <MediaCard2 />
          {/* Article 3 */}
          <MediaCard3 />
          {/* Article 4 */}
          <MediaCard4 />
          {/* Article 5 */}
          <MediaCard5 />
          <CameraIcon />
          <h3>Media Appearances</h3> 
          <br></br>
          <br></br>
          <MediaCard6 />
          <em>Andrew Thomas - Iran and the West: A Non-Western Approach to Foreign Policy.</em> Iran1400: Spotlighting an Author Series, March 2024, Streamed over Zoom.
          <br></br>
          <br></br>
          <iframe className='youtube-vid' src="https://www.youtube.com/embed/8hCyEeNjI6c?si=CeQKvKWSONZ1i-H0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <br></br>
          <br></br>
          Book Launch at the Middle East Studies Forum, April 2024
          <br></br>
          <br></br>
          <iframe className='youtube-vid' src="https://www.youtube.com/embed/oU5aaYNzBuA?si=L9NHXLpc3gh2lunP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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
