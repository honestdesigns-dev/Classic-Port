import React, { useEffect, useRef } from 'react';

const BackgroundGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const cellSize = 25;
    let cols, rows;
    
    // Define the random pastel colors for grid cells based on the image
    const colors = [
      'rgba(231, 252, 232, 0.8)', // Light green
      'rgba(255, 232, 232, 0.8)', // Light pink
      'rgba(232, 244, 252, 0.8)', // Light blue
      'rgba(250, 232, 255, 0.8)'  // Light purple
    ];

    let staticColoredCells = [];
    
    // Mouse interaction variables
    let particles = [];
    let mouse = { x: -1000, y: -1000, radius: 150 };
    let animationFrameId;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.floor(canvas.width / cellSize) + 1;
      rows = Math.floor(canvas.height / cellSize) + 1;
      
      // Generate static colored cells
      staticColoredCells = [];
      const numColoredCells = Math.floor((cols * rows) * 0.015); // ~1.5% of cells are colored
      for (let i = 0; i < numColoredCells; i++) {
        staticColoredCells.push({
          col: Math.floor(Math.random() * cols),
          row: Math.floor(Math.random() * rows),
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Initialize particles for hover effect
      particles = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          particles.push({
            x: j * cellSize,
            y: i * cellSize,
            ox: j * cellSize,
            oy: i * cellSize,
            vx: 0,
            vy: 0,
            alpha: 0
          });
        }
      }
    };
    
    init();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      ctx.beginPath();
      for(let i=0; i<=cols; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
      }
      for(let i=0; i<=rows; i++) {
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
      }
      ctx.strokeStyle = 'rgba(17, 17, 17, 0.08)';
      ctx.stroke();

      // Draw static colored cells
      staticColoredCells.forEach(cell => {
        ctx.fillStyle = cell.color;
        ctx.fillRect(cell.col * cellSize, cell.row * cellSize, cellSize, cellSize);
      });

      // Mouse hover effect
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        const dx = mouse.x - (p.x + cellSize/2);
        const dy = mouse.y - (p.y + cellSize/2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.vx -= (dx / dist) * force * 3;
          p.vy -= (dy / dist) * force * 3;
          p.alpha = Math.min((p.alpha || 0) + 0.3, 1);
        } else {
          p.alpha = Math.max((p.alpha || 0) - 0.02, 0);
        }
        
        p.vx += (p.ox - p.x) * 0.04;
        p.vy += (p.oy - p.y) * 0.04;
        
        p.vx *= 0.85;
        p.vy *= 0.85;
        
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.alpha > 0.01) {
          ctx.fillStyle = `rgba(209, 213, 219, ${p.alpha})`; 
          ctx.fillRect(Math.round(p.x), Math.round(p.y), cellSize, cellSize);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => init();
    const handleMouseMove = (e) => { mouse.x = e.pageX; mouse.y = e.pageY; };
    const handleMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.body);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="bg-grid-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default BackgroundGrid;
