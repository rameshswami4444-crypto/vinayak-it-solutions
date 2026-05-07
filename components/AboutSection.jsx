'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Cpu, Rocket, Waves } from 'lucide-react';

const pillars = [
  {
    title: 'Design-led delivery',
    description: 'Interfaces crafted to feel premium while supporting conversion, clarity, and speed.',
    icon: Waves,
  },
  {
    title: 'Reliable execution',
    description: 'Modern engineering practices, clean architecture, and disciplined release workflows.',
    icon: Rocket,
  },
  {
    title: 'Systems thinking',
    description: 'Web, cloud, automation, and analytics working together instead of in silos.',
    icon: Cpu,
  },
  {
    title: 'Long-term support',
    description: 'Admin-ready foundations that remain manageable after launch and easy to extend.',
    icon: BadgeCheck,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="section-heading"
          >
            <span className="section-kicker">About</span>
            <h2 className="section-title">A technology partner focused on elegant systems and confident delivery.</h2>
            <p className="section-copy">
              Vinayak IT Solutions helps companies launch digital products, modernize operations, and connect business workflows through software that is built to last.
            </p>
            <div className="mt-8 glass-card gradient-border p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan">What we optimize for</p>
              <p className="mt-4 text-lg leading-8 text-white/90">
                Strong visual polish, scalable code, operational efficiency, and handoff-ready architecture that your internal team can keep growing.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
                  className="glass-card gradient-border p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-neon-purple">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{pillar.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

