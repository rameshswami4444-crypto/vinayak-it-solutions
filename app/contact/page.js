import ContactForm from '@/components/ContactForm';
import ContactSection from '@/components/ContactSection';
import PageHero from '@/components/ui/PageHero';
import SiteShell from '@/components/ui/SiteShell';

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="A dedicated contact page with a clear enquiry flow."
        description="Visitors can now reach out without scrolling through unrelated sections, and the WhatsApp contacts stay easy to find on mobile."
      />
      <ContactSection />
      <ContactForm />
    </SiteShell>
  );
}
