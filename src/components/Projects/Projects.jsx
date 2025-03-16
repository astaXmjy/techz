import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A full-featured online shopping platform with integrated payment systems.'
    },
    {
      id: 2,
      title: 'Healthcare App',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      description: 'Mobile application for patients to book appointments and track health metrics.'
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'Interactive dashboard for financial analytics and performance tracking.'
    },
    {
      id: 4,
      title: 'Smart Home System',
      category: 'iot',
      image: '/api/placeholder/400/300',
      description: 'IoT solution for home automation and energy efficiency monitoring.'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: '/api/placeholder/400/300',
      description: 'Mobile app for tracking workouts, nutrition, and wellness goals.'
    },
    {
      id: 6,
      title: 'Business Intelligence Tool',
      category: 'software',
      image: '/api/placeholder/400/300',
      description: 'Enterprise software for data analysis and business intelligence.'
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'software', label: 'Software' },
    { value: 'iot', label: 'IoT Solutions' }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">Our <span className="text-gradient">Projects</span></h2>
        
        <div className="projects-filter">
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
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href="#" className="project-link">View Project</a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-category">
                  <span>{filters.find(f => f.value === project.category)?.label || project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-more">
          <button className="btn">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;