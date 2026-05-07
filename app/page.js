import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { getPortfolio, getServices } from '@/lib/data';

export const revalidate = 300;

export default async function HomePage() {
  const [services, portfolio] = await Promise.all([getServices(), getPortfolio()]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-text">
      <Navbar />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="gradient-orb left-[6%] top-20 h-72 w-72 bg-neon-purple/30" />
        <div className="gradient-orb right-[8%] top-1/3 h-80 w-80 bg-neon-blue/30" />
        <div className="gradient-orb bottom-10 left-1/3 h-72 w-72 bg-neon-pink/20" />
      </div>

      <HeroSection />
      <ServicesSection services={services} />
      <PortfolioGrid items={portfolio} />
      <AboutSection />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

