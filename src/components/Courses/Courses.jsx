import React, { useState } from 'react';
import './Courses.css';

// Import course images - replace with your actual paths
import roboticsBeginnerImg from '../../assets/images/courses/robotics-beginners.jpg';
import roboticsEmbeddedImg from '../../assets/images/courses/robotics-embedded.jpg';
import roboticsIotImg from '../../assets/images/courses/robotics-iot.jpg';
import embeddedFirmwareImg from '../../assets/images/courses/embedded-firmware.jpg';
import industrialIotImg from '../../assets/images/courses/industrial-iot.jpg';
import aiEmbeddedImg from '../../assets/images/courses/ai-embedded.jpg';

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const courses = [
    {
      id: 1,
      title: 'Robotics for Beginners',
      category: 'robotics',
      image: roboticsBeginnerImg,
      description: 'A comprehensive introduction to robotics fundamentals, perfect for students with no prior experience.',
      details: {
        duration: '8 weeks',
        level: 'Beginner',
        format: 'Hands-on workshops + online modules',
        includes: 'Starter robotics kit, course materials, and certification'
      }
    },
    {
      id: 2,
      title: 'Robotics & Embedded Training',
      category: 'robotics',
      image: roboticsEmbeddedImg,
      description: 'Learn to design, build, and program robots with embedded systems for advanced functionality.',
      details: {
        duration: '12 weeks',
        level: 'Intermediate',
        format: 'Instructor-led + lab sessions',
        includes: 'Advanced robotics hardware, programming tools, and project assessment'
      }
    },
    {
      id: 3,
      title: 'Robotics & IoT Training',
      category: 'iot',
      image: roboticsIotImg,
      description: 'Connect your robotic systems to the internet and implement cloud-based monitoring and control.',
      details: {
        duration: '10 weeks',
        level: 'Intermediate to Advanced',
        format: 'Blended learning with practical projects',
        includes: 'IoT components, cloud platform access, and technical support'
      }
    },
    {
      id: 4,
      title: 'Embedded Systems & Advanced Firmware Development',
      category: 'embedded',
      image: embeddedFirmwareImg,
      description: 'Master the art of firmware development for microcontrollers and embedded systems applications.',
      details: {
        duration: '16 weeks',
        level: 'Advanced',
        format: 'Deep-dive workshops with industry projects',
        includes: 'Development boards, debugging tools, and professional certification'
      }
    },
    {
      id: 5,
      title: 'Industrial Automation & IoT',
      category: 'industrial',
      image: industrialIotImg,
      description: 'Implement Industry 4.0 concepts with practical automation solutions using IoT technologies.',
      details: {
        duration: '14 weeks',
        level: 'Professional',
        format: 'Case studies and implementation projects',
        includes: 'Industrial controllers, sensors, and simulation software'
      }
    },
    {
      id: 6,
      title: 'AI & Machine Learning for Embedded Systems',
      category: 'ai',
      image: aiEmbeddedImg,
      description: 'Apply artificial intelligence and machine learning techniques to resource-constrained embedded systems.',
      details: {
        duration: '12 weeks',
        level: 'Advanced',
        format: 'Theory sessions with practical implementations',
        includes: 'AI-capable hardware, datasets, and model deployment tools'
      }
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Courses' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'embedded', label: 'Embedded Systems' },
    { value: 'iot', label: 'IoT' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'ai', label: 'AI & ML' }
  ];

  const filteredCourses = activeFilter === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);
  
  return (
    <section id="courses" className="courses-section section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Courses</span></h2>
        
        <div className="courses-filter">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div className="course-card card" key={course.id}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-overlay">
                  <a href="#contact" className="course-enroll-btn">Enroll Now</a>
                </div>
              </div>
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{course.details.duration}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Level:</span>
                    <span className="meta-value">{course.details.level}</span>
                  </div>
                </div>
                
                <div className="course-includes">
                  <h4>Course Includes:</h4>
                  <p>{course.details.includes}</p>
                </div>
                
                <div className="course-action">
                  <a href="#contact" className="course-details-link">View Course Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="courses-more">
          <div className="more-content">
            <h3>Transform Your Career with Our Technical Training</h3>
            <p>Our hands-on courses are designed by industry experts to give you the skills employers need in today's technology landscape.</p>
          </div>
          <a href="#contact" className="btn">Request Course Catalog</a>
        </div>
      </div>
    </section>
  );
};

export default Courses;