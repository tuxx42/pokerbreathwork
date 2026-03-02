export default function Structure() {
  return (
    <section id="structure">
      <div className="inner">
        <span className="label">Program Structure</span>
        <h2>
          What&apos;s inside
          <br />
          the program
        </h2>

        <div className="structure-grid">
          <div className="struct-item">
            <span className="struct-icon">Format</span>
            <div className="struct-title">1:1 Coaching Sessions</div>
            <div className="struct-detail">Private, focused, tailored to your game</div>
          </div>
          <div className="struct-item">
            <span className="struct-icon">Duration</span>
            <div className="struct-title">
              <span className="struct-detail placeholder">
                [X weeks — to be confirmed]
              </span>
            </div>
          </div>
          <div className="struct-item">
            <span className="struct-icon">Cadence</span>
            <div className="struct-title">
              <span className="struct-detail placeholder">
                [X sessions/week — to be confirmed]
              </span>
            </div>
          </div>
          <div className="struct-item">
            <span className="struct-icon">Includes</span>
            <div className="struct-title">Full Protocol Suite</div>
            <div className="struct-detail">
              Breathwork, somatic tools, identity work, between-session support
            </div>
          </div>
          <div className="struct-item">
            <span className="struct-icon">Language</span>
            <div className="struct-title">English &amp; German</div>
            <div className="struct-detail">Sessions available in both languages</div>
          </div>
        </div>

        <div className="editor-note">
          ✎ Confirm program format, session count, and duration before launch.
        </div>
      </div>
    </section>
  );
}
