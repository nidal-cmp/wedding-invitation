const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Shiba+CMP+%26+Dr.+Adheeb+Mohamedali+C+V&dates=20261223/20261224&details=Wedding+of+Dr.+Shiba+CMP+and+Dr.+Adheeb+Mohamedali+C+V.+Your+presence+and+prayers+are+warmly+invited.&location=Bianco+Castle%2C+Tirur%2C+Kerala'

export default function EventDetails() {
  return (
    <section className="details" id="details">
      <div className="details-inner">
        <p className="eyebrow">Mark the day</p>
        <h2 className="script-title">23.12.2026</h2>
        <div className="details-line"><span>WEDNESDAY</span><b>✦</b><span>BIANCO CASTLE · TIRUR</span></div>
        <a className="calendar-button" href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">＋ Add to Google Calendar</a>
      </div>
    </section>
  )
}
