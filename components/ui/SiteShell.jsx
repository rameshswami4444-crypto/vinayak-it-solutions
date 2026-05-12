import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function SiteShell({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 sm:pt-28">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
