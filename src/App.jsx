import React from 'react';
import './App.css'; // Importing CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Welcome to Our Amazing Service</h1>
          <p>Get started with us and experience excellence!</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>We provide top-notch services to help you succeed. Our goal is to deliver the best solutions tailored to your needs.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <button className="cta-button">Sign Up Now</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
