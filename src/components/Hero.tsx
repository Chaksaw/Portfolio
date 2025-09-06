import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Chakour</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer & Designer
            </h2>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code and innovative solutions that make a difference.
            </p>
            <div className="hero-buttons">
              <button className="btn" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
              <div className="floating-card">
                <div className="card-icon">💻</div>
                <div className="card-text">IT</div>
              </div>
              <div className="floating-card">
                <div className="card-icon">🎨</div>
                <div className="card-text">Design</div>
              </div>
              <div className="floating-card">
                <div className="card-icon">⚡</div>
                <div className="card-text">Fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;

