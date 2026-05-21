import React, { useState, useEffect } from 'react';
import Home from './home.jsx';
import About from './about.jsx';
import Project from './project.jsx';
import './App.css';
import BackgroundGrid from './BackgroundGrid';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  const path = currentPath.toLowerCase();

  let ComponentToRender = Home;
  if (path === '/about') {
    ComponentToRender = About;
  } else if (path === '/project' || path === '/projects') {
    ComponentToRender = Project;
  }

  return (
    <>
      <BackgroundGrid />
      <ComponentToRender />
    </>
  );
}

export default App;
