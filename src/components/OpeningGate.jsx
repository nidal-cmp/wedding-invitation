const weddingMonogram = `${import.meta.env.BASE_URL}wedding-monogram.jpeg`

export default function OpeningGate({ open, onEnter }) {
  return (
    <section
      className={`gate ${open ? 'gate--closing' : ''}`}
      aria-hidden={open}
      style={{
        '--wedding-monogram': `url("${weddingMonogram}")`,
      }}
    >
      <div className="gate-noise" aria-hidden="true" />
      <div className="gate-vignette" aria-hidden="true" />

      <div className="gate-monogram-wrap">
        <img
          src={weddingMonogram}
          alt="S & A wedding monogram"
          className="gate-monogram-image"
        />
      </div>

      <button
        className="gate-button"
        onClick={onEnter}
        type="button"
        aria-label="Open wedding invitation"
      >
        <span className="gate-button-line" aria-hidden="true" />
        <span>TAP TO OPEN</span>
        <span className="gate-arrow" aria-hidden="true">
          ↓
        </span>
      </button>
    </section>
  )
}