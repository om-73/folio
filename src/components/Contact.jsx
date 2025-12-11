import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isRecruiter, setIsRecruiter] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const recruiterTemplate = "Hi, I am reaching out regarding a job opportunity. I reviewed your profile and would like to discuss a potential fit. Please let me know your availability.";

    const handleRecruiterToggle = (e) => {
        const checked = e.target.checked;
        setIsRecruiter(checked);
        if (checked) {
            setFormData(prev => ({ ...prev, message: recruiterTemplate }));
        } else {
            setFormData(prev => ({ ...prev, message: '' }));
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message } = formData;
        if (!name || !message) return;

        // Construct WhatsApp URL
        const phoneNumber = "917304804812";
        const text = `Hi, my name is ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title contact-title-wrapper">
                    <span className="text-accent">07.</span> <span className="glitch-text" data-text="What's Next?">What's Next?</span>
                </h2>
                <h1 className="contact-heading">Get In Touch</h1>
                <p className="contact-text">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label className="recruiter-toggle">
                        <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={isRecruiter}
                            onChange={handleRecruiterToggle}
                        />
                        <span className="toggle-label">I am a Recruiter / Hiring</span>
                    </label>

                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input"
                            placeholder="YOUR NAME"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-textarea"
                            placeholder={isRecruiter ? "Template loaded..." : "I'd like to discuss a project..."}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary whatsapp-btn">
                        Send via WhatsApp
                        <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                    </button>
                </form>

                <div className="contact-info">
                    <p>Pune, Maharashtra, India</p>
                    <p>
                        <a href="tel:+917304804812" className="phone-link">
                            +91-73048-04812
                        </a>
                    </p>
                </div>

                <a href="https://drive.google.com/file/d/1IklQgChIEYZTl-fxfgGC1xRpxdTy-UCI/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="resume-btn">
                    View Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
            </div>
        </section>
    );
};

export default Contact;
