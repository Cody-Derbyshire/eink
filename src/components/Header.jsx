import '../styles/Header.css';
import { motion, useScroll } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ page, back }) => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <motion.div className='prog-bar' style={{ scaleX: scrollYProgress }} />
        <p className='header-name'>
          <Link to={'/'}>Cody Derbyshire</Link>
        </p>
        <div className='rs-wrapper'>
          <p className='page-btn'>{page}</p>
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
