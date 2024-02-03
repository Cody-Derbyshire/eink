import '../styles/Branding.css';
import Header from '../components/Header';
import images from '../assets/images.json';
import ListItem from '../components/ListItem';
import { useState } from 'react';
import RevHorFade from '../functions/RevHorFade';
import Modal from '../components/Modal';

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
  const [modalWidth13, setModalWidth13] = useState(0);
  const [modalWidth14, setModalWidth14] = useState(0);

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
    setModalWidth13(0);
    setModalWidth14(0);
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
  const handleOpenModal13 = () => {
    closeAllModals();
    modalWidth13 === 100 ? setModalWidth13(0) : setModalWidth13(100);
  };
  const handleOpenModal14 = () => {
    closeAllModals();
    modalWidth14 === 100 ? setModalWidth13(0) : setModalWidth14(100);
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
        <Modal
          src={branding[0].src}
          alt={branding[0].alt}
          href={branding[0].src}
          modalWidth={modalWidth1}
          closeAllModals={closeAllModals}
        />
        <Modal
          src={branding[1].src}
          alt={branding[1].alt}
          href={branding[1].src}
          modalWidth={modalWidth2}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[2].src}
          alt={branding[2].alt}
          href={branding[2].src}
          modalWidth={modalWidth3}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[3].src}
          alt={branding[3].alt}
          href={branding[3].src}
          modalWidth={modalWidth4}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[4].src}
          alt={branding[4].alt}
          href={branding[4].src}
          modalWidth={modalWidth5}
          closeAllModals={closeAllModals}
        />
        <Modal
          src={branding[5].src}
          alt={branding[5].alt}
          href={branding[5].src}
          modalWidth={modalWidth6}
          closeAllModals={closeAllModals}
        />
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
        <Modal
          src={branding[6].src}
          alt={branding[6].alt}
          href={branding[6].src}
          modalWidth={modalWidth7}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[7].src}
          alt={branding[7].alt}
          href={branding[7].src}
          modalWidth={modalWidth8}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[8].src}
          alt={branding[8].alt}
          href={branding[8].src}
          modalWidth={modalWidth9}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[9].src}
          alt={branding[9].alt}
          href={branding[9].src}
          modalWidth={modalWidth10}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[10].src}
          alt={branding[10].alt}
          href={branding[10].src}
          modalWidth={modalWidth11}
          closeAllModals={closeAllModals}
        />

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
        <Modal
          src={branding[11].src}
          alt={branding[11].alt}
          href={branding[11].src}
          modalWidth={modalWidth12}
          closeAllModals={closeAllModals}
        />

        <div className='list-item-wrapper'>
          <ListItem
            name={"devils's draught"}
            number={11}
            usedFor={'branding'}
            desc={branding[12].alt}
          />
          <RevHorFade>
            <div className='num-wrapper'>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal13}>
                13
              </h1>
              <h1 className='smaller-h1 num-link' onClick={handleOpenModal14}>
                14
              </h1>
            </div>
          </RevHorFade>
        </div>
        <Modal
          src={branding[12].src}
          alt={branding[12].alt}
          href={branding[12].src}
          modalWidth={modalWidth13}
          closeAllModals={closeAllModals}
        />
        <Modal
          src={branding[13].src}
          alt={branding[13].alt}
          href={branding[13].src}
          modalWidth={modalWidth14}
          closeAllModals={closeAllModals}
        />
      </div>
    </>
  );
};

export default Branding;
