import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollRevealWrapper = ({ width, children, duration = 1.1 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (

    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration, ease: 'anticipate' }}
    >
      <div >

      {children}
      </div>
    </motion.div>
  );
};

export default ScrollRevealWrapper;
