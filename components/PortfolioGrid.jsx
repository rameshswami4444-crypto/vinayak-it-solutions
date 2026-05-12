import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function PortfolioGrid({
  items = [],
  eyebrow = 'Portfolio',
  title = 'Selected work presented with clarity and business context.',
  description = 'A professional portfolio should show what was delivered and why it mattered, without visual clutter.',
  showLink = false,
}) {
  return (
    <section className="section-space border-t border-white/5">
      <div className="container-shell">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow">{eyebrow}</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
          </div>

          {showLink ? (
            <Link href="/portfolio" className="button-secondary w-full sm:w-auto">
              View Full Portfolio
            </Link>
          ) : null}
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className="surface-card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]">
              <span className="inline-flex rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {item.category}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                {item.metrics}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
