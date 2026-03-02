const items = [
  {
    title: "More Study",
    reason:
      "Your brain knows the right play. The problem isn't information.",
  },
  {
    title: "Just Relax",
    reason:
      "Advice that helps no one when your heart rate spikes at 140bpm.",
  },
  {
    title: "Meditation Apps",
    reason: "Calm in a quiet room doesn't transfer to a $50k pot.",
  },
  {
    title: "Powering Through",
    reason: "Grit without regulation is just compounded stress.",
  },
  {
    title: "Mindset Work",
    reason:
      "Reframing thoughts doesn't reset a nervous system already in crisis.",
  },
];

export default function WhatYouTried() {
  return (
    <section id="tried">
      <div className="inner">
        <span className="label">What You&apos;ve Tried</span>
        <h2>You&apos;ve tried everything.</h2>

        <div className="tried-grid">
          {items.map((item) => (
            <div key={item.title} className="tried-card">
              <div className="tried-title">{item.title}</div>
              <p className="tried-reason">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
