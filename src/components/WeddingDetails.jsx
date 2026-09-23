import useReveal from '../hooks/useReveal'

const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Shiba+CMP+%26+Dr.+Adheeb+Mohamedali+C+V&dates=20261223/20261224&details=Wedding+of+Dr.+Shiba+CMP+and+Dr.+Adheeb+Mohamedali+C+V.+Your+presence+and+prayers+are+warmly+invited.&location=Bianco+Castle%2C+Tirur'

export default function WeddingDetails() {
  const [ref, visible] = useReveal()
  return (
    <section className="section details-section" id="details" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Please join us</p>
        <h2 className="script-title">Wedding Details</h2>
        <div className="detail-grid">
          <article className="detail-card"><span className="detail-icon">✦</span><span className="details-label">Date</span><strong>Wednesday,<br />23 December 2026</strong></article>
          <article className="detail-card"><span className="detail-icon">⌖</span><span className="details-label">Venue</span><strong>Bianco Castle,<br />Tirur</strong></article>
        </div>
        <a className="calendar-button" href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">＋ Add to Google Calendar</a>
        <a className="secondary-button" href="/shiba-adheeb-wedding.ics" download>Add to Calendar / Download .ics</a>
      </div>
    </section>
  )
}
