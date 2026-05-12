import PortfolioGrid from '@/components/PortfolioGrid';
import PageHero from '@/components/ui/PageHero';
import SiteShell from '@/components/ui/SiteShell';
import { getPortfolio } from '@/lib/data';

export const metadata = {
  title: 'Portfolio',
};

export const revalidate = 300;

export default async function PortfolioPage() {
  const portfolio = await getPortfolio();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Portfolio"
        title="Project highlights that show outcomes, not clutter."
        description="This page gives your work room to breathe, with consistent cards, spacing, and messaging."
      />
      <PortfolioGrid
        items={portfolio}
        title="Selected business, marketing, and support work."
        description="Use this space to present your strongest work in a way that feels professional and easy to scan."
      />
    </SiteShell>
  );
}
