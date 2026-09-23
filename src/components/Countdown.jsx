import { useEffect, useState } from 'react'

const WEDDING_DATE = new Date('2026-12-23T11:00:00+05:30').getTime()

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

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown" id="countdown">
      <div className="countdown-inner">
        <p className="eyebrow">Until 23.12.2026</p>
        <h2 className="script-title light">The countdown begins</h2>
        {timeLeft ? (
          <div className="countdown-grid">
            <Unit value={timeLeft.days} label="Days" />
            <Unit value={timeLeft.hours} label="Hours" />
            <Unit value={timeLeft.minutes} label="Minutes" />
            <Unit value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : <p className="countdown-complete">Our special day has arrived.</p>}
      </div>
    </section>
  )
}

function Unit({ value, label }) {
  return <div className="countdown-unit"><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>
}
