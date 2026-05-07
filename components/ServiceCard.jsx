'use client';

import { motion } from 'framer-motion';
import { Bot, CloudCog, Layers3, ShieldCheck, Workflow, Wrench } from 'lucide-react';

const iconMap = {
  Bot,
  CloudCog,
  Layers3,
  ShieldCheck,
  Workflow,
  Wrench,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || Layers3;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card gradient-border group relative overflow-hidden p-7"
    >
      <div className={`absolute inset-x-6 top-0 h-24 rounded-full bg-gradient-to-r ${service.accent || 'from-neon-blue/20 to-neon-purple/20'} blur-3xl transition duration-500 group-hover:opacity-100`} />
      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-neon-cyan shadow-glow">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{service.description}</p>
      </div>
    </motion.article>
  );
}

