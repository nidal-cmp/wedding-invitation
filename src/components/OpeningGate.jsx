export default function OpeningGate({ open, onEnter }) {
  return (
    <section className={`gate ${open ? 'gate--closing' : ''}`} aria-hidden={open}>
      <div className="gate-noise" aria-hidden="true" />
      <div className="gate-vignette" aria-hidden="true" />
      <div className="gate-frame" aria-hidden="true" />
      <div className="gate-corner gate-corner--tl" aria-hidden="true">❧</div>
      <div className="gate-corner gate-corner--tr" aria-hidden="true">❧</div>
      <div className="gate-corner gate-corner--bl" aria-hidden="true">❧</div>
      <div className="gate-corner gate-corner--br" aria-hidden="true">❧</div>

      <div className="gate-petals" aria-hidden="true">
        <span>❧</span><span>✦</span><span>❧</span><span>✦</span><span>❧</span>
        <span>✦</span><span>❧</span><span>✦</span>
      </div>

      <div className="gate-monogram-wrap">
        <div className="gate-floral gate-floral--left" aria-hidden="true">❧</div>
        <div className="gate-floral gate-floral--right" aria-hidden="true">❧</div>
        <div className="gate-monogram" aria-label="S and A">
          <span className="gate-s">S</span>
          <span className="gate-a">A</span>
          <span className="gate-amp">&amp;</span>
          <span className="gate-glint" aria-hidden="true" />
        </div>
      </div>

      <button className="gate-button" onClick={onEnter} type="button" aria-label="Open wedding invitation">
        <span className="gate-button-line" aria-hidden="true" />
        <span>TAP TO OPEN</span>
        <span className="gate-arrow" aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
