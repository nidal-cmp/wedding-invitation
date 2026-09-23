import useReveal from '../hooks/useReveal'

export default function Closing() {
  const [ref, visible] = useReveal()
  return (
    <section className="closing" ref={ref}>
      <div className={`closing-inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Until we meet on our special day</p>
        <h2 className="script-title">Your Presence</h2>
        <div className="divider"><span /><b>✦</b><span /></div>
        <p className="body-copy">Your presence, prayers and blessings will make our celebration even more meaningful.</p>
        <p className="closing-names">Shiba <span>&amp;</span> Adheeb</p>
        <p className="closing-date">23 · 12 · 2026</p>
      </div>
    </section>
  )
}
