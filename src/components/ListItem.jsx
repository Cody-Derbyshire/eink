import { motion, useScroll, stagger } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import VertFade from '../functions/VertFade';
import HorFade from '../functions/HorFade';
import { useState } from 'react';
import '../assets/colours.css';
import NumWrapper from './NumWrapper';
import useModal from '../functions/ModalUtils';

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
  handleOpenModal,
  modalNum1,
  modalNum2,
  num1,
  num2,
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
            <h1 className={`li-item-landing ${hoveredClass}`}>
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
        ) : usedFor === 'contact' ? (
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
            <p className={`list-desc border-bottom-none ${hoveredClass}`}>
              {desc}
            </p>
          </>
        ) : usedFor === 'branding' ? (
          <>
            <div
              className={`menu-item-row ${
                hoveredClass === 'rad-pink-neon-green-no-border'
                  ? 'no-borders-pink'
                  : null
              }`}
            >
              <h1 className='li-item-nohvr smaller-h1 '>
                <span className='menu-no'>{`0${number}`}</span> {name}
              </h1>
              <NumWrapper
                handleOpenModal={handleOpenModal}
                modalNum1={modalNum1}
                modalNum2={modalNum2}
                num1={num1}
                num2={num2}
              />
            </div>
            <p className='list-desc'>{desc}</p>
          </>
        ) : usedFor === 'furniture' ? (
          <>
            <div
              className={`menu-item-row ${
                hoveredClass === 'navy-blue-neon-green2-no-border'
                  ? 'no-borders-neon-green2'
                  : null
              }`}
            >
              <h1 className='li-item-nohvr smaller-h1 '>
                <span className='menu-no'>{`0${number}`}</span> {name}
              </h1>
              <NumWrapper
                handleOpenModal={handleOpenModal}
                modalNum1={modalNum1}
                modalNum2={modalNum2}
                num1={num1}
                num2={num2}
              />
            </div>
            <p className='list-desc'>{desc}</p>
          </>
        ) : usedFor === 'products' ? (
          <>
            <div
              className={`menu-item-row ${
                hoveredClass === 'yellow-dark-yellow-no-border'
                  ? 'no-borders-dark-yellow'
                  : null
              }`}
            >
              <h1 className='li-item-nohvr smaller-h1 '>
                <span className='menu-no'>{`0${number}`}</span> {name}
              </h1>
              <NumWrapper
                handleOpenModal={handleOpenModal}
                modalNum1={modalNum1}
                modalNum2={modalNum2}
                num1={num1}
                num2={num2}
              />
            </div>
            <p className='list-desc'>{desc}</p>
          </>
        ) : null}
      </HorFade>
    </>
  );
};

export default ListItem;
