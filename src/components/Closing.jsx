import useReveal from '../hooks/useReveal'

export default function Closing() {
  const [ref, visible] = useReveal()
  return (
    <section className="closing" ref={ref}>
      <div className={`closing-inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">We look forward to</p>
        <h2 className="script-title">Your Presence</h2>
        <div className="divider"><span /><b>♡</b><span /></div>
        <p className="body-copy">Your presence and prayers would mean the world to us as we begin this new journey together.</p>
        <p className="closing-names">Shiba &amp; Adheeb</p>
      </div>
    </section>
  )
}
