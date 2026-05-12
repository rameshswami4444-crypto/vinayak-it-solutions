'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappContacts } from '@/lib/constants';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappContacts[0].href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.4 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_36px_rgba(16,185,129,0.35)] transition md:bottom-6 md:right-6"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
