import React from 'react';
import './About.css';

import aboutImage from '../../assets/images/about/about-us.jpg';

// Import images - this is how you import images in React
// For example: import aboutImage from '../../assets/images/about-image.jpg';
// For example: import teamImage from '../../assets/images/team-image.jpg';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <h2 className="section-title">About <span className="text-gradient">Techzistors</span></h2>
        
        <div className="about-container">
          <div className="about-image">
            {/* Replace with your actual image path */}
            <img src={aboutImage} alt="About Techzistors" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years<br />Experience</span>
            </div>
          </div>
          
          <div className="about-content">
            <h3 className="about-subtitle">Leading Tech Innovation Since 2012</h3>
            <p className="about-text">
              Techzistors was founded with a vision to revolutionize how businesses interact with technology. 
              We're a team of passionate innovators, developers, and designers committed to delivering 
              cutting-edge tech solutions that drive business growth and digital transformation.
            </p>
            <p className="about-text">
              Our expertise spans across web development, mobile applications, cloud services, and cybersecurity. 
              We pride ourselves on our client-centered approach, ensuring that every project we undertake 
              is tailored to meet the unique challenges and goals of our clients.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="feature-circle"></i>
                </div>
                <div className="feature-content">
                  <h4>Forward-Thinking Solutions</h4>
                  <p>We develop innovative technologies that prepare your business for the future.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="feature-circle"></i>
                </div>
                <div className="feature-content">
                  <h4>Dedicated Support Team</h4>
                  <p>Our team provides 24/7 technical support and maintenance for all clients.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="feature-circle"></i>
                </div>
                <div className="feature-content">
                  <h4>End-to-End Services</h4>
                  <p>From concept to deployment, we handle every step of your tech journey.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="feature-circle"></i>
                </div>
                <div className="feature-content">
                  <h4>Industry Expertise</h4>
                  <p>We've delivered successful solutions across finance, healthcare, retail, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="about-metrics">
              <div className="metric">
                <span className="metric-number">200+</span>
                <span className="metric-label">Projects Completed</span>
              </div>
              <div className="metric">
                <span className="metric-number">50+</span>
                <span className="metric-label">Expert Team Members</span>
              </div>
              <div className="metric">
                <span className="metric-number">98%</span>
                <span className="metric-label">Client Satisfaction</span>
              </div>
            </div>
            
            <button className="btn about-btn">Explore Our Story</button>
          </div>
        </div>
        
        <div className="mission-vision">
          <div className="mission card">
            <h3>Our Mission</h3>
            <p>To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation.</p>
          </div>
          <div className="vision card">
            <h3>Our Vision</h3>
            <p>To be the leading technology partner for businesses worldwide, known for our excellence, innovation, and client-centered approach.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;