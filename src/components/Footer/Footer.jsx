import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-logo">TECH<span className="text-gradient">ZISTORS</span></h3>
              <p>
                We provide innovative technology solutions to help businesses thrive in the digital era. 
                Our expert team is dedicated to delivering exceptional results for our clients.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link">🐦</a>
                <a href="#" className="footer-social-link">📱</a>
                <a href="#" className="footer-social-link">📘</a>
                <a href="#" className="footer-social-link">📸</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                {/* <li><a href="#team">Team</a></li> */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-services">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">Cybersecurity</a></li>
                <li><a href="#services">AI & Machine Learning</a></li>
              </ul>
            </div>
            
            <div className="footer-newsletter">
              <h3>Subscribe</h3>
              <p>Subscribe to our newsletter to receive updates on our latest services and projects.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your Email" required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Techzistors. All Rights Reserved.</p>
          {/* <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;