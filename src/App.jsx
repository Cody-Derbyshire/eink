import './App.css';
import Header from './components/Header';
import { motion, useScroll } from 'framer-motion';
import List from './components/List';

const me = './src/assets/images/me.jpg';
const alsome = './src/assets/images/also-me.jpg';
const stillme = './src/assets/images/still-me.jpg';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className='overlay'></div>
      <Header />
      <motion.div className='prog-bar' style={{ scaleX: scrollYProgress }} />
      <div className='main'>
        <div className='hero'>
          <p className='hero-text'>
            I BUILD STUNNING FRONT ENDS <br /> AND BEAUTIFUL BRAND IDENTITIES
          </p>
          <h1 className='intro'>
            CODY <br /> &rarr; DERBYSHIRE
          </h1>
          <img
            className='hero-img'
            src={stillme}
            alt='cody derbyshire hero image'
          />
          <div className='dd-wrapper'>
            <h1 className=''>
              DESIGNER{' '}
              <span className='icon material-symbols-outlined'>emergency</span>{' '}
              DEVELOPER.
            </h1>
            <h1 className='darr'>&darr;</h1>
          </div>
        </div>
      </div>
      <motion.div
        className='list'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <List />
      </motion.div>
    </>
  );
}

export default App;
