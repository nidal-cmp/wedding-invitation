import useReveal from '../hooks/useReveal'

export default function Family() {
  const [ref, visible] = useReveal()
  return (
    <section className="section family-section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">With love and warm regards</p>
        <h2 className="script-title">Family</h2>
        <p className="body-copy">Sharing in this happiness and inviting you on behalf of the family.</p>
        <p className="family-names">Shamna, Sahla, Rashid &amp; family</p>
      </div>
    </section>
  )
}
