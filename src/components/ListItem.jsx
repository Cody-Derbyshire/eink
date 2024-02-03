import { motion, useScroll, stagger } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import VertFade from '../functions/VertFade';
import HorFade from '../functions/HorFade';

const ListItem = ({
  name,
  number,
  link,
  usedFor,
  extLink,
  desc,
  num1,
  num2,
}) => {
  return (
    <>
      <HorFade>
        {usedFor === 'landing' ? (
          <Link to={`/${link}`} className='menu-item'>
            <h1 className='li-item'>
              <div>
                <span className='menu-no'>{`0${number}`}</span> {name}
              </div>
            </h1>
          </Link>
        ) : usedFor === 'projects' ? (
          <>
            <a
              href={extLink}
              target='_blank'
              rel='noreferrer'
              className='menu-item'
            >
              <h1 className='li-item smaller-h1'>
                <div>
                  <span className='menu-no'>{`0${number}`}</span> {name}
                  <span className='icon smaller-h1 material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </h1>
            </a>
            <p className='list-desc'>{desc}</p>
          </>
        ) : usedFor === 'branding' ? (
          <>
            <div className='menu-item'>
              <h1 className='li-item-nohvr smaller-h1'>
                <div>
                  <span className='menu-no'>{`0${number}`}</span> {name}
                </div>
                {/* <div className='num-wrapper'>
                  <h1 className='smaller-h1 num-link'>{num1}</h1>
                  {num2 ? (
                    <h1 className='smaller-h1 num-link'>{num2}</h1>
                  ) : null}
                </div> */}
              </h1>
            </div>
            <p className='list-desc'>{desc}</p>
          </>
        ) : null}
      </HorFade>
    </>
  );
};

export default ListItem;
