export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="leaf leaf--one" aria-hidden="true">❧</div>
      <div className="leaf leaf--two" aria-hidden="true">❧</div>
      <div className="hero__halo" aria-hidden="true" />

      <div className="hero-card">
        <p className="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
        <p className="hero__eyebrow">Together with their families</p>
        <h1 className="hero__title">You are warmly invited to</h1>
        <p className="hero__subtitle">the wedding ceremony of</p>

        <div className="hero__couple">
          <div className="hero__person">
            <span className="person-label">The Bride</span>
            <h2>Dr. Shiba CMP</h2>
            <p>D/o C M P Yousef<br />&amp; Raihana Edavath</p>
          </div>
          <div className="hero__amp" aria-hidden="true">&amp;</div>
          <div className="hero__person">
            <span className="person-label">The Groom</span>
            <h2>Dr. Adheeb<br className="desktop-break" /> Mohamedali C V</h2>
            <p>S/o Mohamedali CV<br />&amp; Bushara Khader</p>
          </div>
        </div>

        <div className="divider"><span /><b>✦</b><span /></div>
        <p className="hero__weekday">WEDNESDAY</p>
        <p className="hero__date">23 DECEMBER 2026</p>
        <p className="hero__venue">Bianco Castle · Tirur</p>

        <a className="hero__map" href="#venue">View venue &amp; directions <span>↓</span></a>
      </div>

      <a className="scroll-cue" href="#invitation" aria-label="Scroll to invitation">Scroll to explore <span>↓</span></a>
    </section>
  )
}
