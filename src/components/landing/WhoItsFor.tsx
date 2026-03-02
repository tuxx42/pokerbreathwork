const yesItems = [
  "You play $10/$25 or higher (cash) or $500+ buy-ins (tournaments)",
  "You have the skills but not always the access to them",
  "You've tried mindset work and it didn't stick",
  "You want a measurable edge, not inspiration",
  "You're ready to treat your mental game like you treat your strategy game",
];

const noItems = [
  "You're looking for quick fixes or motivation content",
  "You want theory without practice",
  "You're not ready to do the actual work",
];

export default function WhoItsFor() {
  return (
    <section id="who">
      <span className="label">Is This For You</span>
      <h2>This is for you if...</h2>

      <div className="who-cols">
        <div className="who-block">
          <div className="who-block-title yes">✓ Right fit</div>
          <ul className="check-list">
            {yesItems.map((item) => (
              <li key={item}>
                <span className="icon yes">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="who-block">
          <div className="who-block-title no">✕ Not the right fit</div>
          <ul className="check-list">
            {noItems.map((item) => (
              <li key={item}>
                <span className="icon no">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
