import '../styles/Contact.css';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import VertFade from '../functions/VertFade';

const meagain = './images/me-again.jpg';
const cdcv = './CD-CV-2024.pdf';

const Contact = () => {
  const CVDownload = () => {
    return (
      <a href={cdcv} download='CodyDerbyshire_CV'>
        download
      </a>
    );
  };

  return (
    <>
      <div className='overlay'></div>
      <Header page={'Contact'} back={'y'} />
      <div className='list'>
        <VertFade>
          <div className='img-wrapper'>
            <img className='me-img' src={meagain} alt='' />
          </div>
        </VertFade>
        <ListItem
          name={'call me'}
          number={1}
          extLink={'tel:+64220725530'}
          usedFor={'projects'}
          desc={'+64 22 072 5530'}
        />
        <ListItem
          name={'email me'}
          number={2}
          extLink={'mailto:derbyshire@outlook.co.nz'}
          usedFor={'projects'}
          desc={'derbyshire@outlook.co.nz'}
        />
        <ListItem
          name={'resume'}
          number={3}
          extLink={'https://codyderbyshire-cv.onrender.com/'}
          usedFor={'projects'}
          desc={<CVDownload />}
        />
        <ListItem
          name={'github'}
          number={4}
          extLink={'https://github.com/Cody-Derbyshire'}
          usedFor={'projects'}
          desc={''}
        />
      </div>
    </>
  );
};

export default Contact;
