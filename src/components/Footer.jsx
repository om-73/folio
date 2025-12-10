import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            <p>Designed & Built by Omprakash Singh</p>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <a href="https://github.com/om-73" target="_blank" rel="noopener noreferrer" className="text-accent">GitHub</a>
                <a href="https://linkedin.com/in/omprakash-singh-265796228" target="_blank" rel="noopener noreferrer" className="text-accent">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
