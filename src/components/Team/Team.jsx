import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section id="team" className="team-section section">
      <div className="team-bg"></div>
      <div className="container">
        <h2 className="section-title">Meet Our <span className="text-gradient">Team</span></h2>

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