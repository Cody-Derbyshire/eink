import '../styles/Products.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import RevHorFade from '../functions/RevHorFade';
import Modal from '../components/Modal';
import '../assets/colours.css';
import useModal from '../functions/ModalUtils';
import remToPixels from '../functions/remToPixels';
import '../styles/hover.css';

const Products = () => {
  const products = images.products;

  const { modalWidths, setModalWidths, closeAllModals, handleOpenModal } =
    useModal(4);

  const [hoveredClass, setHoveredClass] = useState('');
  const hoverClass = 'yellow-dark-yellow-no-border';
  const hoverProductClass = 'yellow-dark-yellow-no-border';

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
        page={'Products'}
        back={'y'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />

      {isMobile ? (
        <div className='list-vh yellow-bg dark-yellow-text'>
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass ? `${hoverProductClass} ` : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[0].name}
              number={1}
              usedFor={'products'}
              desc={products[0].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              num1={'01'}
              modalNum2={1}
              num2={'02'}
            />
          </div>
          <Modal
            src={products[0].src}
            alt={products[0].alt}
            href={products[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={products[1].src}
            alt={products[1].alt}
            href={products[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass ? `${hoverProductClass} ` : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[2].name}
              number={2}
              usedFor={'products'}
              desc={products[2].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={products[2].src}
            alt={products[2].alt}
            href={products[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass ? hoverClass : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[3].name}
              number={4}
              usedFor={'products'}
              desc={products[3].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={products[3].src}
            alt={products[3].alt}
            href={products[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />
        </div>
      ) : (
        <div
          className={`list-vh ${
            hoveredClass === hoverClass ? 'yellow-bg' : null
          }`}
        >
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass
                ? `${hoverProductClass} cursor-hover-macropad`
                : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[0].name}
              number={1}
              usedFor={'products'}
              desc={products[0].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              num1={'01'}
              modalNum2={1}
              num2={'02'}
            />
          </div>
          <Modal
            src={products[0].src}
            alt={products[0].alt}
            href={products[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={products[1].src}
            alt={products[1].alt}
            href={products[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass
                ? `${hoverProductClass} cursor-hover-walker1`
                : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[2].name}
              number={2}
              usedFor={'products'}
              desc={products[2].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={products[2].src}
            alt={products[2].alt}
            href={products[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === hoverClass
                ? `${hoverProductClass} cursor-hover-walker2`
                : null
            }`}
            onMouseEnter={() => {
              setHoveredClass(hoverClass);
            }}
            onMouseLeave={() => {
              setHoveredClass('');
            }}
          >
            <ListItem
              name={products[3].name}
              number={4}
              usedFor={'products'}
              desc={products[3].alt}
              hoverClass={hoverProductClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={products[3].src}
            alt={products[3].alt}
            href={products[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />
        </div>
      )}
    </>
  );
};

export default Products;
