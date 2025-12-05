import './App.css'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'
import Location from './components/Location'

function App() {
  return (
    <div className="invitation-container">
      <header className="header-section">
        <h1 className="couple-names">Rəşid & Zəhraxanım</h1>
        <p className="invitation-text">
          Sizi dəvət edirik!
        </p>
        <p className="wedding-date">21 Dekabr 2025</p>
      </header>

      <main className="main-content">
        
        <Countdown />

        <section className="welcome-section">
          <h2>Bizə Qoşulun</h2>
          <p>Yeni bir həyatın səhifəsini birlikdə açmağa dəvət olunmuşsunuz</p>
        </section>

        <Timeline />

        <Location />

        <section className="rsvp-section">
        <h2>~ Hörmətlə: Rəşid Rəşadət oğlu. ~</h2>
        </section>
      </main>

      <footer className="footer-section">
        
      </footer>
    </div>
  )
}

export default App
