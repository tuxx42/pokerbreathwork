import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-eyebrow">Performance Under Pressure · Poker Players</div>
      <h1 className="hero-headline">
        The game is decided
        <br />
        <em>before</em> you sit down.
      </h1>
      <p className="hero-sub">
        Your reads are sharp. Your strategy is solid. But under pressure, your
        nervous system overrides everything — and you already know it.
      </p>
      <div className="hero-cta-group">
        <Link href="/apply" className="btn btn--large">
          Apply for Regulate →
        </Link>
        <span className="trust-line">
          No commitment. A 20-minute call to find out if it&apos;s a fit.
        </span>
      </div>
    </section>
  );
}
