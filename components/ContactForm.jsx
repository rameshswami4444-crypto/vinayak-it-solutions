'use client';

import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import { createSupabaseClient } from '@/lib/supabase';
import { company, serviceOptions, whatsappContacts } from '@/lib/constants';
import Reveal from '@/components/ui/Reveal';

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supabase = useMemo(() => createSupabaseClient(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!supabase) {
      setStatus({
        type: 'error',
        message: 'Supabase environment variables are missing.',
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: formData.message.trim(),
      };

      const { error } = await supabase.from('enquiries').insert([payload]);

      if (error) {
        throw error;
      }

      setStatus({
        type: 'success',
        message: 'Your enquiry has been submitted successfully.',
      });
      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <span className="section-eyebrow">Enquiry Form</span>
            <h2 className="mt-4 text-3xl font-semibold text-white">Start your next project with a clear conversation.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Share your requirement and we will help you choose the right service, timeline, and next step.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-cyan-200">Email</p>
                <a href={`mailto:${company.email}`} className="mt-2 inline-block text-base text-white hover:text-cyan-200">
                  {company.email}
                </a>
              </div>

              {whatsappContacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 p-4 transition duration-200 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <p className="text-sm font-semibold text-cyan-200">WhatsApp {contact.name}</p>
                  <p className="mt-2 text-base text-white">{contact.phone}</p>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="surface-card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                    className="input-field"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email address"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your requirement"
                  className="input-field resize-none"
                />
              </div>

              {status.message ? (
                <div
                  className={[
                    'rounded-2xl px-4 py-3 text-sm font-medium',
                    status.type === 'success'
                      ? 'border border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
                      : 'border border-red-400/20 bg-red-400/10 text-red-200',
                  ].join(' ')}
                >
                  {status.message}
                </div>
              ) : null}

              <button type="submit" disabled={isSubmitting} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Enquiry
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
