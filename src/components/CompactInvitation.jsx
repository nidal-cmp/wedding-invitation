import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-12-23T11:00:00+05:30').getTime()
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Bianco+Castle%2C+Tirur-Kuttippuram+Road%2C+Poongotukulam%2C+Tirur%2C+Kerala+676101'
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Dr.+Shiba+CMP+%26+Dr.+Adheeb+Mohamedali+C+V&dates=20261223/20261224&details=Wedding+of+Dr.+Shiba+CMP+and+Dr.+Adheeb+Mohamedali+C+V.+Your+presence+and+prayers+are+warmly+invited.&location=Bianco+Castle%2C+Tirur%2C+Kerala'

function getTimeLeft() {
  const diff = WEDDING_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function CompactInvitation() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="compact-invitation">
      <section className="hero-section parallax-section" id="home">
        <div className="hero-arch parallax-slow" aria-hidden="true" />
        <div className="hero-leaf hero-leaf--one parallax-fast" aria-hidden="true">❧</div>
        <div className="hero-leaf hero-leaf--two parallax-slow" aria-hidden="true">❧</div>

        <div className="hero-content reveal-on-scroll">
          <p className="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
          <p className="eyebrow">Together with their families</p>
          <p className="invite-line">You are warmly invited to celebrate the wedding of</p>

          <div className="couple-names">
            <div>
              <span>Dr.</span>
              <h1>Shiba <small>CMP</small></h1>
              <p>D/o C M P Yousef &amp; Raihana Edavath</p>
            </div>

            <div className="couple-symbol" aria-hidden="true">&amp;</div>

            <div>
              <span>Dr.</span>
              <h1>Adheeb <small>Mohamedali C V</small></h1>
              <p>S/o Mohamedali CV &amp; Bushara Khader</p>
            </div>
          </div>

          <div className="gold-rule"><i /><b>✦</b><i /></div>
          <p className="hero-date">23.12.2026</p>
          <p className="hero-venue">Bianco Castle · Tirur</p>
        </div>
      </section>

      <section className="quick-info scroll-stage">
        <div className="countdown-mini reveal-on-scroll scale-reveal">
          <div>
            <span>COUNTING DOWN</span>
            <strong>Our Special Day</strong>
          </div>
          {timeLeft ? (
            <div className="countdown-row">
              <Unit value={timeLeft.days} label="Days" />
              <Unit value={timeLeft.hours} label="Hours" />
              <Unit value={timeLeft.minutes} label="Min" />
              <Unit value={timeLeft.seconds} label="Sec" />
            </div>
          ) : (
            <p className="arrived">Our special day has arrived.</p>
          )}
        </div>

        <div className="event-card reveal-on-scroll slide-reveal">
          <div className="event-item">
            <span className="event-label">DATE</span>
            <strong>23.12.2026</strong>
            <small>Wednesday</small>
          </div>
          <div className="event-divider" />
          <div className="event-item">
            <span className="event-label">WEDDING CEREMONY</span>
            <strong>11:00 AM</strong>
            <small>Wednesday, 23 December 2026</small>
          </div>
        </div>

        <section className="location-card reveal-on-scroll" aria-labelledby="location-heading">
          <h2 id="location-heading">Meet us here!</h2>
          <div className="location-panel">
            <div className="location-map">
              <img src={`${import.meta.env.BASE_URL}images/venue-map.png`} alt="Map showing the location of Bianco Castle" />
            </div>
            <p className="location-kicker">Wedding Ceremony</p>
            <p className="location-name">
              <span className="location-primary">Bianco Castle</span>
              <span className="location-secondary">Tirur, Kerala</span>
            </p>
            <span className="location-ornament" aria-hidden="true">✦</span>
            <a className="location-button" href={MAPS_URL} target="_blank" rel="noreferrer">
              <span className="location-button-label">View Location</span>
              <span className="location-button-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <div className="actions reveal-on-scroll rise-reveal">
          <a className="secondary-action" href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">
            Add to Google Calendar
          </a>
        </div>
      </section>

      <section className="greeting-section reveal-on-scroll handwritten-reveal">
        <div className="gold-rule"><i /><b>✦</b><i /></div>
        <p className="eyebrow">Best regards from</p>
        <p className="greeting-script">Shamna, Sahla, Rashid,<br />Kith and Kin</p>
      </section>

      <section className="closing-section cinematic-close">
        <div className="closing-frame">
          <p className="closing-label">With love, prayers &amp; gratitude</p>
          <p className="closing-note">May Allah bless their union and fill their lives with love, peace and barakah.</p>
          <div className="gold-rule"><i /><b>✦</b><i /></div>
          <p className="closing-names">Shiba <span>&amp;</span> Adheeb</p>
        </div>
      </section>
    </div>
  )
}

function Unit({ value, label }) {
  return (
    <div className="countdown-unit">
      <strong>{String(value).padStart(2, '0')}</strong>
      <span>{label}</span>
    </div>
  )
}
