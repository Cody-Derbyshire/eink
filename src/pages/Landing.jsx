import '../App.css';
import Header from '../components/Header';
import { motion, useScroll } from 'framer-motion';
import List from '../components/List';
import VertFade from '../functions/VertFade';
import HorFade from '../functions/HorFade';
import RevVertFade from '../functions/RevVertFade';

const me = './src/assets/images/me.jpg';
const alsome = './src/assets/images/also-me.jpg';
const stillme = './src/assets/images/still-me.jpg';

function Landing() {
  return (
    <>
      <div className='overlay'></div>
      <Header />

      <div className='main'>
        <div className='hero'>
          <HorFade>
            <p className='hero-text'>
              I BUILD STUNNING FRONT ENDS <br /> AND BEAUTIFUL BRAND IDENTITIES
            </p>
          </HorFade>
          <HorFade>
            <h1 className='intro'>
              CODY <br /> &rarr; DERBYSHIRE
            </h1>
          </HorFade>
          <VertFade>
            <img
              className='hero-img'
              src={stillme}
              alt='cody derbyshire hero image'
            />
          </VertFade>
          <div className='dd-wrapper'>
            <HorFade>
              <h1 className=''>
                DESIGNER{' '}
                <span className='icon material-symbols-outlined'>
                  emergency
                </span>{' '}
                DEVELOPER.
              </h1>
            </HorFade>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -100 },
              }}
            >
              <h1 className='darr'>&darr;</h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='list'>
        <List />
      </div>
    </>
  );
}

export default Landing;
