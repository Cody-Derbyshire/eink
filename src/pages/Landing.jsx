import '../App.css';
import Header from '../components/Header';
import { motion, useScroll } from 'framer-motion';
import List from '../components/List';
import VertFade from '../functions/VertFade';
import HorFade from '../functions/HorFade';
import RevVertFade from '../functions/RevVertFade';
import { useState, useEffect } from 'react';

const me = './src/assets/images/me.jpg';
const alsome = './src/assets/images/also-me.jpg';
const stillme = './images/still-me.jpg';

function Landing() {
  const remToPixels = (rem) => {
    return rem * 16;
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > remToPixels(80));
  const [isTablet, setTablet] = useState(window.innerWidth > remToPixels(35));
  const [isMobile, setMobile] = useState(window.innerWidth < remToPixels(35));

  const updateMedia = () => {
    setDesktop(window.innerWidth >= remToPixels(80));
    setTablet(remToPixels(80) > window.innerWidth > remToPixels(35));
    setMobile(window.innerWidth < remToPixels(35));
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <>
      <div className='overlay'></div>
      <Header />

      <div className='main'>
        <div className='hero'>
          <HorFade>
            <p className='hero-text'>
              I BUILD STUNNING FRONT ENDS <br /> AND CRAFT BEAUTIFUL BRAND
              IDENTITIES
            </p>
          </HorFade>
          <HorFade>
            <h1 className='intro h1-text'>
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
          {isDesktop ? (
            <div className='dd-wrapper '>
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
                <h1 className='darr margin-left'>&darr;</h1>
              </motion.div>
              <HorFade>
                <h1 className='h1-text dd-text'>
                  DESIGNER <br />
                  <span className='icon material-symbols-outlined'>
                    emergency
                  </span>{' '}
                  DEVELOPER
                </h1>
              </HorFade>
            </div>
          ) : (
            <div className='dd-wrapper '>
              <HorFade>
                <h1 className='h1-text dd-text'>
                  DESIGNER{' '}
                  <span className='icon material-symbols-outlined'>
                    emergency
                  </span>{' '}
                  <br /> DEVELOPER
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
          )}
        </div>
      </div>

      <div className='list'>
        <List />
      </div>
    </>
  );
}

export default Landing;
