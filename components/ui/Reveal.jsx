'use client';

import { motion } from 'framer-motion';

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  y = 20,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
