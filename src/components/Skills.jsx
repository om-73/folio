import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: "Languages", items: ["Java", "C++", "C", "JavaScript", "TypeScript", "SQL", "Python"] },
        { category: "Backend", items: ["Spring Boot", "REST APIs", "Microservices", "Hibernate", "Node.js"] },
        { category: "Frontend", items: ["Angular", "HTML5", "CSS", "TypeScript", "React"] }, // Added React
        { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
        { category: "DevOps", items: ["Git", "Docker", "Kubernetes", "Jenkins", "CI/CD"] },
        { category: "Cloud", items: ["PCF (Pivotal)", "AWS", "GCP"] },
        { category: "Concepts", items: ["12-factor apps", "Distributed Systems", "System Design", "Debugging", "Agile/Scrum"] }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">
                    <span className="text-accent">04.</span> <span className="glitch-text" data-text="Technical Skills">Technical Skills</span>
                </h2>
                <div className="skills-grid">
                    {skillsData.map((skillGroup, index) => (
                        <div key={index} className="skill-category glass-card">
                            <h3>{skillGroup.category}</h3>
                            <ul className="skill-list">
                                {skillGroup.items.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
