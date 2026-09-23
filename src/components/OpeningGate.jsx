export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <div className="gate-frame" />
      <div className="gate-arch" />
      <div className="gate-flower gate-flower--tl">❦</div>
      <div className="gate-flower gate-flower--br">❦</div>
      <div className="gate-content">
        <p className="gate-bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
        <p className="gate-kicker">A new chapter begins</p>
        <p className="gate-label">Together with their families, we invite you to celebrate</p>
        <h1 className="gate-names"><span>Shiba</span><i>&amp;</i><span>Adheeb</span></h1>
        <p className="gate-subname">Dr. Shiba CMP · Dr. Adheeb Mohamedali C V</p>
        <div className="gate-divider"><span /><b>✦</b><span /></div>
        <p className="gate-date">23.12.2026 <span>·</span> Tirur</p>
        <button className="gate-button" onClick={onEnter}>Open Invitation <span>→</span></button>
      </div>
    </section>
  )
}
