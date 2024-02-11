import '../styles/Contact.css';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import VertFade from '../functions/VertFade';
import { useState, useEffect } from 'react';
import remToPixels from '../functions/remToPixels';

const meagain = './images/me-again.jpg';
const cdcv = './CD-CV-2024.pdf';

const Contact = () => {
  const [hoveredClass, setHoveredClass] = useState('');
  const hoveredContactClass = 'pink-dark-pink-no-border';

  const CVDownload = () => {
    return (
      <a href={cdcv} className='download' download='CodyDerbyshire_CV'>
        download
      </a>
    );
  };

  const [isMobile, setMobile] = useState(window.innerWidth <= remToPixels(35));

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= remToPixels(35));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='overlay'></div>
      <Header
        page={'Contact'}
        back={'y'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />
      {isMobile ? (
        <div className='list-vh neon-pink-bg dark-pink-text'>
          <VertFade>
            <div className='img-wrapper'>
              <img className='me-img' src={meagain} alt='' />
            </div>
          </VertFade>
          <ListItem
            name={'call me'}
            number={1}
            extLink={'tel:+64220725530'}
            usedFor={'contact'}
            desc={'+64 22 072 5530'}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'email me'}
            number={2}
            extLink={'mailto:derbyshire@outlook.co.nz'}
            usedFor={'contact'}
            desc={'derbyshire@outlook.co.nz'}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'resume'}
            number={3}
            extLink={'https://codyderbyshire-cv.onrender.com/'}
            usedFor={'contact'}
            desc={<CVDownload />}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'github'}
            number={4}
            extLink={'https://github.com/Cody-Derbyshire'}
            usedFor={'contact'}
            desc={''}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
        </div>
      ) : (
        <div
          className={`list-vh ${
            hoveredClass === hoveredContactClass ? 'neon-pink-bg' : null
          }`}
        >
          <VertFade>
            <div className='img-wrapper'>
              <img className='me-img' src={meagain} alt='' />
            </div>
          </VertFade>
          <ListItem
            name={'call me'}
            number={1}
            extLink={'tel:+64220725530'}
            usedFor={'contact'}
            desc={'+64 22 072 5530'}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'email me'}
            number={2}
            extLink={'mailto:derbyshire@outlook.co.nz'}
            usedFor={'contact'}
            desc={'derbyshire@outlook.co.nz'}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'resume'}
            number={3}
            extLink={'https://codyderbyshire-cv.onrender.com/'}
            usedFor={'contact'}
            desc={<CVDownload />}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
          <ListItem
            name={'github'}
            number={4}
            extLink={'https://github.com/Cody-Derbyshire'}
            usedFor={'contact'}
            desc={''}
            hoverClass={hoveredContactClass}
            hoveredClass={hoveredClass}
            setHoveredClass={setHoveredClass}
          />
        </div>
      )}
    </>
  );
};

export default Contact;
