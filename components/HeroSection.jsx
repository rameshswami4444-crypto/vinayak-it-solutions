'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Professional multi-page business websites',
  'Marketing and creative support',
  'Business services with clear communication',
];

export default function HeroSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="max-w-3xl"
          >
            <span className="section-eyebrow">Vinayak IT Solutions</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clean digital experiences that help your business look organized and trustworthy.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We design websites, support marketing, and provide business services with a clear, professional process that works well on both desktop and mobile.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeInOut' }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/contact" className="button-primary w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className="button-secondary w-full sm:w-auto">
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: 'easeInOut' }}
              className="mt-8 grid gap-3"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeInOut' }}
            className="surface-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-cyan-200">Website Development</p>
                <p className="mt-3 text-2xl font-semibold text-white">Fast, clear, responsive</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Pages that explain your services properly and guide visitors toward contact.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-indigo-500/10 p-5">
                <p className="text-sm font-medium text-cyan-200">Marketing Support</p>
                <p className="mt-3 text-2xl font-semibold text-white">Campaign-ready assets</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Design, advertising, and content support aligned with your business goals.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm font-medium text-cyan-200">Business Support</p>
              <p className="mt-3 text-2xl font-semibold text-white">Accounting, taxation, GST</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Professional support for operational work that needs clarity, accuracy, and timely follow-up.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
