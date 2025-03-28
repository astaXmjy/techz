import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleGetStarted = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuum4IQWfUMNuSeKKXUengV6A0yfTrFxfsu2DP7JQPi8jCqQ/viewform', '_blank');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <span className="logo-text">TECH<span className="text-gradient">ZISTORS</span></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#courses" onClick={toggleMenu}>Courses</a></li>
            {/* <li><a href="#team" onClick={toggleMenu}>Team</a></li> */}
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-button">
          <button className="btn" onClick={handleGetStarted}>Get Started</button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;