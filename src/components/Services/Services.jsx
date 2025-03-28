import React from 'react';
import './Services.css';

// Import service images - replace these paths with your actual image paths
import industrialAutomationImg from '../../assets/images/services/industrial-automation.jpg';
import iotRoboticsCurriculumImg from '../../assets/images/services/iot-robotics-curriculum.jpg';
import internshipsImg from '../../assets/images/services/internships.jpg';
import electronicsTrainingImg from '../../assets/images/services/electronics-training.jpg';
import smartManufacturingImg from '../../assets/images/services/smart-manufacturing.jpg';
import customHardwareImg from '../../assets/images/services/custom-hardware.jpg';

const Services = () => {
  const handleGetStarted = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeuum4IQWfUMNuSeKKXUengV6A0yfTrFxfsu2DP7JQPi8jCqQ/viewform', '_blank');
  };

  const services = [
    {
      id: 1,
      icon: industrialAutomationImg,
      title: 'Industrial Automation in Embedded Systems',
      description: 'We design and implement cutting-edge automation solutions for manufacturing and industrial processes using advanced embedded systems. Our solutions enhance efficiency, reduce operational costs, and minimize human error in industrial environments.',
      details: [
        'PLC and microcontroller-based automation systems',
        'SCADA implementation and integration',
        'Custom sensor networks for real-time monitoring',
        'Industrial IoT solutions for factories and plants',
        'Predictive maintenance systems'
      ]
    },
    {
      id: 2,
      icon: iotRoboticsCurriculumImg,
      title: 'Curriculum for IoT and Robotics',
      description: 'We develop comprehensive educational curricula for institutions and organizations looking to teach IoT and robotics. Our course materials are designed by industry experts and include hands-on projects, theoretical foundations, and real-world applications.',
      details: [
        'Age-appropriate learning modules for K-12, undergraduate, and professional levels',
        'Hands-on project-based learning materials',
        'Industry-aligned skill development tracks',
        'Assessment tools and certification pathways',
        'Teacher training and support resources'
      ]
    },
    {
      id: 3,
      icon: internshipsImg,
      title: 'Internships and Summer Camps in Robotics and IoT',
      description: 'We offer immersive learning experiences through structured internship programs and engaging summer camps focused on robotics and IoT technologies. Participants gain practical skills while working on real projects under expert guidance.',
      details: [
        'Remote and in-person internship opportunities',
        'Week-long and month-long intensive summer camps',
        'Project-based learning with industry mentors',
        'Career guidance and professional development',
        'Opportunities to work on real-world client projects',
        'Competitions and hackathons'
      ]
    },
    {
      id: 4,
      icon: electronicsTrainingImg,
      title: 'Advanced Electronics and Embedded System Training',
      description: 'Our specialized training programs provide in-depth knowledge of advanced electronics and embedded systems. From circuit design to firmware development, we cover all aspects needed to build sophisticated electronic solutions.',
      details: [
        'PCB design and manufacturing processes',
        'Microcontroller programming (ARM, AVR, PIC)',
        'RTOS implementation for embedded applications',
        'Low-power design techniques',
        'Embedded Linux development',
        'Sensor interfacing and signal processing',
        'Wireless communication protocols (BLE, WiFi, LoRa)'
      ]
    },
    {
      id: 5,
      icon: customHardwareImg,
      title: 'Smart Manufacturing Consulting',
      description: 'We help manufacturing businesses transform their operations through Industry 4.0 technologies. Our consulting services guide organizations in implementing smart manufacturing solutions that improve productivity, quality, and operational visibility.',
      details: [
        'Digital transformation roadmap development',
        'Manufacturing execution system (MES) implementation',
        'Production floor IoT infrastructure planning',
        'Data analytics for manufacturing optimization',
        'Legacy system integration with modern technologies',
        'ROI analysis and implementation planning',
        'Staff training for new technological systems'
      ]
    },
    {
      id: 6,
      icon: smartManufacturingImg,
      title: 'Custom Hardware & Firmware Development',
      description: 'We design and develop bespoke hardware solutions with tightly integrated firmware to meet specialized requirements across industries. Our end-to-end development process ensures hardware that perfectly aligns with your specific needs.',
      details: [
        'Custom PCB design and prototyping',
        'Full electronic product development',
        'Firmware development for specialized applications',
        'Power optimization for battery-operated devices',
        'Environmental hardening for industrial applications',
        'Miniaturization and form factor optimization',
        'Compliance and certification assistance (CE, FCC, UL)'
      ]
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
              <div className="service-icon">
                <img src={service.icon} alt={service.title} className="service-icon-img" />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <h4>What we offer:</h4>
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="service-link">Learn More</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to transform your technology training and automation needs?</h3>
          <p>Contact us today to discuss how our specialized services can help you achieve your goals in industrial automation, IoT, and robotics.</p>
          <button className="btn services-btn" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Services;