import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'

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
  const [ref, visible] = useReveal()
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="countdown" ref={ref}>
      <div className={`countdown-inner reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">Counting down to</p>
        <h2 className="script-title light">Our Special Day</h2>
        {timeLeft ? (
          <div className="countdown-grid">
            <Unit value={timeLeft.days} label="Days" />
            <Unit value={timeLeft.hours} label="Hours" />
            <Unit value={timeLeft.minutes} label="Minutes" />
            <Unit value={timeLeft.seconds} label="Seconds" />
          </div>
        ) : <p className="countdown-complete">May Allah bless our new beginning.</p>}
        <p className="countdown-note">May Allah bless our union and fill it with love, peace and barakah.</p>
      </div>
    </section>
  )
}

function Unit({ value, label }) {
  return <div className="countdown-unit"><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>
}
