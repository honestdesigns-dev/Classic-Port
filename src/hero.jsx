import React, { useState, useEffect } from 'react';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  
  useEffect(() => {
    let iteration = 0;
    const chars = '0123456789';
    let interval = null;
    let timeout = null;

    const runAnimation = () => {
      iteration = 0;
      interval = setInterval(() => {
        setDisplayText(text.split('').map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        }).join(''));
        
        if (iteration >= text.length) {
          clearInterval(interval);
          timeout = setTimeout(runAnimation, 3000);
        }
        iteration += 1 / 3;
      }, 40);
    };

    runAnimation();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <span 
      style={{ 
        fontFamily: "'Courier New', Courier, monospace", 
        fontWeight: "bold",
        backgroundColor: "#93c5fd",
        color: "black",
        padding: "2px 8px",
        borderRadius: "4px",
        display: "inline-block",
        cursor: "default",
      }}
    >
      {displayText}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-header">
        <h1>Turning concepts into <span style={{backgroundColor: "#f9a8d4", color: "black", padding: "2px 8px", borderRadius: "4px", display: "inline-block", cursor: "default"}}>engaging</span> products</h1>
        <div className="hero-tags">
          <span className="tag yellow">BRAND DESIGN</span>
          <span className="tag pink">PRODUCT DESIGN</span>
          <span className="tag blue">MOTION GRAPHIC DESIGN</span>
        </div>
      </div>
      <p className="hero-desc">
        I’m <ScrambleText text="Honestraj" />, a UIUX designer with <span style={{backgroundColor: "#93c5fd", color: "black", padding: "2px 8px", borderRadius: "4px", display: "inline-block", cursor: "default"}}>4</span> years of experience in the field. I specialize in creating visually appealing and effective designs for a wide range of clients. My work includes logos, posters, social media graphics, and other marketing materials. I am passionate about design and always strive to create work that is both creative and functional. I am also a quick learner and am always open to new challenges and opportunities.
      </p><br />
      <button style={{ backgroundColor: "#fde047", color: "#111111", padding: "14px 20px", borderRadius: "10px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer", border: "none" }}>View My Work</button>
    </section>
  );
};

export default Hero;
