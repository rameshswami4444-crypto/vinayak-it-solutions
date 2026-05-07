'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="section-shell py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan">Vinayak IT Solutions</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Premium software systems, cloud delivery, automation workflows, and responsive support for modern businesses.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href="mailto:hello@vinayakitsolutions.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:shadow-glow">
              <Mail className="h-4 w-4" />
              Email
            </a>
            <a href="tel:+918209733894" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:shadow-glow">
              <PhoneCall className="h-4 w-4" />
              Call
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:shadow-glow">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vinayak IT Solutions. All rights reserved.</p>
          <p>Built for premium performance, scalability, and admin-ready growth.</p>
        </div>
      </div>
    </footer>
  );
}

