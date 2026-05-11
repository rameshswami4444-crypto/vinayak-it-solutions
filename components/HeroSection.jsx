'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.18,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const highlights = ['Digital Services', 'Marketing Growth', 'Business Support'];

const stats = [
  { label: 'Web & Brand', value: 'Premium' },
  { label: 'Marketing', value: 'Practical' },
  { label: 'Delivery', value: 'Reliable' },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-100 pt-28 text-slate-900 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-0 h-80 w-80 rounded-full bg-sky-200/55 blur-3xl" />
        <div className="absolute right-[-5rem] top-24 h-96 w-96 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),transparent_50%)]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Trusted digital partner for modern business growth
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Vinayak IT Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-700 sm:text-xl"
          >
            All-in-One Digital, Marketing &amp; Business Services
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
          >
            We build elegant online experiences, growth-focused campaigns, and dependable
            business solutions that help brands look polished and move forward with confidence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(15,23,42,0.14)] transition duration-300 hover:bg-slate-800 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="https://wa.me/918209733894"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={panelVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-200/50 via-white/20 to-cyan-100/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white/80 p-6 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:p-8">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-sm">
                <p className="text-sm font-medium text-sky-700">Premium Service Experience</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Modern solutions for the next stage of your business
                </h2>
              </div>
              <span className="inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Open for Projects
              </span>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[26px] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-slate-300 hover:bg-white"
              >
                <p className="text-sm font-medium text-slate-500">Digital Presence</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Websites & Branding</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Elegant, high-trust experiences designed to help businesses stand out online.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[26px] border border-sky-100 bg-sky-50 p-5 transition duration-300 hover:border-sky-200 hover:bg-white"
              >
                <p className="text-sm font-medium text-slate-500">Marketing Growth</p>
                <p className="mt-3 text-2xl font-semibold text-slate-900">Campaigns & Reach</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Focused outreach and clear messaging built to improve visibility and leads.
                </p>
              </motion.div>
            </div>

            <div className="mt-4 rounded-[26px] border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/80 p-4">
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
