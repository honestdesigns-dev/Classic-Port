import React, { useState, useEffect, useRef } from 'react';
import Nav from './nav';
import Hero from './hero';

const Home = () => {

  return (
    <div>
      <Nav />

      <Hero />
      {/* Stats Section */}
      <section className="stats-section">
        <div className="marquee">
          <div className="marquee-content">
            ✦ CREATIVE DESIGN ✦ BOLD IDEAS ✦ JAW-DROPPING RESULTS ✦ BRUTALIST AESTHETIC ✦ CREATIVE DESIGN ✦ BOLD IDEAS ✦ JAW-DROPPING RESULTS ✦ BRUTALIST AESTHETIC ✦
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
