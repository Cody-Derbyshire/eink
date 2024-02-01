import '../styles/Gallery.css';
import Header from '../components/Header';
import images from '../assets/images.json';

const Gallery = () => {
  const graphicsData = images.branding;

  return (
    <>
      <div className='overlay'></div>
      <Header page={'Gallery'} back={'y'} />
      <ImageGrid graphics={graphicsData} />
    </>
  );
};

export default Gallery;
