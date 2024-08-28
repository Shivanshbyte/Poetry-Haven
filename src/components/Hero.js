import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Discover the World of Poetry</h2>
        <input type="text" className="search-bar" placeholder="Search Poet..." />
        <button className="subscribe-btn">Subscribe Now</button>
      </div>
    </section>
  );
}

export default Hero;
