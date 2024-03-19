import './App.css';
import ContactFormCard from './Components/ContactFormCard';
import Headshot from './Assets/Headshot.png'


function App() {
  return (
    <div>
      <header>
        <div className='banner'></div>
        <p className='andrew-thomas-text'>Dr Andrew Thomas</p>
       <h3 className='intro-text'>Scholar in Middle East Studies and International Relations. Lecturer at Deakin University. Add more text here</h3>
          <img className='headshot' src={Headshot} alt="Andrew Thomas Headshot" />
        
      </header> 
      <ContactFormCard />
    </div>
  );
}

export default App;
