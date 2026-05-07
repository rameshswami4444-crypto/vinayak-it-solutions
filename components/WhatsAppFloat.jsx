'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/918209733894?text=Hi%20Vinayak%20IT%20Solutions"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_12px_35px_rgba(16,185,129,0.45)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}

