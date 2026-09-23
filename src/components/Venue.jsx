const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur-Kuttippuram+Road%2C+Poongotukulam%2C+Tirur%2C+Kerala+676101'

export default function Venue() {
  return (
    <section className="venue-section" id="venue">
      <div className="venue-inner">
        <span className="venue-badge">THE VENUE</span>
        <h2 className="venue-location">Bianco Castle</h2>
        <p className="body-copy">Tirur, Kerala · We would love to celebrate this beautiful beginning with you.</p>
        <a className="cta-button" href={MAPS_URL} target="_blank" rel="noreferrer">⌖ Open in Google Maps <span>→</span></a>
      </div>
    </section>
  )
}
