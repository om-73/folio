import React from 'react';

const Education = () => {
    return (
        <section id="education">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="section-title"><span className="text-accent">05.</span> Education</h2>
                <div className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>D Y Patil University, Pune</h3>
                        <span className="text-accent" style={{ fontFamily: 'monospace' }}>2022 – 2026</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>B.Tech in <strong>Civil Engineering</strong></p>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, OOP
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Education;
