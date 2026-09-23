export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-ornament hero-ornament--left" aria-hidden="true">❦</div>
      <div className="hero-ornament hero-ornament--right" aria-hidden="true">❦</div>
      <div className="arch">
        <p className="bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
        <p className="hero__eyebrow">Together with their families</p>
        <p className="hero__invite">You are warmly invited to<br />the wedding ceremony of</p>
        <div className="hero__couple">
          <div>
            <h1>Dr. Shiba CMP</h1>
            <p>D/o C M P Yousef &amp;<br />Raihana Edavath</p>
          </div>
          <span className="hero__amp">&amp;</span>
          <div>
            <h1>Dr. Adheeb<br className="desktop-break" /> Mohamedali C V</h1>
            <p>S/o Mohamedali CV &amp;<br />Bushara Khader</p>
          </div>
        </div>
        <div className="divider"><span /><b>♡</b><span /></div>
        <p className="hero__weekday">WEDNESDAY</p>
        <p className="hero__date">23 DECEMBER 2026</p>
        <p className="hero__venue">Bianco Castle, Tirur</p>
      </div>
      <a className="scroll-cue" href="#invitation" aria-label="Scroll down">↓</a>
    </section>
  )
}
