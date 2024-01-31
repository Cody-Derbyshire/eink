import { motion } from 'framer-motion';

const VertFade = ({ children }) => {
  return (
    <motion.div
      className='menu-item'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default VertFade;
