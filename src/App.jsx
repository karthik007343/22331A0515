import { useState } from 'react'
import './App.css'

function App() {
  const [applications, setApplications] = useState(0)

  const scrollToSection = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <marquee className="announcement" scrollamount="6" behavior="scroll" direction="left">
        Admissions for the 2025 academic year are now open! Apply today and secure your spot at MVGR College.
      </marquee>

      <header className="header">
        <img src="data:image/jpeg;base64,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" alt="MVGR College Logo" className="college-logo" />

        <nav className="nav">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Us</a>
          <a href="#courses" onClick={(e) => scrollToSection(e, 'courses')}>Courses</a>
          <a href="#admissions" onClick={(e) => scrollToSection(e, 'admissions')}>Admissions</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img src="path/to/mvgr-banner.jpg" alt="MVGR College Banner" className="banner-image" />
        <h1>Welcome to MVGR College</h1>
        <p>Empowering students for a brighter tomorrow.</p>
      </section>

      <section id="about" className="about">
        <h2>About MVGR College</h2>
        <p>
          Since 1981, MVGR College has been dedicated to delivering quality education and fostering research.
          We’re passionate about shaping innovative minds and responsible leaders.
        </p>
      </section>

      <section id="courses" className="courses">
        <h2>Courses We Offer</h2>
        <ul>
          <li>B.Tech in Computer Science and Engineering</li>
          <li>B.Tech in Electronics and Communication</li>
          <li>B.Tech in Mechanical Engineering</li>
          <li>MBA - Master of Business Administration</li>
        </ul>
      </section>

      <section id="admissions" className="admissions">
        <h2>Admissions</h2>
        <p>
          Ready to join MVGR College? Submit your application and take the first step toward a successful career.
        </p>
        <button onClick={() => setApplications(applications + 1)}>
          Applications received: {applications}
        </button>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: info@mvgrcollege.ac.in</p>
        <p>Phone: +91 9988776644</p>
        <p>Address: Chinthalavalasa, Vizianagaram, Andhra Pradesh, India</p>
      </section>

      <footer className="footer">
        <p>© 2025 MVGR College. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
