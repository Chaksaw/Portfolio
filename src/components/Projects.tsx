import React, { useState } from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "🛒",
      category: "fullstack",
      technologies: ["JavaScript", "CSS", "Waze", "Shopping API", "Bootstrap", "HTML5"],
      liveUrl: "https://chaksaw.github.io/web_project_bootstrap/",
      githubUrl: "https://github.com/Chaksaw/web_project_bootstrap",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/Chaksaw/task_managment_app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      image: "🌤️",
      category: "frontend",
      technologies: ["JavaScript", "CSS3", "Weather API"],
      liveUrl: "https://chaksaw.github.io/Live-weather-app/",
      githubUrl: "https://github.com/Chaksaw/Live-weather-app",
      featured: false
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for blogs with markdown support, user authentication, and admin dashboard.",
      image: "✍️",
      category: "fullstack",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth"],
      githubUrl: "https://github.com/Chaksaw/blog_platform",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and modern design.",
      image: "🎨",
      category: "frontend",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion"],
      liveUrl: "https://chaksaw.github.io/Portfolio/",
      githubUrl: "https://github.com/Chaksaw/Portfolio",
      featured: false
    },
    {
      id: 6,
      title: "API Gateway Service",
      description: "A microservices API gateway built with Node.js and Express, handling authentication, rate limiting, and request routing.",
      image: "🚪",
      category: "backend",
      technologies: ["Node.js", "Express", "Redis", "JWT"],
      githubUrl: "https://github.com/Chaksaw/api_project/tree/main",
      featured: false
    },
    {
      id: 7,
      title: "musical creativity app",
      description: "A web application that allows users to create music projects and get evaluated by experts. This project was made in collaboration with researchers from the University of Moncton. Use the following code to access the app.                    code: 3652-3-51",
      image: "🎶",
      category: "fullstack",
      technologies: ["HTML", "CSS", "phpmyadmin", "sql", "JavaScript", "PHP"],
      liveUrl: "https://educreative.ca/CTS/participant/AccueilParticipant.html",
      featured: true
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently
        </p>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button className="btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

