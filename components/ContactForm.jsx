'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';

const serviceOptions = [
  'Static Website Development',
  'Dynamic Website Development',
  'Graphic Designing',
  'Video Editing',
  'Digital Marketing',
  'Meta Ads',
  'Field Team Marketing',
  'GST',
  'Taxation',
  'Accounting',
];

const initialFormData = {
  name: '',
  age: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

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

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const supabase = useMemo(() => {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !anonKey) {
      return null;
    }

    return createClient(url, anonKey);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (!supabase) {
      setErrorMessage('Supabase environment variables are missing.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      age: formData.age ? Number(formData.age) : null,
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service,
      message: formData.message.trim(),
    };

    const { error } = await supabase.from('enquiries').insert([payload]);

    if (error) {
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setSuccessMessage('Your enquiry has been submitted successfully.');
    setFormData(initialFormData);
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-8"
      >
        <motion.div variants={itemVariants} className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Contact Us
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Start a conversation about your next project
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Tell us what you need and we&apos;ll guide you toward the right digital,
            marketing, or business service with a clear next step.
          </p>

          <div className="mt-8 space-y-4">
            <motion.a
              href="https://wa.me/918209733894"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="flex items-center justify-between rounded-[26px] border border-emerald-100 bg-white px-5 py-4 text-slate-700 shadow-sm transition duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">WhatsApp Support</p>
                  <p className="text-base font-semibold text-slate-900">8209733894</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-emerald-700">Chat Now</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919950756514"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="flex items-center justify-between rounded-[26px] border border-sky-100 bg-white px-5 py-4 text-slate-700 shadow-sm transition duration-300 hover:border-sky-300 hover:bg-sky-50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">WhatsApp Assistance</p>
                  <p className="text-base font-semibold text-slate-900">9950756514</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-sky-700">Open Chat</span>
            </motion.a>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Project Discussion</p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  Clean communication and quick follow-up for every enquiry
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="rounded-[32px] border border-white/80 bg-white/85 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="age" className="mb-2 block text-sm font-medium text-slate-700">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="1"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  placeholder="Enter your age"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                placeholder="Tell us about your requirement"
              />
            </div>

            {successMessage ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                {successMessage}
              </div>
            ) : null}

            {errorMessage ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(15,23,42,0.14)] transition duration-300 hover:bg-slate-800 hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Enquiry
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
