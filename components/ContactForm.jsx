'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { LoaderCircle, MessageSquareText } from 'lucide-react';
import { createSupabaseClient } from '@/lib/supabase';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const supabase = useMemo(() => createSupabaseClient(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      };

      const { error } = await supabase.from('enquiries').insert([payload]);

      if (error) {
        throw error;
      }

      const whatsappUrl = `https://wa.me/918209733894?text=${encodeURIComponent(`Hi I am ${payload.name}`)}`;
      setStatus({ type: 'success', message: 'Enquiry sent successfully. Redirecting to WhatsApp...' });
      setForm(initialForm);
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
      setStatus({
        type: 'error',
        message: error?.message || 'Something went wrong while sending your enquiry.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="section-heading"
          >
            <span className="section-kicker">Contact</span>
            <h2 className="section-title">Bring us the brief. We’ll shape the system, design, and delivery path.</h2>
            <p className="section-copy">
              Share your product idea, redesign scope, or automation challenge. We’ll capture your enquiry and move the conversation to WhatsApp instantly.
            </p>
            <div className="mt-8 glass-card gradient-border p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.08] text-neon-cyan">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-neon-cyan">Response Flow</p>
                  <p className="mt-1 text-white">Supabase capture + WhatsApp handoff</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="glass-card gradient-border p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/90">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/[0.12] bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-cyan/60 focus:bg-white/[0.08]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-white/90">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/[0.12] bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-cyan/60 focus:bg-white/[0.08]"
                  placeholder="Your phone number"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-2 block text-sm text-white/90">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/[0.12] bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-cyan/60 focus:bg-white/[0.08]"
                  placeholder="you@company.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/[0.12] bg-white/5 px-4 py-3 text-white outline-none transition focus:border-neon-cyan/60 focus:bg-white/[0.08]"
                  placeholder="Tell us about your project, timeline, or operational challenge."
                />
              </div>
            </div>

            {status.message && (
              <div
                className={[
                  'mt-5 rounded-2xl border px-4 py-3 text-sm',
                  status.type === 'success'
                    ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
                    : 'border-rose-400/30 bg-rose-400/10 text-rose-200',
                ].join(' ')}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
              {submitting ? 'Sending Enquiry...' : 'Submit & Open WhatsApp'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

