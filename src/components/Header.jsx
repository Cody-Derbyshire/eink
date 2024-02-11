import '../styles/Header.css';
import { motion, useScroll } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import remToPixels from '../functions/remToPixels';
import { useState, useEffect } from 'react';

const Header = ({ page, back, hoveredClass, hoveredEl }) => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

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
      {isMobile ? (
        <div className='header'>
          <motion.div
            className={`prog-bar ${
              page === 'Projects'
                ? 'bar-sap-blue'
                : page === 'Branding'
                ? 'bar-rad-pink'
                : page === 'Furniture'
                ? 'bar-neon-green'
                : page === 'Products'
                ? 'bar-dark-yellow'
                : page === 'Contact'
                ? 'bar-dark-pink'
                : null
            }`}
            style={{ scaleX: scrollYProgress }}
          />
          <p
            className={`header-name 
            ${
              hoveredClass === 'fl-green-sap-blue' ||
              hoveredClass === 'fl-green-sap-blue-no-border' ||
              page === 'Projects'
                ? 'sap-blue-text'
                : hoveredClass === 'rad-pink-neon-green' ||
                  hoveredClass === 'rad-pink-neon-green-no-border' ||
                  hoveredEl === 'dd-text' ||
                  page === 'Branding'
                ? 'rad-pink-text'
                : hoveredClass === 'navy-blue-neon-green2' ||
                  hoveredClass === 'navy-blue-neon-green2-no-border' ||
                  hoveredEl === 'hero-text' ||
                  page === 'Furniture'
                ? 'neon-green-text'
                : hoveredClass === 'yellow-dark-yellow' ||
                  hoveredClass === 'yellow-dark-yellow-no-border' ||
                  page === 'Products'
                ? 'dark-yellow-text'
                : hoveredClass === 'pink-dark-pink' ||
                  hoveredClass === 'pink-dark-pink-no-border' ||
                  hoveredEl === 'intro' ||
                  page === 'Contact'
                ? 'dark-pink-text'
                : null
            }
            
            ${
              page === 'Projects'
                ? 'sap-blue-text'
                : page === 'Branding'
                ? 'rad-pink-text'
                : page === 'Furniture'
                ? 'neon-green-text'
                : page === 'Products'
                ? 'dark-yellow-text'
                : page === 'Contact'
                ? 'dark-pink-text'
                : null
            }`}
          >
            <Link to={'/'}>Cody Derbyshire</Link>
          </p>
          <div
            className={`rs-wrapper ${
              page === 'Projects'
                ? 'sap-blue-text'
                : page === 'Branding'
                ? 'rad-pink-text'
                : page === 'Furniture'
                ? 'neon-green-text'
                : page === 'Products'
                ? 'dark-yellow-text'
                : page === 'Contact'
                ? 'dark-pink-text'
                : null
            }`}
          >
            <p className={`page-btn `}>{page}</p>
            {back === 'y' ? (
              <a className='back-btn' onClick={() => navigate(-1)}>
                &larr; back
              </a>
            ) : null}
          </div>
        </div>
      ) : (
        <div className='header'>
          <motion.div
            className='prog-bar'
            style={{ scaleX: scrollYProgress }}
          />
          <p
            className={`header-name ${
              hoveredClass === 'fl-green-sap-blue' ||
              hoveredClass === 'fl-green-sap-blue-no-border'
                ? 'sap-blue-text'
                : hoveredClass === 'rad-pink-neon-green' ||
                  hoveredClass === 'rad-pink-neon-green-no-border' ||
                  hoveredEl === 'dd-text'
                ? 'rad-pink-text'
                : hoveredClass === 'navy-blue-neon-green2' ||
                  hoveredClass === 'navy-blue-neon-green2-no-border' ||
                  hoveredEl === 'hero-text'
                ? 'neon-green-text'
                : hoveredClass === 'yellow-dark-yellow' ||
                  hoveredClass === 'yellow-dark-yellow-no-border'
                ? 'dark-yellow-text'
                : hoveredClass === 'pink-dark-pink' ||
                  hoveredClass === 'pink-dark-pink-no-border' ||
                  hoveredEl === 'intro'
                ? 'dark-pink-text'
                : null
            }`}
          >
            <Link to={'/'}>Cody Derbyshire</Link>
          </p>
          <div
            className={`rs-wrapper ${
              hoveredClass === 'fl-green-sap-blue' ||
              hoveredClass === 'fl-green-sap-blue-no-border'
                ? 'sap-blue-text'
                : hoveredClass === 'rad-pink-neon-green' ||
                  hoveredClass === 'rad-pink-neon-green-no-border' ||
                  hoveredEl === 'dd-text'
                ? 'rad-pink-text'
                : hoveredClass === 'navy-blue-neon-green2' ||
                  hoveredClass === 'navy-blue-neon-green2-no-border' ||
                  hoveredEl === 'hero-text'
                ? 'neon-green-text'
                : hoveredClass === 'yellow-dark-yellow' ||
                  hoveredClass === 'yellow-dark-yellow-no-border'
                ? 'dark-yellow-text'
                : hoveredClass === 'pink-dark-pink' ||
                  hoveredClass === 'pink-dark-pink-no-border' ||
                  hoveredEl === 'intro'
                ? 'dark-pink-text'
                : null
            }`}
          >
            <p className={`page-btn `}>{page}</p>
            {back === 'y' ? (
              <a className='back-btn' onClick={() => navigate(-1)}>
                &larr; back
              </a>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
