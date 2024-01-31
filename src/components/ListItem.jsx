import { motion, useScroll, stagger } from 'framer-motion';
import VertFade from '../functions/VertFade';

const ListItem = ({ name, number }) => {
  return (
    <>
      <VertFade>
        <h1 className='li-item'>
          <span className='menu-no'>{`0${number}`}</span> {name}
        </h1>
      </VertFade>

      {/* <motion.div
        className='menu-item'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        <h1 className='li-item'>
          <span className='menu-no'>{`0${number}`}</span> {name}
        </h1>
      </motion.div> */}
      {/* <div className='menu-item'>
        <h1 className='li-item'>
          <span className='menu-no'>{`0${number}`}</span> {name}
        </h1>
      </div> */}
    </>
  );
};

export default ListItem;
