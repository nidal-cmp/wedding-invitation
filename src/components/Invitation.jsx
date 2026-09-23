import useReveal from '../hooks/useReveal'

export default function Invitation() {
  const [ref, visible] = useReveal()
  return (
    <section className="section invitation-message" id="invitation" ref={ref}>
      <div className={`reveal ${visible ? 'is-visible' : ''}`}>
        <p className="eyebrow">With hearts full of joy</p>
        <h2 className="script-title">We&apos;re getting married</h2>
        <p className="body-copy">
          With the blessings of our families, we invite you to share in the joy
          of our wedding day. Your presence and prayers would mean the world to us.
        </p>
        <div className="quote">“And We created you in pairs”<small>Qur&apos;an 78:8</small></div>
      </div>
    </section>
  )
}
