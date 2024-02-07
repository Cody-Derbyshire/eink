import { motion, useScroll, stagger } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import VertFade from '../functions/VertFade';
import HorFade from '../functions/HorFade';
import { useState } from 'react';
import '../assets/colours.css';

const ListItem = ({
  name,
  number,
  link,
  usedFor,
  extLink,
  desc,
  hoverClass,
  hoveredClass,
  setHoveredClass,
}) => {
  return (
    <>
      <HorFade>
        {usedFor === 'landing' ? (
          <Link
            to={`/${link}`}
            className={`menu-item`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <h1 className={`li-item ${hoveredClass}`}>
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
              onMouseEnter={() => {
                setHoveredClass(hoverClass);
              }}
              onMouseLeave={() => {
                setHoveredClass('');
              }}
            >
              <h1 className={`li-item smaller-h1 ${hoveredClass}`}>
                <div>
                  <span className='menu-no'>{`0${number}`}</span> {name}
                  <span className='icon smaller-h1 material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </h1>
            </a>
            <p className={`list-desc ${hoveredClass}`}>{desc}</p>
          </>
        ) : usedFor === 'branding' ? (
          <>
            <div className='menu-item'>
              <h1 className='li-item-nohvr smaller-h1'>
                <div>
                  <span className='menu-no'>{`0${number}`}</span> {name}
                </div>
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
