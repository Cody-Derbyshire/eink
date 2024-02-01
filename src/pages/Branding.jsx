import '../styles/Branding.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState } from 'react';
import RevHorFade from '../functions/RevHorFade';

const Branding = () => {
  const branding = images.branding;

  const [modalWidth1, setModalWidth1] = useState(0);
  const [modalWidth2, setModalWidth2] = useState(0);
  const [modalWidth3, setModalWidth3] = useState(0);
  const [modalWidth4, setModalWidth4] = useState(0);
  const [modalWidth5, setModalWidth5] = useState(0);
  const [modalWidth6, setModalWidth6] = useState(0);
  const [modalWidth7, setModalWidth7] = useState(0);
  const [modalWidth8, setModalWidth8] = useState(0);
  const [modalWidth9, setModalWidth9] = useState(0);
  const [modalWidth10, setModalWidth10] = useState(0);
  const [modalWidth11, setModalWidth11] = useState(0);
  const [modalWidth12, setModalWidth12] = useState(0);

  const closeAllModals = () => {
    setModalWidth1(0);
    setModalWidth2(0);
    setModalWidth3(0);
    setModalWidth4(0);
    setModalWidth5(0);
    setModalWidth6(0);
    setModalWidth7(0);
    setModalWidth8(0);
    setModalWidth9(0);
    setModalWidth10(0);
    setModalWidth11(0);
    setModalWidth12(0);
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
  const handleOpenModal6 = () => {
    closeAllModals();
    modalWidth6 === 100 ? setModalWidth6(0) : setModalWidth6(100);
  };
  const handleOpenModal7 = () => {
    closeAllModals();
    modalWidth7 === 100 ? setModalWidth7(0) : setModalWidth7(100);
  };
  const handleOpenModal8 = () => {
    closeAllModals();
    modalWidth8 === 100 ? setModalWidth8(0) : setModalWidth8(100);
  };
  const handleOpenModal9 = () => {
    closeAllModals();
    modalWidth9 === 100 ? setModalWidth9(0) : setModalWidth9(100);
  };
  const handleOpenModal10 = () => {
    closeAllModals();
    modalWidth10 === 100 ? setModalWidth10(0) : setModalWidth10(100);
  };
  const handleOpenModal11 = () => {
    closeAllModals();
    modalWidth11 === 100 ? setModalWidth11(0) : setModalWidth11(100);
  };
  const handleOpenModal12 = () => {
    closeAllModals();
    modalWidth12 === 100 ? setModalWidth12(0) : setModalWidth12(100);
  };

  return (
    <>
      <div className='overlay'></div>
      <Header page={'Branding'} back={'y'} />
      <div className='list'>
        <div className='list-item-wrapper'>
          <ListItem
            name={'scale studios'}
            number={1}
            usedFor={'branding'}
            desc={branding[0].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal1}>
                01
              </h1>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal2}>
                02
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth1}%` }}>
          <img
            className='modal-img'
            src={branding[0].src}
            alt={branding[0].alt}
          />
          {modalWidth1 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[0].src} target='_blank' rel='noreferrer'>
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
        <div className='modal' style={{ width: `${modalWidth2}%` }}>
          <img
            className='modal-img'
            src={branding[1].src}
            alt={branding[1].alt}
          />
          {modalWidth2 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[1].src} target='_blank' rel='noreferrer'>
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
            name={'cody derbyshire'}
            number={2}
            usedFor={'branding'}
            desc={branding[2].alt}
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
            src={branding[2].src}
            alt={branding[2].alt}
          />
          {modalWidth3 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[2].src} target='_blank' rel='noreferrer'>
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
            name={'flammenzauber'}
            number={3}
            usedFor={'branding'}
            desc={branding[3].alt}
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
            src={branding[3].src}
            alt={branding[3].alt}
          />
          {modalWidth4 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[3].src} target='_blank' rel='noreferrer'>
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
            name={'green grove'}
            number={4}
            usedFor={'branding'}
            desc={branding[4].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal5}>
                05
              </h1>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal6}>
                06
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth5}%` }}>
          <img
            className='modal-img'
            src={branding[4].src}
            alt={branding[4].alt}
          />
          {modalWidth5 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[4].src} target='_blank' rel='noreferrer'>
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
        <div className='modal' style={{ width: `${modalWidth6}%` }}>
          <img
            className='modal-img'
            src={branding[5].src}
            alt={branding[5].alt}
          />
          {modalWidth6 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[5].src} target='_blank' rel='noreferrer'>
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
            name={'ept'}
            number={5}
            usedFor={'branding'}
            desc={branding[6].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal7}>
                07
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth7}%` }}>
          <img
            className='modal-img'
            src={branding[6].src}
            alt={branding[6].alt}
          />
          {modalWidth7 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[6].src} target='_blank' rel='noreferrer'>
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
            name={'eva mae elliot'}
            number={6}
            usedFor={'branding'}
            desc={branding[7].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal8}>
                08
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth8}%` }}>
          <img
            className='modal-img'
            src={branding[7].src}
            alt={branding[7].alt}
          />
          {modalWidth8 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[7].src} target='_blank' rel='noreferrer'>
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
            name={'fwd 2020'}
            number={7}
            usedFor={'branding'}
            desc={branding[8].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal9}>
                09
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth9}%` }}>
          <img
            className='modal-img'
            src={branding[8].src}
            alt={branding[8].alt}
          />
          {modalWidth9 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[8].src} target='_blank' rel='noreferrer'>
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
            name={'grace stephenson'}
            number={8}
            usedFor={'branding'}
            desc={branding[9].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal10}>
                10
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth10}%` }}>
          <img
            className='modal-img'
            src={branding[9].src}
            alt={branding[9].alt}
          />
          {modalWidth10 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[9].src} target='_blank' rel='noreferrer'>
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
            name={'peony wedding'}
            number={9}
            usedFor={'branding'}
            desc={branding[10].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal11}>
                11
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth11}%` }}>
          <img
            className='modal-img'
            src={branding[10].src}
            alt={branding[10].alt}
          />
          {modalWidth11 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[10].src} target='_blank' rel='noreferrer'>
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
            name={'manifest 2020'}
            number={10}
            usedFor={'branding'}
            desc={branding[11].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal12}>
                12
              </h1>
            </div>
          </RevHorFade>
        </div>
        <div className='modal' style={{ width: `${modalWidth12}%` }}>
          <img
            className='modal-img'
            src={branding[11].src}
            alt={branding[11].alt}
          />
          {modalWidth12 !== 0 ? (
            <div className='modal-actions'>
              <div className='action-wrapper' onClick={closeAllModals}>
                <h1 className='smaller-h1'>close</h1>
                <span className='smaller-h1 icon material-symbols-outlined'>
                  close
                </span>
              </div>
              <a href={branding[11].src} target='_blank' rel='noreferrer'>
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

export default Branding;
