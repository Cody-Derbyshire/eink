import '../styles/Furniture.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import RevHorFade from '../functions/RevHorFade';
import '../assets/colours.css';
import useModal from '../functions/ModalUtils';
import Modal from '../components/Modal';
import remToPixels from '../functions/remToPixels';

const Furniture = () => {
  const furniture = images.furniture;

  const { modalWidths, setModalWidths, closeAllModals, handleOpenModal } =
    useModal(5);

  const [hoveredClass, setHoveredClass] = useState('');
  const hoverClass = 'navy-blue-neon-green2-no-border';
  const hoverFurnitureClass = 'navy-blue-neon-green2-no-border';

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
        page={'Furniture'}
        back={'y'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />

      {isMobile ? (
        <div className='list-vh navy-blue-bg neon-green-text'>
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[0].name}
              number={1}
              usedFor={'furniture'}
              desc={furniture[0].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              num1={'01'}
            />
          </div>
          <Modal
            src={furniture[0].src}
            alt={furniture[0].alt}
            href={furniture[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[1].name}
              number={2}
              usedFor={'furniture'}
              desc={furniture[1].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={1}
              num1={'02'}
            />
          </div>
          <Modal
            src={furniture[1].src}
            alt={furniture[1].alt}
            href={furniture[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[2].name}
              number={3}
              usedFor={'furniture'}
              desc={furniture[2].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={furniture[2].src}
            alt={furniture[2].alt}
            href={furniture[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[3].name}
              number={4}
              usedFor={'furniture'}
              desc={furniture[3].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={furniture[3].src}
            alt={furniture[3].alt}
            href={furniture[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[4].name}
              number={5}
              usedFor={'furniture'}
              desc={furniture[4].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={4}
              num1={'05'}
            />
          </div>
          <Modal
            src={furniture[4].src}
            alt={furniture[4].alt}
            href={furniture[4].src}
            modalWidth={modalWidths[4]}
            closeAllModals={closeAllModals}
          />
        </div>
      ) : (
        <div
          className={`list-vh ${
            hoveredClass === hoverFurnitureClass ? 'navy-blue-bg' : null
          }`}
        >
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[0].name}
              number={1}
              usedFor={'furniture'}
              desc={furniture[0].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              num1={'01'}
            />
          </div>
          <Modal
            src={furniture[0].src}
            alt={furniture[0].alt}
            href={furniture[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[1].name}
              number={2}
              usedFor={'furniture'}
              desc={furniture[1].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={1}
              num1={'02'}
            />
          </div>
          <Modal
            src={furniture[1].src}
            alt={furniture[1].alt}
            href={furniture[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[2].name}
              number={3}
              usedFor={'furniture'}
              desc={furniture[2].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={furniture[2].src}
            alt={furniture[2].alt}
            href={furniture[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[3].name}
              number={4}
              usedFor={'furniture'}
              desc={furniture[3].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={furniture[3].src}
            alt={furniture[3].alt}
            href={furniture[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverFurnitureClass ? hoverFurnitureClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={furniture[4].name}
              number={5}
              usedFor={'furniture'}
              desc={furniture[4].alt}
              hoverClass={hoverFurnitureClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={4}
              num1={'05'}
            />
          </div>
          <Modal
            src={furniture[4].src}
            alt={furniture[4].alt}
            href={furniture[4].src}
            modalWidth={modalWidths[4]}
            closeAllModals={closeAllModals}
          />
        </div>
      )}
    </>
  );
};

export default Furniture;
