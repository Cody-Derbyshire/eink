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

  const [hoveredClass, setHoveredClass] = useState('');
  const [hoveredEl, setHoveredEl] = useState('');

  return (
    <>
      <div className='overlay'></div>
      <Header
        hoveredClass={hoveredClass}
        hoveredEl={hoveredEl}
        setHoveredClass={setHoveredClass}
        setHoveredEl={setHoveredEl}
      />

      <div
        className={`main 
        ${
          hoveredClass === `fl-green-sap-blue`
            ? 'fl-green-bg'
            : hoveredClass === 'rad-pink-neon-green' || hoveredEl === 'dd-text'
            ? 'neon-green-bg'
            : hoveredClass === 'navy-blue-neon-green2' ||
              hoveredEl === 'hero-text'
            ? 'navy-blue-bg'
            : hoveredClass === 'bbc-green-neon-blue'
            ? 'dark-bluegreen-bg'
            : hoveredClass === 'yellow-dark-yellow'
            ? 'yellow-bg'
            : hoveredClass === 'pink-dark-pink' || hoveredEl === 'intro'
            ? 'neon-pink-bg'
            : null
        }`}
      >
        <div className='hero'>
          <HorFade>
            <p
              className={`hero-text ${
                hoveredClass === `fl-green-sap-blue`
                  ? 'sap-blue-text'
                  : hoveredClass === 'rad-pink-neon-green' ||
                    hoveredEl === 'dd-text'
                  ? 'rad-pink-text'
                  : hoveredClass === 'navy-blue-neon-green2' ||
                    hoveredEl === 'hero-text'
                  ? 'neon-green-text'
                  : hoveredClass === 'yellow-dark-yellow'
                  ? 'dark-yellow-text'
                  : hoveredClass === 'pink-dark-pink' || hoveredEl === 'intro'
                  ? 'dark-pink-text'
                  : null
              }`}
              onMouseEnter={() => {
                setHoveredEl('hero-text');
              }}
              onMouseLeave={() => {
                setHoveredEl('');
              }}
            >
              I BUILD STUNNING FRONT ENDS <br /> AND CRAFT BEAUTIFUL BRAND
              IDENTITIES
            </p>
          </HorFade>
          <HorFade>
            <h1
              className={`intro h1-text ${
                hoveredClass === `fl-green-sap-blue`
                  ? 'sap-blue-text'
                  : hoveredClass === 'rad-pink-neon-green' ||
                    hoveredEl === 'dd-text'
                  ? 'rad-pink-text'
                  : hoveredClass === 'navy-blue-neon-green2' ||
                    hoveredEl === 'hero-text'
                  ? 'neon-green-text'
                  : hoveredClass === 'yellow-dark-yellow'
                  ? 'dark-yellow-text'
                  : hoveredClass === 'pink-dark-pink' || hoveredEl === 'intro'
                  ? 'dark-pink-text'
                  : null
              }`}
              onMouseEnter={() => {
                setHoveredEl('intro');
              }}
              onMouseLeave={() => {
                setHoveredEl('');
              }}
            >
              CODY <br /> &rarr; DERBYSHIRE
            </h1>
          </HorFade>
          <VertFade>
            <div className='flex-end'>
              <img
                className={`hero-img`}
                src={stillme}
                alt='cody derbyshire hero image'
              />
            </div>
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
                <h1
                  className={`darr margin-left ${
                    hoveredClass === `fl-green-sap-blue`
                      ? 'sap-blue-text'
                      : hoveredClass === 'rad-pink-neon-green' ||
                        hoveredEl === 'dd-text'
                      ? 'rad-pink-text'
                      : hoveredClass === 'navy-blue-neon-green2' ||
                        hoveredEl === 'hero-text'
                      ? 'neon-green-text'
                      : hoveredClass === 'yellow-dark-yellow'
                      ? 'dark-yellow-text'
                      : hoveredClass === 'pink-dark-pink' ||
                        hoveredEl === 'intro'
                      ? 'dark-pink-text'
                      : null
                  }`}
                >
                  &darr;
                </h1>
              </motion.div>
              <HorFade>
                <h1
                  className={`h1-text dd-text ${
                    hoveredClass === `fl-green-sap-blue`
                      ? 'sap-blue-text'
                      : hoveredClass === 'rad-pink-neon-green' ||
                        hoveredEl === 'dd-text'
                      ? 'rad-pink-text'
                      : hoveredClass === 'navy-blue-neon-green2' ||
                        hoveredEl === 'hero-text'
                      ? 'neon-green-text'
                      : hoveredClass === 'yellow-dark-yellow'
                      ? 'dark-yellow-text'
                      : hoveredClass === 'pink-dark-pink' ||
                        hoveredEl === 'intro'
                      ? 'dark-pink-text'
                      : null
                  }`}
                  onMouseEnter={() => {
                    setHoveredEl('dd-text');
                  }}
                  onMouseLeave={() => {
                    setHoveredEl('');
                  }}
                >
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
                <h1
                  className={`h1-text dd-text ${
                    hoveredClass === `fl-green-sap-blue`
                      ? 'sap-blue-text'
                      : hoveredClass === 'rad-pink-neon-green' ||
                        hoveredEl === 'dd-text'
                      ? 'rad-pink-text'
                      : hoveredClass === 'navy-blue-neon-green2' ||
                        hoveredEl === 'hero-text'
                      ? 'neon-green-text'
                      : hoveredClass === 'yellow-dark-yellow'
                      ? 'dark-yellow-text'
                      : hoveredClass === 'pink-dark-pink' ||
                        hoveredEl === 'intro'
                      ? 'dark-pink-text'
                      : null
                  }`}
                  onMouseEnter={() => {
                    setHoveredEl('dd-text');
                  }}
                  onMouseLeave={() => {
                    setHoveredEl('');
                  }}
                >
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
                <h1
                  className={`darr ${
                    hoveredClass === `fl-green-sap-blue`
                      ? 'sap-blue-text'
                      : hoveredClass === 'rad-pink-neon-green' ||
                        hoveredEl === 'dd-text'
                      ? 'rad-pink-text'
                      : hoveredClass === 'navy-blue-neon-green2' ||
                        hoveredEl === 'hero-text'
                      ? 'neon-green-text'
                      : hoveredClass === 'yellow-dark-yellow'
                      ? 'dark-yellow-text'
                      : hoveredClass === 'pink-dark-pink' ||
                        hoveredEl === 'intro'
                      ? 'dark-pink-text'
                      : null
                  }`}
                >
                  <a href='#list-landing'>&darr;</a>
                </h1>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      <div
        id='list-landing'
        className={`list-vh 
        ${
          hoveredClass === `fl-green-sap-blue`
            ? 'fl-green-bg'
            : hoveredClass === 'rad-pink-neon-green' || hoveredEl === 'dd-text'
            ? 'neon-green-bg'
            : hoveredClass === 'navy-blue-neon-green2' ||
              hoveredEl === 'hero-text'
            ? 'navy-blue-bg'
            : hoveredClass === 'bbc-green-neon-blue'
            ? 'dark-bluegreen-bg'
            : hoveredClass === 'yellow-dark-yellow'
            ? 'yellow-bg'
            : hoveredClass === 'pink-dark-pink' || hoveredEl === 'intro'
            ? 'neon-pink-bg'
            : null
        }`}
      >
        <List hoveredClass={hoveredClass} setHoveredClass={setHoveredClass} />
      </div>
    </>
  );
}

export default Landing;
