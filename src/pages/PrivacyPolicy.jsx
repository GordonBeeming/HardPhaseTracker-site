import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="container privacy-page">
      <header>
        <h1>Privacy Policy</h1>
        <p>Last updated: January 4, 2026</p>
      </header>

      <section>
        <h2>Introduction</h2>
        <p>
          HardPhase Tracker ("we", "our", or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how your personal information is collected, used, and disclosed by HardPhase Tracker.
        </p>
      </section>

      <section>
        <h2>Data Collection and Use</h2>
        <p>
          <strong>We do not collect, transmit, or store your personal data on our servers.</strong>
        </p>
        <p>
          HardPhase Tracker operates entirely on your device. All data you enter into the app (such as fasting schedules, meal logs, and settings) is stored locally on your device using SwiftData.
        </p>
      </section>

      <section>
        <h2>Apple Health Integration</h2>
        <p>
          HardPhase Tracker integrates with Apple Health (HealthKit) to read the following data types:
        </p>
        <ul>
          <li>Weight</li>
          <li>Body Fat Percentage</li>
          <li>Sleep Analysis</li>
        </ul>
        <p>
          This data is used solely to display trends and visualizations within the app. 
          <strong>We do not write data to Apple Health, and we do not share your health data with any third parties.</strong>
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          The app does not use any third-party analytics or tracking services.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our GitHub repository:
        </p>
        <p>
          <a href="https://github.com/gordonbeeming/HardPhaseTracker">https://github.com/gordonbeeming/HardPhaseTracker</a>
        </p>
      </section>

      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
