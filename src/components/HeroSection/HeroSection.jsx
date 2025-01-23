import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-small-text">بسم الله الرحمن الرحيم</p>
        <h1 className="hero-main-text">مركز نوربوتن الإسلامي</h1>
        <h2 className="hero-subtitle">NORBOTTENS ISLAMISKA CENTER</h2>
        <p className="hero-description">
          Norrbottens Islamiska Center represents a Muslim community living in the northern county of Sweden, Norrbotten.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;