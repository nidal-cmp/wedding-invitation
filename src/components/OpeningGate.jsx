export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <div className="gate-frame" aria-hidden="true" />
      <div className="gate-ornament gate-ornament--top" aria-hidden="true">✦</div>
      <div className="gate-ornament gate-ornament--bottom" aria-hidden="true">✦</div>

      <div className="monogram" aria-label="Shiba and Adheeb">
        <span className="monogram-s">S</span>
        <span className="monogram-amp">&amp;</span>
        <span className="monogram-a">A</span>
      </div>

      <div className="gate-botanical gate-botanical--left" aria-hidden="true">❧</div>
      <div className="gate-botanical gate-botanical--right" aria-hidden="true">❧</div>

      <button className="gate-button" onClick={onEnter} type="button">
        <span>Open Invitation</span>
        <b aria-hidden="true">→</b>
      </button>
    </section>
  )
}
