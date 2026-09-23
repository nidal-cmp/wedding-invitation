export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <div className="gate-frame" />
      <div className="gate-ornament gate-ornament--top">❦</div>
      <div className="gate-content">
        <p className="gate-bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
        <p className="gate-kicker">A new chapter begins</p>
        <p className="gate-label">You are warmly invited to the wedding of</p>
        <h1 className="gate-names"><span>Dr. Shiba CMP</span><i>&amp;</i><span>Dr. Adheeb</span></h1>
        <p className="gate-subname">Mohamedali C V</p>
        <div className="gate-divider"><span /><b>✦</b><span /></div>
        <p className="gate-date">23.12.2026 <span>·</span> Tirur</p>
        <button className="gate-button" onClick={onEnter}>Open Invitation <span>→</span></button>
      </div>
      <div className="gate-ornament gate-ornament--bottom">❦</div>
    </section>
  )
}
