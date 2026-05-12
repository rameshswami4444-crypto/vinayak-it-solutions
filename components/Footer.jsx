import Link from 'next/link';
import { company, navLinks, whatsappContacts } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="container-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">{company.name}</h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Clean websites, practical marketing support, and reliable business services for teams that want a more professional digital presence.
            </p>
            <p className="mt-4 text-sm text-slate-400">{company.location}</p>
            <a href={`mailto:${company.email}`} className="mt-1 inline-block text-sm text-cyan-300 hover:text-cyan-200">
              {company.email}
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Pages</h3>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Quick Contact</h3>
            <div className="mt-4 flex flex-col gap-3">
              {whatsappContacts.map((contact) => (
                <a
                  key={contact.phone}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  WhatsApp {contact.name}: {contact.phone}
                </a>
              ))}
              <Link href="/admin/login" className="mt-2 inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-white">
                Admin Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
