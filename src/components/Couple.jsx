import useReveal from '../hooks/useReveal'

export default function Couple() {
  const [ref, visible] = useReveal()
  return (
    <section className="section names-section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">A beautiful beginning</p>
        <h2 className="section-title">Two families, one celebration</h2>
        <div className="name-cards">
          <article className="name-card">
            <span className="card-kicker">The Bride</span>
            <h3>Dr. Shiba CMP</h3>
            <p>Daughter of<br />C M P Yousef &amp; Raihana Edavath</p>
          </article>
          <div className="name-heart">♡</div>
          <article className="name-card">
            <span className="card-kicker">The Groom</span>
            <h3>Dr. Adheeb Mohamedali C V</h3>
            <p>Son of<br />Mohamedali CV &amp; Bushara Khader</p>
          </article>
        </div>
      </div>
    </section>
  )
}
