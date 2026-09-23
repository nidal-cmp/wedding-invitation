import { useState } from 'react'
import OpeningGate from './components/OpeningGate.jsx'
import InvitationHome from './components/InvitationHome.jsx'
import Countdown from './components/Countdown.jsx'
import EventDetails from './components/EventDetails.jsx'
import Venue from './components/Venue.jsx'
import Closing from './components/Closing.jsx'
import FamilyGreetings from './components/FamilyGreetings.jsx'
import MusicToggle from './components/MusicToggle.jsx'

export default function App() {
  const [opened, setOpened] = useState(false)

  const enterInvitation = () => {
    setOpened(true)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="invitation">
      <OpeningGate open={opened} onEnter={enterInvitation} />
      <main id="invitation-content">
        <InvitationHome />
        <Countdown />
        <EventDetails />
        <Venue />
        <FamilyGreetings />
        <Closing />
      </main>
      <MusicToggle />
    </div>
  )
}
