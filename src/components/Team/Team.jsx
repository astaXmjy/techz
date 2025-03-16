import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'CTO',
      image: '/api/placeholder/300/300',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: '/api/placeholder/300/300',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'UI/UX Designer',
      image: '/api/placeholder/300/300',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="team" className="team-section section">
      <div className="team-bg"></div>
      <div className="container">
        <h2 className="section-title">Meet Our <span className="text-gradient">Team</span></h2>
        
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-card card" key={member.id}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
                <div className="team-social">
                  <a href={member.social.twitter} className="social-link">
                    <i className="social-icon">🐦</i>
                  </a>
                  <a href={member.social.linkedin} className="social-link">
                    <i className="social-icon">🔗</i>
                  </a>
                  <a href={member.social.github} className="social-link">
                    <i className="social-icon">🐙</i>
                  </a>
                </div>
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <div className="cta-content">
            <h3>Want to Join Our Team?</h3>
            <p>We're always looking for talented individuals to join our growing team.</p>
          </div>
          <button className="btn team-btn">View Openings</button>
        </div>
      </div>
    </section>
  );
};

export default Team;