export default function Ticker() {
  const items = [
    "Nervous System Regulation",
    "·",
    "High-Stakes Performance",
    "·",
    "Pressure Capacity",
    "·",
    "Player Identity",
    "·",
    "Somatic Protocol",
    "·",
    "English & German",
    "·",
  ];

  return (
    <div className="hero-ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
