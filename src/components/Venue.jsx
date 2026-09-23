import useReveal from '../hooks/useReveal'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur-Kuttippuram+Road%2C+Poongotukulam%2C+Tirur%2C+Kerala+676101'
const WAZE_URL = 'https://www.waze.com/live-map/directions/in/kl/tirur/bianco-castle?to=place.ChIJc34uWuyxpzsRw8IjhHn1AME'

export default function Venue() {
  const [ref, visible] = useReveal()
  return (
    <section className="venue-section" id="venue" ref={ref}>
      <div className={`venue-inner reveal ${visible ? 'is-visible' : ''}`}>
        <span className="venue-badge">THE VENUE</span>
        <p className="eyebrow">We would love to celebrate with you at</p>
        <h2 className="script-title">Bianco Castle</h2>
        <p className="venue-location">Tirur–Kuttippuram Road · Poongotukulam · Tirur, Kerala 676101</p>
        <p className="body-copy">A beautiful setting for the beginning of our new chapter. Tap below for the exact location and directions.</p>
        <div className="venue-buttons">
          <a className="cta-button" href={MAPS_URL} target="_blank" rel="noreferrer">⌖ Open in Google Maps</a>
          <a className="secondary-button light-button" href={WAZE_URL} target="_blank" rel="noreferrer">↗ Get Waze Directions</a>
        </div>
      </div>
    </section>
  )
}
