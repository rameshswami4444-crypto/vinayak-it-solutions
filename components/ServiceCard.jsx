'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="surface-card h-full p-6"
    >
      <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
        {service.category}
      </span>
      <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{service.description}</p>
    </motion.article>
  );
}
