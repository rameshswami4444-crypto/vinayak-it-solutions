import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import ServiceCard from '@/components/ServiceCard';

export default function ServicesSection({ services = [] }) {
  const previewServices = services.slice(0, 6);

  return (
    <section className="section-space border-t border-white/5">
      <div className="container-shell">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Services</span>
            <h2 className="section-title">Organized services your clients can understand quickly.</h2>
            <p className="section-copy">
              We keep the presentation simple, structured, and business-focused so visitors can see what you do without getting lost in one long page.
            </p>
          </div>

          <Link href="/services" className="button-secondary w-full sm:w-auto">
            View All Services
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {previewServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
