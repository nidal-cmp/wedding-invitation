import { useEffect, useState, useRef } from 'react'

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

  // Section observer setup for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal-on-scroll')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="compact-invitation">
      {/* Background Subtle Texture & Floating Leaves */}
      <div className="invitation-bg-texture" aria-hidden="true" />
      
      {/* Decorative Parallax Leaves */}
      <div className="bg-floating-leaves" aria-hidden="true">
        <svg className="f-leaf f-leaf-1" viewBox="0 0 60 100" fill="none">
          <path d="M30 0 C50 30, 60 70, 30 100 C0 70, 10 30, 30 0 Z" fill="currentColor" opacity="0.12"/>
          <path d="M30 0 V100" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
        </svg>
        <svg className="f-leaf f-leaf-2" viewBox="0 0 60 100" fill="none">
          <path d="M30 0 C50 30, 60 70, 30 100 C0 70, 10 30, 30 0 Z" fill="currentColor" opacity="0.08"/>
        </svg>
        <svg className="f-leaf f-leaf-3" viewBox="0 0 60 100" fill="none">
          <path d="M30 0 C50 30, 60 70, 30 100 C0 70, 10 30, 30 0 Z" fill="currentColor" opacity="0.1"/>
        </svg>
      </div>

      {/* 1. HERO / COUPLE ANNOUNCEMENT */}
      <section className="invitation-hero reveal-on-scroll" id="home">
        <div className="hero-inner-frame">
          <div className="hero-top-flourish" aria-hidden="true">
            <svg viewBox="0 0 120 20" fill="none">
              <path d="M0 10 H45 M75 10 H120" stroke="currentColor" strokeWidth="1"/>
              <circle cx="60" cy="10" r="3" fill="currentColor"/>
              <path d="M52 10 L60 2 L68 10 L60 18 Z" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          <p className="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p>
          <p className="eyebrow">Together with their families</p>
          <p className="invite-line">You are warmly invited to celebrate the wedding of</p>

          <div className="couple-showcase">
            <div className="person-card bride-card">
              <span className="person-role">THE BRIDE</span>
              <h1 className="person-name">
                Dr. Shiba <span className="title-tag">CMP</span>
              </h1>
              <p className="parent-line">
                Daughter of <strong>C M P Yousef</strong> &amp; <strong>Raihana Edavath</strong>
              </p>
            </div>

            <div className="couple-divider" aria-hidden="true">
              <span className="divider-line" />
              <div className="couple-ampersand">&amp;</div>
              <span className="divider-line" />
            </div>

            <div className="person-card groom-card">
              <span className="person-role">THE GROOM</span>
              <h1 className="person-name">
                Dr. Adheeb <span className="title-tag">Mohamedali C V</span>
              </h1>
              <p className="parent-line">
                Son of <strong>Mohamedali CV</strong> &amp; <strong>Bushara Khader</strong>
              </p>
            </div>
          </div>

          <div className="gold-ornament-divider" aria-hidden="true">
            <span className="ornament-line" />
            <svg viewBox="0 0 24 24" className="ornament-icon" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
            <span className="ornament-line" />
          </div>

          <div className="hero-date-venue-summary">
            <p className="hero-date-highlight">23 DECEMBER 2026</p>
            <p className="hero-day-tag">WEDNESDAY · 11:00 AM IST</p>
            <p className="hero-venue-tag">Bianco Castle · Tirur, Kerala</p>
          </div>
        </div>
      </section>

      {/* 2. COUNTDOWN SECTION */}
      <section className="countdown-section reveal-on-scroll">
        <div className="section-header">
          <span className="section-eyebrow">COUNTING DOWN</span>
          <h2 className="section-title">Our Special Day</h2>
          <div className="title-underline" />
        </div>

        {timeLeft ? (
          <div className="countdown-grid">
            <Unit value={timeLeft.days} label="Days" />
            <div className="countdown-colon">:</div>
            <Unit value={timeLeft.hours} label="Hours" />
            <div className="countdown-colon">:</div>
            <Unit value={timeLeft.minutes} label="Minutes" />
            <div className="countdown-colon">:</div>
            <Unit value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : (
          <p className="arrived-message">Our special day has arrived!</p>
        )}
      </section>

      {/* 3. VENUE & EVENT DETAILS */}
      <section className="event-venue-section reveal-on-scroll">
        <div className="venue-card">
          <div className="venue-card-inner">
            <div className="card-corner-accent" />
            <span className="section-eyebrow">THE VENUE</span>
            <h2 className="venue-name">Bianco Castle</h2>
            <p className="venue-address">
              Tirur - Kuttippuram Road, Poongotukulam<br />
              Tirur, Kerala 676101
            </p>

            <div className="event-meta-grid">
              <div className="meta-box">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span className="meta-label">DATE</span>
                <strong className="meta-value">23.12.2026</strong>
                <small className="meta-sub">Wednesday</small>
              </div>

              <div className="meta-divider-vertical" />

              <div className="meta-box">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="meta-label">TIME</span>
                <strong className="meta-value">11:00 AM</strong>
                <small className="meta-sub">Indian Standard Time</small>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="action-buttons">
              <a 
                className="btn-primary" 
                href={MAPS_URL} 
                target="_blank" 
                rel="noreferrer"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Open in Google Maps</span>
                <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>

              <a 
                className="btn-secondary" 
                href={GOOGLE_CALENDAR_URL} 
                target="_blank" 
                rel="noreferrer"
              >
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="12" y1="11" x2="12" y2="17"/>
                  <line x1="9" y1="14" x2="15" y2="14"/>
                </svg>
                <span>Add to Google Calendar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAMILY GREETINGS SECTION */}
      <section className="greeting-section reveal-on-scroll">
        <div className="greeting-box">
          <div className="gold-ornament-divider" aria-hidden="true">
            <span className="ornament-line" />
            <span className="ornament-symbol">❦</span>
            <span className="ornament-line" />
          </div>

          <p className="greeting-eyebrow">BEST REGARDS FROM</p>
          <p className="greeting-names">
            Shamna, Sahla, Rashid,<br />
            Kith and Kin
          </p>

          <div className="greeting-leaves" aria-hidden="true">
            <span>❦</span>
            <span>❦</span>
          </div>
        </div>
      </section>

      {/* 5. CLOSING BLESSING & SIGNATURE */}
      <footer className="closing-section reveal-on-scroll">
        <div className="closing-frame">
          <div className="closing-top-symbol" aria-hidden="true">✦</div>
          <p className="closing-subtitle">With love, prayers &amp; gratitude</p>
          <p className="closing-prayer">
            &ldquo;May Allah bless their union and fill their lives with love, peace and barakah.&rdquo;
          </p>
          <div className="gold-ornament-divider" aria-hidden="true">
            <span className="ornament-line" />
            <svg viewBox="0 0 24 24" className="ornament-icon" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
            <span className="ornament-line" />
          </div>
          <h2 className="closing-monogram-names">
            Shiba <span>&amp;</span> Adheeb
          </h2>
        </div>
      </footer>
    </div>
  )
}

function Unit({ value, label }) {
  const formattedValue = String(value).padStart(2, '0')
  return (
    <div className="countdown-unit-card">
      <div className="unit-number-wrap">
        <span className="unit-number">{formattedValue}</span>
      </div>
      <span className="unit-label">{label}</span>
    </div>
  )
}
