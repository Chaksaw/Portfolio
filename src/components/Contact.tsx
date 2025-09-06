import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  // Formspree integration: no local state needed for form fields
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const endpoint = 'https://formspree.io/f/mqadwpzn';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p>
              Feel free to reach out if you have a project in mind, want to collaborate,
              or just want to say hello. I'm always excited to hear about new opportunities!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>chakoursawadogo63@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-details">
                  <h4>Phone</h4>
                  <p>+1 (506) 232-9022</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Moncton, New Brunswick, Canada</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="http://linkedin.com/in/chakour-sawadogo-ba3218245" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>💼</span> LinkedIn
              </a>
              <a href="https://github.com/Chaksaw" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>🐙</span> GitHub
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

