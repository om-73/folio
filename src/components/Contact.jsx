import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title" style={{ justifyContent: 'center' }}><span className="text-accent">07.</span> What's Next?</h2>
                <h1 style={{ fontSize: '3rem', margin: '1rem 0', color: 'var(--text-primary)' }}>Get In Touch</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                    <p>Pune, Maharashtra, India</p>
                    <p>
                        <a href="tel:+917304804812" className="phone-link" style={{ color: 'inherit', transition: 'color 0.3s' }}>
                            +91-73048-04812
                        </a>
                    </p>
                </div>

                <a href="mailto:om.73.singh@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
