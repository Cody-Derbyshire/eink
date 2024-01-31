import { motion, useScroll, stagger } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import VertFade from '../functions/VertFade';

const ListItem = ({ name, number, link }) => {
  return (
    <>
      <VertFade>
        <Link to={`/${link}`} className='menu-item'>
          <h1 className='li-item'>
            <span className='menu-no'>{`0${number}`}</span> {name}
          </h1>
        </Link>
      </VertFade>
    </>
  );
};

export default ListItem;
