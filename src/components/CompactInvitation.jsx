import { useEffect, useRef, useState } from 'react'

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

function useRevealOnScroll() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(node)
      }
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useRevealOnScroll()
  return (
    <div ref={ref} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function CompactInvitation() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const heroRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const node = heroRef.current
    if (!node) return
    let raf = 0
    const update = () => {
      const rect = node.getBoundingClientRect()
      const progress = Math.max(-1, Math.min(1, -rect.top / Math.max(1, node.offsetHeight)))
      node.style.setProperty('--hero-shift', `${progress * 12}px`)
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="compact-invitation">
      <section ref={heroRef} className="hero-section parallax-section" id="home">
        <div className="hero-arch parallax-slow" aria-hidden="true" />
        <div className="hero-leaf hero-leaf--one" aria-hidden="true">❧</div>
        <div className="hero-leaf hero-leaf--two" aria-hidden="true">❧</div>

        <div className="hero-content">
          <Reveal className="hero-stagger" delay={80}><p className="bismillah">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ</p></Reveal>
          <Reveal className="hero-stagger" delay={180}><p className="eyebrow">Together with their families</p></Reveal>
          <Reveal className="hero-stagger" delay={280}><p className="invite-line">You are warmly invited to celebrate the wedding of</p></Reveal>

          <div className="couple-names">
            <Reveal className="couple-person couple-person--left" delay={360}>
              <span>Dr.</span>
              <h1>Shiba <small>CMP</small></h1>
              <p>D/o C M P Yousef &amp; Raihana Edavath</p>
            </Reveal>

            <Reveal className="couple-symbol-reveal" delay={480}><div className="couple-symbol" aria-hidden="true">&amp;</div></Reveal>

            <Reveal className="couple-person couple-person--right" delay={560}>
              <span>Dr.</span>
              <h1>Adheeb <small>Mohamedali C V</small></h1>
              <p>S/o Mohamedali CV &amp; Bushara Khader</p>
            </Reveal>
          </div>

          <Reveal delay={700}><div className="gold-rule"><i /><b>✦</b><i /></div></Reveal>
          <Reveal delay={790}><p className="hero-date">23.12.2026</p></Reveal>
          <Reveal delay={870}><p className="hero-venue">Bianco Castle · Tirur</p></Reveal>
        </div>
      </section>

      <section className="quick-info scroll-stage">
        <Reveal className="countdown-mini-reveal" delay={0}>
          <div className="countdown-mini">
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
            ) : <p className="arrived">Our special day has arrived.</p>}
          </div>
        </Reveal>

        <Reveal className="event-card-reveal" delay={120}>
          <div className="event-card">
            <div className="event-item event-item--left">
              <span className="event-label">DATE</span>
              <strong>23.12.2026</strong>
              <small>Wednesday</small>
            </div>
            <div className="event-divider" />
            <div className="event-item event-item--right">
              <span className="event-label">VENUE</span>
              <strong>Bianco Castle</strong>
              <small>Tirur, Kerala</small>
            </div>
          </div>
        </Reveal>

        <Reveal className="actions-reveal" delay={240}>
          <div className="actions">
            <a className="primary-action" href={MAPS_URL} target="_blank" rel="noreferrer">
              Open in Google Maps <span>↗</span>
            </a>
            <a className="secondary-action" href={GOOGLE_CALENDAR_URL} target="_blank" rel="noreferrer">
              Add to Google Calendar
            </a>
          </div>
        </Reveal>
      </section>

      <Reveal className="greeting-reveal" delay={0}>
        <section className="greeting-section">
          <div className="gold-rule"><i /><b>✦</b><i /></div>
          <p className="eyebrow">Best regards from</p>
          <p className="greeting-script">Shamna, Sahla, Rashid,<br />Kith and Kin</p>
          <div className="greeting-botanical greeting-botanical--left" aria-hidden="true">❦</div>
          <div className="greeting-botanical greeting-botanical--right" aria-hidden="true">❦</div>
        </section>
      </Reveal>

      <Reveal className="closing-reveal" delay={0}>
        <section className="closing-section cinematic-close">
          <div className="closing-frame">
            <p className="closing-label">With love, prayers &amp; gratitude</p>
            <p className="closing-note">May Allah bless their union and fill their lives with love, peace and barakah.</p>
            <div className="gold-rule"><i /><b>✦</b><i /></div>
            <p className="closing-names">Shiba <span>&amp;</span> Adheeb</p>
          </div>
        </section>
      </Reveal>
    </div>
  )
}

function Unit({ value, label }) {
  return (
    <div className="countdown-unit">
      <strong key={`${label}-${value}`}>{String(value).padStart(2, '0')}</strong>
      <span>{label}</span>
    </div>
  )
}
