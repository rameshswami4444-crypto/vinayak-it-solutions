import Reveal from '@/components/ui/Reveal';
import { company, whatsappContacts } from '@/lib/constants';

const contactCards = [
  {
    title: 'Email',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  ...whatsappContacts.map((contact) => ({
    title: `WhatsApp ${contact.name}`,
    value: contact.phone,
    href: contact.href,
  })),
];

export default function ContactSection() {
  return (
    <section className="section-space border-t border-white/5">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">Contact Options</span>
          <h2 className="section-title">Reach us through the channel that fits your workflow.</h2>
          <p className="section-copy">
            Use email for detailed requirements or WhatsApp for quick project discussions and follow-up.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className="surface-card block h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{card.title}</p>
                <p className="mt-4 break-words text-lg font-semibold text-white">{card.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
