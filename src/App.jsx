import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import CompactInvitation from './components/CompactInvitation.jsx'
import './index.css'

export default function App() {
  const [opened, setOpened] = useState(false)

  const enterInvitation = () => {
    setOpened(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className={`invitation ${opened ? 'invitation--opened' : 'invitation--locked'}`}>
      <OpeningGate open={opened} onEnter={enterInvitation} />
      <main id="invitation-content">
        <CompactInvitation />
      </main>
    </div>
  )
}
