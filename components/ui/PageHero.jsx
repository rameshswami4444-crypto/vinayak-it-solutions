import Reveal from '@/components/ui/Reveal';

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
