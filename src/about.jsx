import React from 'react';
import Nav from './nav';
import './about.css';
import Figma from "./assets/fig.png";
import Framer from "./assets/Framer.png";
import Adobe from "./assets/xd.png";
import Illustrator from "./assets/ai.png";
import Aftereffects from "./assets/ae.png";
import Photoshop from "./assets/ps.png";
import Premiere from "./assets/pr.png";
import Creative from "./assets/creatie.png";
import Spline from "./assets/spline.png";
import Rush from "./assets/rush.png";
import Blender from "./assets/blender.png";

const About = () => {
  const tools = [
    { img: Figma, name: "Figma" },
    { img: Framer, name: "Framer" },
    { img: Adobe, name: "Adobe XD" },
    { img: Illustrator, name: "Illustrator" },
    { img: Aftereffects, name: "After Effects" },
    { img: Photoshop, name: "Photoshop" },
    { img: Premiere, name: "Premiere" },
    { img: Creative, name: "Creatie" },
    { img: Spline, name: "Spline" },
    { img: Rush, name: "Premiere Rush" },
    { img: Blender, name: "Blender" }
  ];

  const skills = [
    "User Interface Design", "UX Research", "Wireframing", 
    "Prototyping", "Motion Graphics", "Design Systems", 
    "Brand Identity", "Interaction Design"
  ];

  return (
    <div className="about-wrapper">
      <Nav />
      <section id="about" className="about-container">
        <div className="about-header">
          <h1 className="sticker-title" data-text="About me">About me</h1>
        </div>

        <div className="about-bento-grid">
          
          {/* Card 1: Intro */}
          <div className="bento-card intro-card">
            <span className="card-label">Hello there</span>
            <h3 className="intro-title">I craft intuitive digital experiences.</h3>
            <p className="intro-desc">
              I specialize in user-centered interfaces with a strong focus on aesthetics and seamless interactions. My philosophy merges engaging visuals with highly functional user flows to build experiences that feel native and effortless.
            </p>
          </div>

          {/* Card 3: Skills */}
          <div className="bento-card skills-card">
            <span className="card-label">Expertise</span>
            <div className="skills-wrapper">
              {skills.map((skill, i) => (
                <div key={i} className="bento-skill-tag">{skill}</div>
              ))}
            </div>
          </div>

          {/* Card 4: Stats */}
          <div className="bento-card stats-card">
            <div className="stat-content">
              <h2>4+</h2>
              <p>Years of<br/>Experience</p>
            </div>
          </div>

          {/* Card 5: Toolkit */}
          <div className="bento-card tools-card">
            <span className="card-label">Toolkit</span>
            <div className="bento-tools-grid">
              {tools.map((tool, i) => (
                <div key={i} className="bento-tool-icon" title={tool.name}>
                  <img src={tool.img} alt={tool.name} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
