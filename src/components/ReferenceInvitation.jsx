import { useEffect, useState } from 'react'

const WEDDING = new Date('2026-12-23T11:00:00+05:30').getTime()
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur-Kuttippuram+Road%2C+Poongotukulam%2C+Tirur%2C+Kerala+676101'
const CALENDAR = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Shiba+CMP+%26+Dr.+Adheeb+Mohamedali+C+V&dates=20261223/20261224&details=Wedding+of+Dr.+Shiba+CMP+and+Dr.+Adheeb+Mohamedali+C+V&location=Bianco+Castle%2C+Tirur%2C+Kerala'

function remaining() {
  const d = WEDDING - Date.now()
  if (d <= 0) return null
  return { days: Math.floor(d/86400000), hours: Math.floor(d/3600000)%24, minutes: Math.floor(d/60000)%60, seconds: Math.floor(d/1000)%60 }
}

export default function ReferenceInvitation() {
  const [time, setTime] = useState(remaining())
  useEffect(() => {
    const id = setInterval(() => setTime(remaining()), 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="reference-site">
      <section className="reference-hero reveal">
        <div className="arch-outline" />
        <div className="botanical botanical--left">❧</div>
        <div className="botanical botanical--right">❧</div>
        <div className="hero-copy">
          <p className="arabic">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
          <Ornament />
          <p className="smallcaps">Together with their families</p>
          <p className="invite-copy">You are warmly invited to celebrate the wedding of</p>
          <div className="names-grid">
            <div className="person">
              <span className="doctor">Dr.</span><h1>Shiba</h1><b>CMP</b>
              <p>D/o C M P Yousef<br />&amp; Raihana Edavath</p>
            </div>
            <div className="amp">&amp;</div>
            <div className="person">
              <span className="doctor">Dr.</span><h1>Adheeb</h1><b>Mohamedali C V</b>
              <p>S/o Mohamedali CV<br />&amp; Bushara Khader</p>
            </div>
          </div>
          <Ornament />
          <p className="hero-date">23.12.2026</p>
          <p className="hero-place">Bianco Castle · Tirur</p>
        </div>
      </section>

      <section className="details-panel">
        <div className="count-card reveal-scale">
          <div className="section-heading"><span>COUNTING DOWN TO</span><h2>Our Special Day</h2></div>
          {time ? <div className="count-grid">
            <Count value={time.days} label="Days"/><Count value={time.hours} label="Hours"/>
            <Count value={time.minutes} label="Minutes"/><Count value={time.seconds} label="Seconds"/>
          </div> : <p>Our special day has arrived.</p>}
        </div>

        <div className="event-strip reveal">
          <div><span>DATE</span><strong>23.12.2026</strong><small>Wednesday</small></div>
          <div className="strip-line" />
          <div><span>VENUE</span><strong>Bianco Castle</strong><small>Tirur, Kerala</small></div>
        </div>

        <div className="actions reveal">
          <a href={MAPS} target="_blank" rel="noreferrer" className="action action-primary">Open in Google Maps <b>↗</b></a>
          <a href={CALENDAR} target="_blank" rel="noreferrer" className="action action-secondary">Add to Google Calendar</a>
        </div>
      </section>

      <section className="greetings reveal">
        <Ornament />
        <span className="smallcaps">Best regards from</span>
        <p>Shamna, Sahla, Rashid,<br />Kith and Kin</p>
      </section>

      <section className="final-section">
        <div className="final-card reveal">
          <span className="smallcaps">With love, prayers &amp; gratitude</span>
          <p>May Allah bless their union and fill their lives with love, peace and barakah.</p>
          <Ornament />
          <strong>Shiba <em>&amp;</em> Adheeb</strong>
        </div>
      </section>
    </div>
  )
}
function Count({value,label}) { return <div className="count"><strong>{String(value).padStart(2,'0')}</strong><span>{label}</span></div> }
function Ornament() { return <div className="ornament"><span />✦<span /></div> }
