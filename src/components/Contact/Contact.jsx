import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Form submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>Techzistors@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-social">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📸</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form card">
            <h3>Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;