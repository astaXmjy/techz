import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '💻',
      title: 'Web Development',
      description: 'We build responsive, user-friendly websites and web applications that deliver exceptional digital experiences.',
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Our expert team creates innovative mobile applications for iOS and Android platforms.',
    },
    {
      id: 3,
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'We develop secure, scalable online stores that drive sales and enhance customer engagement.',
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive cybersecurity solutions and services.',
    },
    {
      id: 5,
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Leverage the power of artificial intelligence to gain insights and automate processes.',
    },
    {
      id: 6,
      icon: '☁️',
      title: 'Cloud Services',
      description: 'We provide scalable cloud solutions that optimize performance and reduce operational costs.',
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="services-bg"></div>
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Services</span></h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#contact" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to transform your business with technology?</h3>
          <p>Contact us today to discuss how our services can help you achieve your goals.</p>
          <button className="btn services-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Services;