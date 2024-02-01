import '../styles/Furniture.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState } from 'react';
import RevHorFade from '../functions/RevHorFade';

const Furniture = () => {
  const furniture = images.furniture;

  const [modalWidth1, setModalWidth1] = useState(0);
  const [modalWidth2, setModalWidth2] = useState(0);
  const [modalWidth3, setModalWidth3] = useState(0);
  const [modalWidth4, setModalWidth4] = useState(0);
  const [modalWidth5, setModalWidth5] = useState(0);

  const closeAllModals = () => {
    setModalWidth1(0);
    setModalWidth2(0);
    setModalWidth3(0);
    setModalWidth4(0);
    setModalWidth5(0);
  };

  const handleOpenModal1 = () => {
    closeAllModals();
    modalWidth1 === 100 ? setModalWidth1(0) : setModalWidth1(100);
  };
  const handleOpenModal2 = () => {
    closeAllModals();
    modalWidth2 === 100 ? setModalWidth2(0) : setModalWidth2(100);
  };
  const handleOpenModal3 = () => {
    closeAllModals();
    modalWidth3 === 100 ? setModalWidth3(0) : setModalWidth3(100);
  };
  const handleOpenModal4 = () => {
    closeAllModals();
    modalWidth4 === 100 ? setModalWidth4(0) : setModalWidth4(100);
  };
  const handleOpenModal5 = () => {
    closeAllModals();
    modalWidth5 === 100 ? setModalWidth5(0) : setModalWidth5(100);
  };

  console.log(furniture[1].src);

  return (
    <>
      <div className='overlay'></div>
      <Header page={'Furniture'} back={'y'} />
      <div className='list'>
        <div className='list-item-wrapper'>
          <ListItem
            name={furniture[0].name}
            number={1}
            usedFor={'branding'}
            desc={furniture[0].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal1}>
                01
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth1}%` }}>
          <img
            className='modal-img'
            src={furniture[0].src}
            alt={furniture[0].alt}
          />
          {modalWidth1 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={furniture[0].src} target='_blank' rel='noreferrer'>
                <div className='action-wrapper'>
                  <h1 className='smaller-h1'>open</h1>
                  <span className='smaller-h1 icon material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          ) : null}
        </div>
        <div className='list-item-wrapper'>
          <ListItem
            name={furniture[1].name}
            number={2}
            usedFor={'branding'}
            desc={furniture[1].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal2}>
                02
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth2}%` }}>
          <img
            className='modal-img'
            src={furniture[1].src}
            alt={furniture[1].alt}
          />
          {modalWidth2 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={furniture[1].src} target='_blank' rel='noreferrer'>
                <div className='action-wrapper'>
                  <h1 className='smaller-h1'>open</h1>
                  <span className='smaller-h1 icon material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          ) : null}
        </div>
        <div className='list-item-wrapper'>
          <ListItem
            name={furniture[2].name}
            number={3}
            usedFor={'branding'}
            desc={furniture[2].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal3}>
                03
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth3}%` }}>
          <img
            className='modal-img'
            src={furniture[2].src}
            alt={furniture[2].alt}
          />
          {modalWidth3 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={furniture[2].src} target='_blank' rel='noreferrer'>
                <div className='action-wrapper'>
                  <h1 className='smaller-h1'>open</h1>
                  <span className='smaller-h1 icon material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          ) : null}
        </div>
        <div className='list-item-wrapper'>
          <ListItem
            name={furniture[3].name}
            number={4}
            usedFor={'branding'}
            desc={furniture[3].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal4}>
                04
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth4}%` }}>
          <img
            className='modal-img'
            src={furniture[3].src}
            alt={furniture[3].alt}
          />
          {modalWidth4 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={furniture[3].src} target='_blank' rel='noreferrer'>
                <div className='action-wrapper'>
                  <h1 className='smaller-h1'>open</h1>
                  <span className='smaller-h1 icon material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          ) : null}
        </div>
        <div className='list-item-wrapper'>
          <ListItem
            name={furniture[4].name}
            number={5}
            usedFor={'branding'}
            desc={furniture[4].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal5}>
                05
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth5}%` }}>
          <img
            className='modal-img'
            src={furniture[4].src}
            alt={furniture[4].alt}
          />
          {modalWidth5 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={furniture[4].src} target='_blank' rel='noreferrer'>
                <div className='action-wrapper'>
                  <h1 className='smaller-h1'>open</h1>
                  <span className='smaller-h1 icon material-symbols-outlined'>
                    arrow_outward
                  </span>
                </div>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Furniture;
