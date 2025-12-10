import React, { useState, useEffect } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "I build things for the web.";

    // Scroll & Scatter Logic
    const [scrollStats, setScrollStats] = useState({ opacity: 1, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Scatter starts immediately on scroll, fades out by 500px
            const opacity = Math.max(0, 1 - scrollY / 600);
            setScrollStats({ opacity, y: scrollY });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getStyle = (dirX, dirY, rot = 0) => {
        return {
            opacity: scrollStats.opacity,
            transform: `translate(${scrollStats.y * dirX}px, ${scrollStats.y * dirY}px) rotate(${scrollStats.y * rot}deg)`,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' // Smooth out the native scroll jitter
        };
    };

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(timer);
        }, 100);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <p className="hero-greeting text-accent fade-in-up"
                        style={{ ...getStyle(-0.5, -0.5), animationDelay: '0.1s' }}>
                        Hi, somewhere in the internet, I'm
                    </p>
                    <h1 className="hero-name fade-in-up"
                        style={{ ...getStyle(-1, 0), animationDelay: '0.2s' }}>
                        Omprakash Singh.
                    </h1>
                    <h2 className="hero-title fade-in-up"
                        style={{ ...getStyle(1, 0), animationDelay: '0.3s' }}>
                        {text}<span className="cursor-blink">|</span>
                    </h2>
                    <p className="hero-description fade-in-up"
                        style={{ ...getStyle(0, 0.5), animationDelay: '0.4s' }}>
                        I'm a Full-Stack Developer based in Pune, India, specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building AI-powered marketing tools at <span className="text-accent">Sapman C</span>.
                    </p>

                    <div className="hero-cta fade-in-up"
                        style={{ ...getStyle(0, 1), animationDelay: '0.5s' }}>
                        <a href="mailto:om.73.singh@gmail.com" className="btn btn-primary pulse-btn">Get In Touch</a>
                        <div className="social-links">
                            <a href="https://github.com/om-73" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://linkedin.com/in/omprakash-singh-265796228" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://om-73.github.io/portfolio/" target="_blank" rel="noopener noreferrer" aria-label="External Portfolio">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-image-container fade-in-up"
                    style={{ ...getStyle(0.5, 0.5, 0.05), animationDelay: '0.6s' }}>
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Omprakash Singh" className="profile-img" />
                        <div className="img-overlay"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
