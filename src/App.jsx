import Hero from './components/Hero.jsx'
import Invitation from './components/Invitation.jsx'
import Couple from './components/Couple.jsx'
import Countdown from './components/Countdown.jsx'
import WeddingDetails from './components/WeddingDetails.jsx'
import Venue from './components/Venue.jsx'
import Family from './components/Family.jsx'
import Closing from './components/Closing.jsx'
import Footer from './components/Footer.jsx'
import MusicToggle from './components/MusicToggle.jsx'

export default function App() {
  return (
    <div className="invitation">
      <header className="topbar">
        <a className="monogram" href="#home" aria-label="Home">S <span>♡</span> A</a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#details">Details</a>
          <a href="#venue">Venue</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Invitation />
        <Couple />
        <Countdown />
        <WeddingDetails />
        <Venue />
        <Family />
        <Closing />
      </main>
      <Footer />
      <MusicToggle />
    </div>
  )
}
