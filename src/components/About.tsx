import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better and understand what drives my passion for development
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-paragraph">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate developer with a love for creating meaningful digital experiences. 
                With a background in both frontend and backend development, I enjoy the full spectrum 
                of web development and always strive to write clean, maintainable code.
              </p>
            </div>
            
            <div className="about-paragraph">
              <h3>My Journey</h3>
              <p>
                My journey in tech started with curiosity and has evolved into a passion for 
                problem-solving and innovation. I believe in continuous learning and staying 
                up-to-date with the latest technologies and best practices.
              </p>
            </div>
            
            <div className="about-paragraph">
              <h3>What I Do</h3>
              <p>
                I specialize in building responsive web applications, creating intuitive user 
                interfaces, and developing robust backend systems. My approach combines technical 
                expertise with creative problem-solving to deliver exceptional user experiences.
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Great</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
        
        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🚀</div>
            <h4>Fast Development</h4>
            <p>Quick turnaround times without compromising quality</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💡</div>
            <h4>Creative Solutions</h4>
            <p>Innovative approaches to complex problems</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔧</div>
            <h4>Technical Excellence</h4>
            <p>Clean, maintainable, and scalable code</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🤝</div>
            <h4>Great Communication</h4>
            <p>Clear and consistent project updates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

