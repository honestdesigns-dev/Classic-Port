import React from 'react';
import Nav from './nav';
import './project.css';

const projects = [
  {
    title: 'Awal Plastics',
    desc: 'Scalable Enterprise ERP with 12 modules and a custom design system.',
  },
  {
    title: 'Zydco',
    desc: 'AI-powered ERP system with 3,200+ wireframes for workflow efficiency.',
  },
  {
    title: 'Excellent Education',
    desc: 'Intuitive education platform improving the student admission experience.',
  },
  {
    title: 'Excellent Hospital',
    desc: 'Clean hospital website for appointments and healthcare services.',
  },
  {
    title: 'LightUp Temples',
    desc: 'Spiritual booking platform for seamless online pooja reservations.',
  },
  {
    title: 'Mistnov',
    desc: 'Modern hotel booking experience for smooth reservations.',
  },
  {
    title: 'Scrum Maintenance',
    desc: 'Internal productivity platform to manage tasks and team workflows.',
  },
];

const Project = () => {
  return (
    <div className="project-wrapper">
      <Nav />
      <section id="project" className="portfolio-container">
        <div className="about-header">
          <h1 className="sticker-title" data-text="Projects">Projects</h1>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, index) => (
            <div className="premium-card" key={index}>
              {/* Large Image Preview Container */}
              <div className="premium-card-image">
                <div className="premium-card-image-placeholder">
                  {p.title}
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="premium-card-content">
                
                {/* Project Title and Description Area */}
                <div className="premium-card-text">
                  <h3 className="premium-card-title">{p.title}</h3>
                  <p className="premium-card-desc">{p.desc}</p>
                </div>
                
                {/* Circular Action Button / Icon on Right */}
                <div className="premium-card-btn">
                  <svg viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
