'use client';

import { motion } from 'framer-motion';
import { Instagram, MapPin, Shield, Youtube } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com',
    icon: Youtube,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Vinayak IT Solutions
          </h2>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-sky-600" />
            <span>Suratgarh</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
            Digital, marketing, and business support services designed with a clean,
            professional approach for growing brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900"
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <a
            href="/admin"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <Shield className="h-4 w-4" />
            Admin Login
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
