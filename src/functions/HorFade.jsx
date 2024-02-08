import { motion } from 'framer-motion';

const HorFade = ({ children }) => {
  return (
    <motion.div
      className='menu-item-col'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ duration: 0.6, delayChildren: 0.5 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default HorFade;
