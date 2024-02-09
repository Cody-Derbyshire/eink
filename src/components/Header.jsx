import '../styles/Header.css';
import { motion, useScroll } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ page, back, hoveredClass, hoveredEl }) => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <motion.div className='prog-bar' style={{ scaleX: scrollYProgress }} />
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
    </>
  );
};

export default Header;
