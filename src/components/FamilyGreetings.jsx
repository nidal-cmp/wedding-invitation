import { useEffect, useRef, useState } from 'react'

export default function FamilyGreetings() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.22 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`family-greetings ${visible ? 'is-visible' : ''}`}>
      <div className="family-greetings-inner">
        <div className="family-ornament" aria-hidden="true">
          <span />
          <b>✦</b>
          <span />
        </div>

        <p className="family-greetings-label">BEST REGARDS FROM</p>

        <p className="family-greetings-names">
          Shamna, Sahla, Rashid, Nahrin,
          <br className="family-break" />
          Kith and Kin
        </p>

        <div className="family-botanical" aria-hidden="true">
          <span>❦</span>
          <span>❦</span>
        </div>
      </div>
    </section>
  )
}
