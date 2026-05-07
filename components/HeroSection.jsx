'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { stats } from '@/lib/constants';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-hero-grid opacity-40" />
      <div className="absolute inset-0 -z-10 noise-overlay" />
      <div className="section-shell min-h-screen pt-16 sm:pt-20 lg:flex lg:items-center">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-neon-cyan" />
              Premium digital systems for ambitious companies
            </motion.div>

            <motion.h1 variants={item} className="text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              Futuristic software experiences built to accelerate growth.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Vinayak IT Solutions delivers high-performance websites, cloud platforms, and automation systems wrapped in polished digital experiences.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
              >
                Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-neon-cyan/60 hover:bg-white/10"
              >
                Explore Our Work
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card gradient-border p-5">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-xl animate-float rounded-[32px] border border-white/[0.12] bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-glow backdrop-blur-2xl">
              <div className="glass-card overflow-hidden rounded-[28px] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan">Realtime Delivery</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Command Center</h2>
                  </div>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Live
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-surface/70 p-5">
                    <div className="text-sm text-muted">Launch Velocity</div>
                    <div className="mt-3 text-3xl font-semibold text-white">3.7x</div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-surface/70 p-5">
                    <div className="text-sm text-muted">Automation Impact</div>
                    <div className="mt-3 text-3xl font-semibold text-white">82%</div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-3xl border border-white/10 bg-surface/70 p-5">
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>Infrastructure Stability</span>
                    <span>99.95%</span>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.25em] text-muted">Cloud</div>
                      <div className="mt-2 text-lg font-medium text-white">Unified</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.25em] text-muted">Data</div>
                      <div className="mt-2 text-lg font-medium text-white">Observed</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <div className="text-xs uppercase tracking-[0.25em] text-muted">Security</div>
                      <div className="mt-2 text-lg font-medium text-white">Hardened</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

