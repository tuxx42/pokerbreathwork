const pillars = [
  {
    num: "01",
    tag: "Regulate",
    title: "Rewire Your Stress Response",
    body: "So pressure becomes fuel, not poison. Build the physiological baseline that holds under fire.",
  },
  {
    num: "02",
    tag: "Perform",
    title: "Access Your Full Skill Set",
    body: "On demand, even in the biggest spots. Your edge is there — learn to reach it when it counts.",
  },
  {
    num: "03",
    tag: "Evolve",
    title: "Become the Player Who Doesn't Break",
    body: "At any stakes, in any session. Identity-level change — not just in-the-moment coping.",
  },
];

export default function Solution() {
  return (
    <section id="solution">
      <span className="label">The Solution</span>
      <h2>
        The only performance
        <br />
        program built on nervous
        <br />
        system regulation.
      </h2>
      <p className="solution-body">
        Not mindset work. Not strategy. Not meditation. A protocol that works at
        the level of physiology, pattern, and identity — so your skill is
        actually accessible when it matters.
      </p>

      <div className="pillars">
        {pillars.map((p) => (
          <div key={p.num} className="pillar">
            <div className="pillar-num">{p.num}</div>
            <div className="pillar-content">
              <span className="pillar-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
