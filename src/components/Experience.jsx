import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const jobs = [
        {
            company: "Sapman C",
            role: "Full-Stack Developer",
            duration: "September 2025 – Present",
            location: "Bengaluru, Karnataka",
            points: [
                "Designed and deployed AI-powered email marketing platform with scheduled delivery automation, increasing email personalization efficiency and user productivity through ML-generated content.",
                "Built scalable backend architecture using MERN Stack and integrated third-party APIs for seamless email automation workflow."
            ]
        },
        {
            company: "Zidio Development",
            role: "Web Developer",
            duration: "January 2025 – April 2025",
            location: "Bengaluru, Karnataka",
            points: [
                "Developed responsive UI components and shipped new features in agile sprints, contributing to real-world product development in fast-paced startup environment.",
                "Integrated third-party APIs and resolved critical bugs, ensuring smooth user experience across web applications."
            ]
        },
        {
            company: "Maxgen Technologies",
            role: "Software Engineer",
            duration: "February 2024 – April 2024",
            location: "Pune, Maharashtra",
            points: [
                "Built RESTful APIs using Spring Boot, Hibernate, and MySQL with structured logging and optimized database queries.",
                "Implemented CI/CD pipelines with Jenkins and GitHub Actions, automating testing workflows and reducing deployment time."
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title"><span className="text-accent">02.</span> Where I've Worked</h2>

                <div className="experience-list">
                    {jobs.map((job, index) => (
                        <div key={index} className="job-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="job-header">
                                <h3>
                                    <span>{job.role}</span>
                                    <span className="text-accent"> @ {job.company}</span>
                                </h3>
                                <p className="job-duration">{job.duration} | {job.location}</p>
                            </div>
                            <ul className="job-points">
                                {job.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Experience;
