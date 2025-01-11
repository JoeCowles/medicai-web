import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <h2>MedicAI</h2>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#showcase">App</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Your Personal Medical Assistant</h1>
        <p>Powered by advanced AI to help you understand medical conditions better</p>
      </header>

      <section id="features" className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Instant Medical Information</h3>
            <p>Get reliable information about medical conditions instantly</p>
          </div>
          <div className="feature-card">
            <h3>Symptom Analysis</h3>
            <p>Understand your symptoms with AI-powered analysis</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Availability</h3>
            <p>Access medical information whenever you need it</p>
          </div>
          <div className="feature-card">
            <h3>User-Friendly Interface</h3>
            <p>Simple and intuitive design for easy navigation</p>
          </div>
        </div>
      </section>

      <section id="showcase" className="showcase">
        <h2>App Preview</h2>
        <div className="mockup-grid">
          <img src={process.env.PUBLIC_URL + '/one.png'} alt="MedicAI App Preview 1" className="mockup-image" />
          <img src={process.env.PUBLIC_URL + '/two.png'} alt="MedicAI App Preview 2" className="mockup-image" />
          <img src={process.env.PUBLIC_URL + '/three.png'} alt="MedicAI App Preview 3" className="mockup-image" />
          <img src={process.env.PUBLIC_URL + '/four.png'} alt="MedicAI App Preview 4" className="mockup-image" />
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Get Support</h2>
        <p>Have questions or need assistance? We're here to help!</p>
        <a href="mailto:joe.cowles@icloud.com" className="contact-button">
          Contact Support
        </a>
      </section>

      <footer className="footer">
        <p>© 2024 MedicAI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
