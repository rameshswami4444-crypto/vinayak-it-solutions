import HeroSection from '@/components/HeroSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import ServicesSection from '@/components/ServicesSection';
import SiteShell from '@/components/ui/SiteShell';
import { getPortfolio, getServices } from '@/lib/data';

export const revalidate = 300;

export default async function HomePage() {
  const [services, portfolio] = await Promise.all([getServices(), getPortfolio()]);

  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection services={services} />
      <PortfolioGrid
        items={portfolio.slice(0, 3)}
        showLink
        title="Recent work that balances usability, clarity, and business needs."
        description="The home page now stays focused, so visitors can preview your work and move to a dedicated portfolio page when they want more detail."
      />
    </SiteShell>
  );
}
