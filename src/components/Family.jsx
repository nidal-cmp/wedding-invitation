import useReveal from '../hooks/useReveal'

export default function Family() {
  const [ref, visible] = useReveal()
  return (
    <section className="section family-section" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">With the blessings of our families</p>
        <h2 className="script-title">With love &amp; gratitude</h2>
        <div className="family-grid">
          <div><span>Dr. Shiba CMP</span><p>C M P Yousef &amp; Raihana Edavath</p></div>
          <div className="family-divider">✦</div>
          <div><span>Dr. Adheeb Mohamedali C V</span><p>Mohamedali CV &amp; Bushara Khader</p></div>
        </div>
      </div>
    </section>
  )
}
