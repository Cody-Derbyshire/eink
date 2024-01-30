import './App.css';
import Header from './components/Header';

const me = './src/assets/images/me.jpg';
const alsome = './src/assets/images/also-me.jpg';
const stillme = './src/assets/images/still-me.jpg';

function App() {
  return (
    <>
      <div className='overlay'></div>
      <Header />
      <div className='main'>
        <div className='hero'>
          <p className='hero-text'>
            WEB DEVELOPER <br />+ DIGITAL DESIGNER
          </p>
          <h1 className='intro'>
            CODY <br /> DERBYSHIRE
          </h1>
          <img
            className='hero-img'
            src={stillme}
            alt='cody derbyshire hero image'
          />
          <h1 className=''>DESIGNER + DEVELOPER.</h1>
        </div>
      </div>
    </>
  );
}

export default App;
