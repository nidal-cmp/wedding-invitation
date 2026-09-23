import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import InvitationHome from './components/InvitationHome.jsx'
import Countdown from './components/Countdown.jsx'
import EventDetails from './components/EventDetails.jsx'
import Venue from './components/Venue.jsx'
import Closing from './components/Closing.jsx'
import FamilyGreetings from './components/FamilyGreetings.jsx'
import Reveal from './components/Reveal.jsx'

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
        <Reveal><InvitationHome /></Reveal>
        <Reveal delay="120ms"><Countdown /></Reveal>
        <Reveal delay="80ms"><EventDetails /></Reveal>
        <Reveal delay="140ms"><Venue /></Reveal>
        <Reveal delay="100ms"><FamilyGreetings /></Reveal>
        <Reveal delay="120ms"><Closing /></Reveal>
      </main>
    </div>
  )
}
