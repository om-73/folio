import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgImage from './assets/bg.jpg';

import CustomCursor from './components/CustomCursor';

function App() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [bgTransform, setBgTransform] = useState('scale(1)');

  // Add a fade-in animation on load
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('section');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  // Handle scroll for background dynamic effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Opacity: Fade in quickly, fully visible by 40% of viewport height
      const opacity = Math.min(1, Math.max(0, scrollPosition / (windowHeight * 0.4)));
      setBgOpacity(opacity);

      // Dynamic Transform: Subtle zoom and parallax
      // Scale starts at 1.0 (zoomed out) and increases slowly
      const scale = 1.0 + (scrollPosition * 0.0002);
      const translateY = scrollPosition * 0.05; // Restoring slightly more movement for depth
      setBgTransform(`scale(${scale}) translateY(${translateY}px)`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <CustomCursor />

      {/* Background Image Layer */}
      <div
        className="fixed-bg"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: bgOpacity,
          transform: bgTransform
        }}
      />

      {/* Dark overlay to ensure text readability on top of image */}
      <div
        className="fixed-bg-overlay"
        style={{ opacity: bgOpacity * 0.85 }}
      />

      {/* Ambient Glow Orbs - Decorative */}
      <div className="glow-orb" style={{ top: '10%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0,0,0,0) 70%)' }}></div>
      <div className="glow-orb" style={{ top: '40%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0) 70%)', animationDelay: '-5s' }}></div>
      <div className="glow-orb" style={{ bottom: '10%', left: '20%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0) 70%)', animationDelay: '-10s' }}></div>

      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
