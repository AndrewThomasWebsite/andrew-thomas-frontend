import './App.css';
import ContactFormCard from './Components/ContactFormCard';
import Headshot from './Assets/Headshot.png'
import AboutIcon from './Assets/AboutIcon';
import BookIcon from './Assets/BookIcon';
import ContactIcon from './Assets/ContactIcon';


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
          Scholar in Middle East Studies and International Relations. Lecturer at Deakin University. Add more text here
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
          The book was published in 2024 with Routledge and is available in both hardcover and e-book formats.
        </p>
        <br></br>
        <div className='buy-container'>
          <a className='buy-btn' href="https://www.taylorfrancis.com/books/mono/10.4324/9781032646510/iran-west-andrew-thomas" target="_blank" rel="noopener noreferrer">
            BUY NOW
          </a>
        </div>
      </div>
      
      <div className='contact'>
        <ContactIcon />
        <ContactFormCard className='contact-form-container' />
      </div>
    </div>
  );
}

export default App;
