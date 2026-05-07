'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioGrid({ items = [] }) {
  return (
    <section id="portfolio" className="relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="section-heading"
        >
          <span className="section-kicker">Portfolio</span>
          <h2 className="section-title">Selected builds that combine strong engineering with refined user experience.</h2>
          <p className="section-copy">
            From operations platforms to commerce systems, we deliver interfaces that feel premium while staying grounded in business outcomes.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={item.id || item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card gradient-border group relative overflow-hidden p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 opacity-70 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-neon-cyan">{item.category || 'Featured Project'}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition group-hover:shadow-glow">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-muted">{item.description}</p>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/90">
                  {item.metrics || item.result || 'High-impact delivery with measurable performance gains'}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

