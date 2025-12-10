import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title"><span className="text-accent">06.</span> Achievements</h2>
                <div className="glass-card">
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span className="text-accent" style={{ marginRight: '1rem' }}>▹</span>
                            <div>
                                <strong style={{ color: 'var(--text-primary)' }}>Finalist – Smart India Hackathon 2023</strong>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Distributed Microservices Architecture</p>
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <span className="text-accent" style={{ marginRight: '1rem' }}>▹</span>
                            <div>
                                <strong style={{ color: 'var(--text-primary)' }}>Qualified – Facebook Hacker Cup 2025</strong>
                                <p style={{ marginTop: '0.25rem' }}>
                                    <a href="https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1153022458739372" target="_blank" rel="noopener noreferrer" className="text-accent" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>View Certificate</a>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
