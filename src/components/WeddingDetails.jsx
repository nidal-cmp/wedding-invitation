import useReveal from '../hooks/useReveal'

const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Shiba+CMP+%26+Dr.+Adheeb+Mohamedali+C+V&dates=20261223/20261224&details=Wedding+of+Dr.+Shiba+CMP+and+Dr.+Adheeb+Mohamedali+C+V.+Your+presence+and+prayers+are+warmly+invited.&location=Bianco+Castle%2C+Tirur%2C+Kerala'

export default function WeddingDetails() {
  const [ref, visible] = useReveal()
  return (
    <section className="section details-section" id="details" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Save the date</p>
        <h2 className="script-title">Wedding Details</h2>
        <div className="detail-grid">
          <article className="detail-card">
            <span className="detail-icon">23</span>
            <span className="details-label">Date</span>
            <strong>Wednesday<br />23 December 2026</strong>
          </article>
          <article className="detail-card">
            <span className="detail-icon">⌖</span>
            <span className="details-label">Venue</span>
            <strong>Bianco Castle<br />Tirur, Kerala</strong>
          </article>
        </div>
        <div className="button-row">
          <a className="calendar-button" href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">＋ Add to Google Calendar</a>
          <a className="secondary-button" href="/wedding-invitation/shiba-adheeb-wedding.ics" download>Add to Calendar / .ics</a>
        </div>
      </div>
    </section>
  )
}
