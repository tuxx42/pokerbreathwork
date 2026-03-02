export default function Problem() {
  return (
    <section id="problem">
      <div className="inner">
        <span className="label">The Problem</span>
        <h2>
          Let&apos;s be
          <br />
          honest.
        </h2>

        <div className="moment-grid">
          <div className="moment-card">
            <span className="moment-num">01</span>
            <p className="moment-text">
              <strong>Big pot →</strong> chest tightens → you lose your read
            </p>
          </div>
          <div className="moment-card">
            <span className="moment-num">02</span>
            <p className="moment-text">
              <strong>Bad beat →</strong> breathing goes shallow → next three
              hands are compromised
            </p>
          </div>
          <div className="moment-card">
            <span className="moment-num">03</span>
            <p className="moment-text">
              <strong>Tournament bubble →</strong> body screams danger → you
              play scared
            </p>
          </div>
          <div className="moment-card">
            <span className="moment-num">04</span>
            <p className="moment-text">
              <strong>Deep run pressure →</strong> overthinking every decision →
              you miss what&apos;s obvious
            </p>
          </div>
        </div>

        <p className="problem-close">
          This isn&apos;t a strategy problem.
          <br />
          <em>It&apos;s a physiology problem.</em>
        </p>
      </div>
    </section>
  );
}
