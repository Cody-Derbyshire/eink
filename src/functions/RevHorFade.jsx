import { motion } from 'framer-motion';

const HorFade = ({ children }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 20 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default HorFade;
