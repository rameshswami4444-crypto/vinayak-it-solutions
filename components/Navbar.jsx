'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={[
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 sm:px-6',
          scrolled
            ? 'border-white/[0.12] bg-surface/80 shadow-glow backdrop-blur-2xl'
            : 'border-white/10 bg-white/5 backdrop-blur-xl',
        ].join(' ')}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink text-sm font-bold text-white shadow-glow">
            VI
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neon-cyan">Vinayak</p>
            <p className="text-xs text-muted">IT Solutions</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-neon-blue/40 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:shadow-glow"
          >
            Start a Project
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-7xl rounded-[28px] border border-white/[0.12] bg-surface/90 p-5 shadow-card backdrop-blur-2xl md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-neon-blue/40 bg-white/10 px-5 py-3 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

