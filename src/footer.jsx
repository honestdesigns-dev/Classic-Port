import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',padding: '20px'}}>
        <div className="footer-links">
          <a href="/Project">PORTFOLIO</a>
          <a href="/About">ABOUT</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </div>
        <p className="footer-bottom">© 2026 HONEST DESIGNS. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
