import useReveal from '../hooks/useReveal'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur'

export default function Venue() {
  const [ref, visible] = useReveal()
  return (
    <section className="venue-section" id="venue" ref={ref}>
      <div className={`venue-inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Join us at</p>
        <h2 className="script-title">Bianco Castle, Tirur</h2>
        <p className="body-copy">We look forward to welcoming you and sharing this blessed occasion together.</p>
        <a className="cta-button" href={MAPS_URL} target="_blank" rel="noreferrer">⌖ Get Directions</a>
      </div>
    </section>
  )
}
