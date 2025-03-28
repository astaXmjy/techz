import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/hero/hero-main.png';

const Hero = () => {
  const handleGetStarted = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuum4IQWfUMNuSeKKXUengV6A0yfTrFxfsu2DP7JQPi8jCqQ/viewform', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative <span className="text-gradient">Tech Solutions</span> for Modern Challenges
          </h1>
          <p className="hero-subtitle">
            We provide cutting-edge technology solutions to help businesses thrive in the digital era
          </p>
          <div className="hero-buttons">
            <button className="btn hero-btn-primary" onClick={handleGetStarted}>Get Started</button>
            <button className="btn hero-btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src={heroImage} alt="Tech Solutions" />
          </div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#121212" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;