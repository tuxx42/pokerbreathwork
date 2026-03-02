import Link from "next/link";

export default function FinalCta() {
  return (
    <section
      id="apply"
      style={{
        padding: "10rem 2rem",
        textAlign: "center",
        background: "var(--bg3)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span className="label" style={{ display: "block", textAlign: "center" }}>
        Apply
      </span>
      <h2 className="cta-headline">Ready to regulate?</h2>
      <p className="cta-sub">
        Spots are limited. Apply to see if Regulate is right for you.
      </p>
      <Link href="/apply" className="btn btn--large">
        Apply Now →
      </Link>
      <span className="cta-trust">
        No commitment. A 20-minute call to find out if it&apos;s a fit.
      </span>
    </section>
  );
}
