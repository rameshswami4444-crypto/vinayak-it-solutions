'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesSection({ services = [] }) {
  return (
    <section id="services" className="relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="section-heading"
        >
          <span className="section-kicker">Services</span>
          <h2 className="section-title">Engineering, automation, and cloud systems aligned to business momentum.</h2>
          <p className="section-copy">
            We build production-grade digital infrastructure with premium interfaces, measurable performance, and delivery systems that stay maintainable as your company scales.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id || service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

