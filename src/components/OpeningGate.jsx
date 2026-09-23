export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <div className="gate-panel gate-panel--left" aria-hidden="true" />
      <div className="gate-panel gate-panel--right" aria-hidden="true" />
      <div className="gate-frame" />
      <div className="gate-arch" aria-hidden="true" />
      <div className="gate-floral gate-floral--tl" aria-hidden="true">❦</div>
      <div className="gate-floral gate-floral--br" aria-hidden="true">❦</div>
      <div className="gate-spark gate-spark--1" aria-hidden="true">✦</div>
      <div className="gate-spark gate-spark--2" aria-hidden="true">·</div>

      <div className="gate-content">
        <p className="gate-bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
        <div className="gate-ornament"><span /><b>✦</b><span /></div>
        <p className="gate-kicker">A new chapter begins</p>
        <p className="gate-label">Together with their families, we invite you to celebrate</p>

        <h1 className="gate-names">
          <span>Shiba</span>
          <i>&amp;</i>
          <span>Adheeb</span>
        </h1>

        <p className="gate-subname">Dr. Shiba CMP · Dr. Adheeb Mohamedali C V</p>
        <div className="gate-divider"><span /><b>✦</b><span /></div>
        <p className="gate-date">23.12.2026 <span>·</span> Tirur</p>

        <button className="gate-button" onClick={onEnter}>
          <span>Open Invitation</span><b>→</b>
        </button>
      </div>
    </section>
  )
}
