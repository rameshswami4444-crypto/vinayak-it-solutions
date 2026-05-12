'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { company, navLinks } from '@/lib/constants';

function isActivePath(pathname, href) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div
          className={[
            'flex items-center justify-between rounded-2xl border px-4 py-3 transition duration-200 sm:px-6',
            isScrolled
              ? 'border-white/10 bg-slate-950/90 shadow-[0_16px_40px_rgba(2,6,23,0.45)] backdrop-blur-xl'
              : 'border-white/10 bg-slate-950/75 backdrop-blur',
          ].join(' ')}
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-bold text-white">
              VI
            </span>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">{company.name}</p>
              <p className="text-xs text-slate-400">Business websites and digital support</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                    active
                      ? 'bg-indigo-500 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="button-secondary">
              Start a Project
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="container-shell md:hidden"
          >
            <div className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={[
                        'rounded-2xl px-4 py-3 text-sm font-medium transition duration-200',
                        active
                          ? 'bg-indigo-500 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link href="/contact" className="button-primary mt-2 w-full">
                  Start a Project
                </Link>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
