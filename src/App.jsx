import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import ReferenceInvitation from './components/ReferenceInvitation.jsx'
import './index.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const handleOpen = () => {
    setOpened(true)
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  }
  return (
    <div className={`invitation ${opened ? 'invitation--opened' : 'invitation--locked'}`}>
      <OpeningGate open={opened} onEnter={handleOpen} />
      <main><ReferenceInvitation /></main>
    </div>
  )
}
