import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <header className="hero">
        <img src="/hardphasetracker/logo.png" alt="HardPhase Tracker Logo" className="app-logo" />
        <h1>HardPhase Tracker</h1>
        <h2>Minimalist Fasting Tracker</h2>
        <p className="lead">Track your fasting journey with simplicity and precision.</p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary">Download on the App Store</a>
        </div>
      </header>

      <section className="features">
        <h3>Features</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <h4>Multiple Schedules</h4>
            <p>16/8, 18/6, 20/4, OMAD, 5:2, ADF, and more.</p>
          </div>
          <div className="feature-item">
            <h4>Custom Windows</h4>
            <p>Create eating windows tailored to your lifestyle.</p>
          </div>
          <div className="feature-item">
            <h4>Meal Logging</h4>
            <p>Log meals with reusable templates.</p>
          </div>
          <div className="feature-item">
            <h4>Health Integration</h4>
            <p>Visualizes weight trends using Apple Health data.</p>
          </div>
          <div className="feature-item">
            <h4>Privacy First</h4>
            <p>All data is stored locally. We don't collect your info.</p>
          </div>
        </div>
      </section>

      <section className="privacy-note">
        <h3>Privacy First</h3>
        <p>
          HardPhase Tracker reads your weight, body fat percentage, and sleep data from Apple Health to show personalized trends. 
          Your health data stays private and secure on your device.
        </p>
        <Link to="/privacy-policy">Read our Privacy Policy</Link>
      </section>

      <footer>
        <p>&copy; 2026 Gordon Beeming. All rights reserved.</p>
        <p><a href="https://github.com/gordonbeeming/HardPhaseTracker">Support & Source Code</a></p>
      </footer>
    </div>
  );
};

export default Home;
