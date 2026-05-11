'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contactOptions = [
  {
    title: 'Email',
    value: 'vinayakitsoutionssuratgarh@gmail.com',
    href: 'mailto:vinayakitsoutionssuratgarh@gmail.com',
    icon: Mail,
    accent: 'bg-sky-100 text-sky-700',
    hover: 'hover:border-sky-300 hover:bg-sky-50',
  },
  {
    title: 'WhatsApp Ramesh',
    value: '8209733894',
    href: 'https://wa.me/918209733894',
    icon: MessageCircle,
    accent: 'bg-emerald-100 text-emerald-700',
    hover: 'hover:border-emerald-300 hover:bg-emerald-50',
  },
  {
    title: 'WhatsApp Kishan',
    value: '9950756514',
    href: 'https://wa.me/919950756514',
    icon: MessageCircle,
    accent: 'bg-teal-100 text-teal-700',
    hover: 'hover:border-teal-300 hover:bg-teal-50',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact-options"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-emerald-100/55 blur-3xl" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Contact Options
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Reach us through the channel that feels easiest
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Use email for detailed enquiries or WhatsApp for quick and direct communication.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <motion.a
                key={option.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`group flex h-full rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] sm:p-7 ${option.hover}`}
              >
                <div className="flex w-full flex-col">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${option.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {option.title}
                  </h3>

                  <p className="mt-3 break-words text-base leading-7 text-slate-600">
                    {option.value}
                  </p>

                  <span className="mt-6 text-sm font-semibold text-slate-900">
                    Open Contact
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
