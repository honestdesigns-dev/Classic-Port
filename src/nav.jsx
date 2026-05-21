import React from 'react';

const Nav = () => {
  const currentPath = window.location.pathname;

  const getIcon = (name, active) => {
    switch(name) {
      case 'home':
        return active ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        );
      case 'project':
        return active ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        );
      case 'about':
        return active ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bottom-nav-container">
      <nav className="bottom-nav">
        <a href="/" className={`nav-item ${currentPath === '/' ? 'active' : ''}`}>
          <div className="nav-icon-wrapper">
            {getIcon('home', currentPath === '/')}
          </div>
          <span>Home</span>
        </a>
        <a href="/Project" className={`nav-item ${currentPath === '/Project' ? 'active' : ''}`}>
          <div className="nav-icon-wrapper">
            {getIcon('project', currentPath === '/Project')}
          </div>
          <span>Projects</span>
        </a>
        <a href="/About" className={`nav-item ${currentPath === '/About' ? 'active' : ''}`}>
          <div className="nav-icon-wrapper">
            {getIcon('about', currentPath === '/About')}
          </div>
          <span>About</span>
        </a>
      </nav>
    </div>
  );
};

export default Nav;
