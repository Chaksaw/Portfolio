import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>
              A passionate developer creating amazing digital experiences. 
              Let's build something incredible together.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
              <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li>📧 your.email@example.com</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 Your City, Country</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>🐙</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Made with ❤️ using React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

