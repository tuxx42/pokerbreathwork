const dimensions = [
  { num: "01", name: "Pattern Awareness", desc: "See your triggers before they see you" },
  { num: "02", name: "Physiology", desc: "Control what happens in your body under pressure" },
  { num: "03", name: "Stress Response", desc: "Reset faster. Recover fully." },
  { num: "04", name: "Pressure Capacity", desc: "Play your A-game in spots that used to break you" },
  { num: "05", name: "Emotional Patterns", desc: "Stop replaying bad beats in real time" },
  { num: "06", name: "Player Identity", desc: "Be the player you already know you can be" },
];

export default function SixPillars() {
  return (
    <section id="pillars">
      <span className="label">What Changes</span>
      <h2>
        The six dimensions
        <br />
        of inner game mastery
      </h2>

      <div className="pillars-grid">
        {dimensions.map((d) => (
          <div key={d.num} className="dimension">
            <span className="dim-num">{d.num}</span>
            <div className="dim-content">
              <div className="dim-name">{d.name}</div>
              <p className="dim-desc">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
