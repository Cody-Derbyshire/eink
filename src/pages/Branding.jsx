import '../styles/Branding.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import '../assets/colours.css';
import useModal from '../functions/ModalUtils';
import remToPixels from '../functions/remToPixels';

const Branding = () => {
  const branding = images.branding;

  const { modalWidths, setModalWidths, closeAllModals, handleOpenModal } =
    useModal(14);

  const [hoveredClass, setHoveredClass] = useState('');
  const hoverClass = 'rad-pink-neon-green-no-border';
  const hoverBrandClass = 'rad-pink-neon-green-no-border';

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
        page={'Branding'}
        back={'y'}
        hoveredClass={hoveredClass}
        setHoveredClass={setHoveredClass}
      />

      {isMobile ? (
        <div className='list neon-green-bg rad-pink-text no-borders-pink'>
          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'scale studios'}
              number={1}
              usedFor={'branding'}
              desc={branding[0].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              modalNum2={1}
              num1={'01'}
              num2={'02'}
            />
          </div>
          <Modal
            src={branding[0].src}
            alt={branding[0].alt}
            href={branding[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[1].src}
            alt={branding[1].alt}
            href={branding[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'cody derbyshire'}
              number={2}
              usedFor={'branding'}
              desc={branding[2].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={branding[2].src}
            alt={branding[2].alt}
            href={branding[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'flammenzauber'}
              number={3}
              usedFor={'branding'}
              desc={branding[3].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={branding[3].src}
            alt={branding[3].alt}
            href={branding[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'green grove'}
              number={4}
              usedFor={'branding'}
              desc={branding[4].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={4}
              modalNum2={5}
              num1={'05'}
              num2={'06'}
            />
          </div>
          <Modal
            src={branding[4].src}
            alt={branding[4].alt}
            href={branding[4].src}
            modalWidth={modalWidths[4]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[5].src}
            alt={branding[5].alt}
            href={branding[5].src}
            modalWidth={modalWidths[5]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'ept'}
              number={5}
              usedFor={'branding'}
              desc={branding[6].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={6}
              num1={'07'}
            />
          </div>
          <Modal
            src={branding[6].src}
            alt={branding[6].alt}
            href={branding[6].src}
            modalWidth={modalWidths[6]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'eva mae elliot'}
              number={6}
              usedFor={'branding'}
              desc={branding[7].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={7}
              num1={'08'}
            />
          </div>
          <Modal
            src={branding[7].src}
            alt={branding[7].alt}
            href={branding[7].src}
            modalWidth={modalWidths[7]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'fwd 2020'}
              number={7}
              usedFor={'branding'}
              desc={branding[8].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={8}
              num1={'09'}
            />
          </div>
          <Modal
            src={branding[8].src}
            alt={branding[8].alt}
            href={branding[8].src}
            modalWidth={modalWidths[8]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'grace stephenson'}
              number={8}
              usedFor={'branding'}
              desc={branding[9].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={9}
              num1={'10'}
            />
          </div>
          <Modal
            src={branding[9].src}
            alt={branding[9].alt}
            href={branding[9].src}
            modalWidth={modalWidths[9]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'peony wedding'}
              number={9}
              usedFor={'branding'}
              desc={branding[10].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={10}
              num1={'11'}
            />
          </div>
          <Modal
            src={branding[10].src}
            alt={branding[10].alt}
            href={branding[10].src}
            modalWidth={modalWidths[10]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'manifest 2020'}
              number={10}
              usedFor={'branding'}
              desc={branding[11].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={11}
              num1={'12'}
            />
          </div>
          <Modal
            src={branding[11].src}
            alt={branding[11].alt}
            href={branding[11].src}
            modalWidth={modalWidths[11]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={"devils's draught"}
              number={11}
              usedFor={'branding'}
              desc={branding[12].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={12}
              num1={'13'}
              modalNum2={13}
              num2={'14'}
            />
          </div>
          <Modal
            src={branding[12].src}
            alt={branding[12].alt}
            href={branding[12].src}
            modalWidth={modalWidths[12]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[13].src}
            alt={branding[13].alt}
            href={branding[13].src}
            modalWidth={modalWidths[13]}
            closeAllModals={closeAllModals}
          />
        </div>
      ) : (
        <div
          className={`list ${
            hoveredClass === hoverClass ? 'neon-green-bg' : null
          }`}
        >
          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'scale studios'}
              number={1}
              usedFor={'branding'}
              desc={branding[0].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={0}
              modalNum2={1}
              num1={'01'}
              num2={'02'}
            />
          </div>
          <Modal
            src={branding[0].src}
            alt={branding[0].alt}
            href={branding[0].src}
            modalWidth={modalWidths[0]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[1].src}
            alt={branding[1].alt}
            href={branding[1].src}
            modalWidth={modalWidths[1]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'cody derbyshire'}
              number={2}
              usedFor={'branding'}
              desc={branding[2].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={2}
              num1={'03'}
            />
          </div>
          <Modal
            src={branding[2].src}
            alt={branding[2].alt}
            href={branding[2].src}
            modalWidth={modalWidths[2]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'flammenzauber'}
              number={3}
              usedFor={'branding'}
              desc={branding[3].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={3}
              num1={'04'}
            />
          </div>
          <Modal
            src={branding[3].src}
            alt={branding[3].alt}
            href={branding[3].src}
            modalWidth={modalWidths[3]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'green grove'}
              number={4}
              usedFor={'branding'}
              desc={branding[4].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={4}
              modalNum2={5}
              num1={'05'}
              num2={'06'}
            />
          </div>
          <Modal
            src={branding[4].src}
            alt={branding[4].alt}
            href={branding[4].src}
            modalWidth={modalWidths[4]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[5].src}
            alt={branding[5].alt}
            href={branding[5].src}
            modalWidth={modalWidths[5]}
            closeAllModals={closeAllModals}
          />
          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'ept'}
              number={5}
              usedFor={'branding'}
              desc={branding[6].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={6}
              num1={'07'}
            />
          </div>
          <Modal
            src={branding[6].src}
            alt={branding[6].alt}
            href={branding[6].src}
            modalWidth={modalWidths[6]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'eva mae elliot'}
              number={6}
              usedFor={'branding'}
              desc={branding[7].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={7}
              num1={'08'}
            />
          </div>
          <Modal
            src={branding[7].src}
            alt={branding[7].alt}
            href={branding[7].src}
            modalWidth={modalWidths[7]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'fwd 2020'}
              number={7}
              usedFor={'branding'}
              desc={branding[8].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={8}
              num1={'09'}
            />
          </div>
          <Modal
            src={branding[8].src}
            alt={branding[8].alt}
            href={branding[8].src}
            modalWidth={modalWidths[8]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'grace stephenson'}
              number={8}
              usedFor={'branding'}
              desc={branding[9].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={9}
              num1={'10'}
            />
          </div>
          <Modal
            src={branding[9].src}
            alt={branding[9].alt}
            href={branding[9].src}
            modalWidth={modalWidths[9]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'peony wedding'}
              number={9}
              usedFor={'branding'}
              desc={branding[10].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={10}
              num1={'11'}
            />
          </div>
          <Modal
            src={branding[10].src}
            alt={branding[10].alt}
            href={branding[10].src}
            modalWidth={modalWidths[10]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={'manifest 2020'}
              number={10}
              usedFor={'branding'}
              desc={branding[11].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={11}
              num1={'12'}
            />
          </div>
          <Modal
            src={branding[11].src}
            alt={branding[11].alt}
            href={branding[11].src}
            modalWidth={modalWidths[11]}
            closeAllModals={closeAllModals}
          />

          <div
            className={`list-item-wrapper ${
              hoveredClass === 'rad-pink-neon-green-no-border'
                ? 'rad-pink-neon-green-no-border'
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
              name={"devils's draught"}
              number={11}
              usedFor={'branding'}
              desc={branding[12].alt}
              hoverClass={hoverBrandClass}
              hoveredClass={hoveredClass}
              setHoveredClass={setHoveredClass}
              handleOpenModal={handleOpenModal}
              modalNum1={12}
              num1={'13'}
              modalNum2={13}
              num2={'14'}
            />
          </div>
          <Modal
            src={branding[12].src}
            alt={branding[12].alt}
            href={branding[12].src}
            modalWidth={modalWidths[12]}
            closeAllModals={closeAllModals}
          />
          <Modal
            src={branding[13].src}
            alt={branding[13].alt}
            href={branding[13].src}
            modalWidth={modalWidths[13]}
            closeAllModals={closeAllModals}
          />
        </div>
      )}
    </>
  );
};

export default Branding;
