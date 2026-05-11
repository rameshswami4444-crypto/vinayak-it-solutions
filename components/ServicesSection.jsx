'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  Calculator,
  Megaphone,
  MonitorSmartphone,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const serviceGroups = [
  {
    title: 'Digital Services',
    description: 'Creative and development services tailored for a polished online presence.',
    icon: MonitorSmartphone,
    accent: 'from-sky-100 via-cyan-50 to-white',
    iconColor: 'text-sky-700',
    borderColor: 'border-sky-100',
    ringColor: 'group-hover:ring-sky-100',
    services: [
      'Static Website Development',
      'Dynamic Website Development',
      'Graphic Designing',
      'Video Editing',
    ],
  },
  {
    title: 'Marketing',
    description: 'Growth-focused promotion strategies built to improve reach and conversions.',
    icon: Megaphone,
    accent: 'from-emerald-100 via-teal-50 to-white',
    iconColor: 'text-emerald-700',
    borderColor: 'border-emerald-100',
    ringColor: 'group-hover:ring-emerald-100',
    services: ['Digital Marketing', 'Meta Ads', 'Field Team Marketing'],
  },
  {
    title: 'Business Services',
    description: 'Reliable financial and compliance support that keeps operations moving smoothly.',
    icon: Calculator,
    accent: 'from-amber-100 via-orange-50 to-white',
    iconColor: 'text-amber-700',
    borderColor: 'border-amber-100',
    ringColor: 'group-hover:ring-amber-100',
    services: ['GST', 'Taxation', 'Accounting'],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute right-0 top-36 h-80 w-80 rounded-full bg-emerald-100/55 blur-3xl" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <BriefcaseBusiness className="h-4 w-4 text-sky-600" />
            Our Services
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Flexible service categories built for growing businesses
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            From websites and creative assets to marketing execution and business support,
            our services are structured to keep your brand sharp and your operations smooth.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group h-full"
              >
                <div
                  className={`flex h-full flex-col rounded-[30px] border ${group.borderColor} bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] ring-1 ring-transparent transition duration-300 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] ${group.ringColor} sm:p-7`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} shadow-sm`}
                    >
                      <Icon className={`h-6 w-6 ${group.iconColor}`} />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {group.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {group.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/90 px-4 py-3 transition duration-300 group-hover:border-slate-200 group-hover:bg-white"
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-slate-300 transition duration-300 group-hover:bg-slate-500" />
                        <span className="text-sm font-medium text-slate-700 sm:text-base">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
