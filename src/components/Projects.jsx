import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Venue Booking Platform",
            tech: ["Java Spring Boot", "Angular", "PostgreSQL", "Docker"],
            description: "Full-stack application for venue booking with microservices architecture. Implemented secure REST APIs, authentication, and optimized database queries. Containerized using Docker.",
            link: "https://updatevenue.vercel.app",
            github: "#" // No github link in resume for this, but added placeholder
        },
        {
            title: "Firewall Debugger CLI",
            tech: ["C", "Linux", "Python", "Java Spring Boot"],
            description: "CLI tool for network packet tracing and debugging. Improved runtime performance using optimized algorithms and memory-efficient coding.",
            link: "https://anti-malver.onrender.com",
            github: "#"
        },
        {
            title: "High-Frequency Trading Simulator",
            tech: ["C++", "Multithreading", "Lock-free DS"],
            description: "Low-latency trading engine handling 100K+ ops/sec. Implemented real-time event processing with focus on throughput, reliability, and minimal latency.",
            link: null,
            github: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title"><span className="text-accent">03.</span> Some Things I've Built</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card project-card">
                            <div className="project-header">
                                <div className="folder-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} aria-label="GitHub Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-tech-list">
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
