import ServiceCard from '@/components/ServiceCard';
import PageHero from '@/components/ui/PageHero';
import Reveal from '@/components/ui/Reveal';
import SiteShell from '@/components/ui/SiteShell';
import { getServices } from '@/lib/data';

export const metadata = {
  title: 'Services',
};

export const revalidate = 300;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="All services presented in one clean, structured view."
        description="Each service is separated clearly so visitors can understand your offerings quickly on desktop or mobile."
      />

      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container-shell">
          <Reveal className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}
