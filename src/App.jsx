import { useEffect, useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import CompactInvitation from './components/CompactInvitation.jsx'
import './index.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [revealing, setRevealing] = useState(false)

  const enterInvitation = () => {
    if (opened) return
    setOpened(true)
    setRevealing(true)
    window.setTimeout(() => setRevealing(false), 1650)
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }))
  }

  useEffect(() => {
    document.body.classList.toggle('invitation-locked', !opened)
    return () => document.body.classList.remove('invitation-locked')
  }, [opened])

  return (
    <div className={`invitation ${opened ? 'invitation--opened' : 'invitation--locked'} ${revealing ? 'invitation--revealing' : ''}`}>
      <OpeningGate open={opened} onEnter={enterInvitation} />
      <main id="invitation-content" className="invitation-content">
        <CompactInvitation />
      </main>
    </div>
  )
}
