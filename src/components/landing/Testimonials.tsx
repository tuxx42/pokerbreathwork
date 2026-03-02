export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="inner">
        <span className="label">Results</span>
        <h2>What players say</h2>

        <div className="testi-grid">
          <div className="testi-card">
            <span className="testi-placeholder-badge">Placeholder</span>
            <p className="testi-quote">
              &quot;After 3 sessions I noticed I was breathing through tough
              spots instead of freezing. My decisions in big pots got
              cleaner.&quot;
            </p>
            <div className="testi-author">Marco · $25/$50 online</div>
          </div>
          <div className="testi-card">
            <span className="testi-placeholder-badge">Placeholder</span>
            <p className="testi-quote" style={{ color: "#4a4845" }}>
              [Add second player testimonial — name, stakes, format, 2–3
              sentence result]
            </p>
            <div className="testi-author" style={{ color: "#4a4845" }}>
              — · —
            </div>
          </div>
          <div className="testi-card">
            <span className="testi-placeholder-badge">Placeholder</span>
            <p className="testi-quote" style={{ color: "#4a4845" }}>
              [Add third player testimonial — name, stakes, format, 2–3 sentence
              result]
            </p>
            <div className="testi-author" style={{ color: "#4a4845" }}>
              — · —
            </div>
          </div>
        </div>

        <p className="testi-editor-note">
          * Testimonials to be confirmed before launch.
        </p>
      </div>
    </section>
  );
}
