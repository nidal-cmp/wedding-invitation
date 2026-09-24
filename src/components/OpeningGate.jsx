export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closed' : ''}`} aria-hidden={open}>
      <div className="gate-texture" />
      <div className="gate-border" />
      <div className="gate-botanical gate-botanical--tl">❧</div>
      <div className="gate-botanical gate-botanical--tr">❧</div>
      <div className="gate-botanical gate-botanical--bl">❧</div>
      <div className="gate-botanical gate-botanical--br">❧</div>
      <div className="gate-emblem">
        <div className="gate-ring">
          <span className="gate-monogram gate-monogram--s">S</span>
          <span className="gate-monogram gate-monogram--a">A</span>
          <span className="gate-monogram gate-monogram--amp">&amp;</span>
        </div>
        <span className="gate-sprig gate-sprig--left">❧</span>
        <span className="gate-sprig gate-sprig--right">❧</span>
      </div>
      <button className="gate-open" onClick={onEnter} type="button">
        <span>TAP TO OPEN</span><i>↓</i>
      </button>
    </section>
  )
}
