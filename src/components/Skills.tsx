import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🌐" },
        { name: "Next.js", level: 80, icon: "⚡" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "SQL", level: 80, icon: "🗄️" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Django", level: 70, icon: "🌿" },
        { name: "PHP", level: 85, icon: "🐘" },
        { name: "Laravel", level: 90, icon: "🕸️" },
        { name: "RESTful APIs", level: 85, icon: "🔗" },
        { name: "C++", level: 100, icon: "⚙️" },
        { name: "C#", level: 90, icon: "♯" },
        { name: "Java", level: 90, icon: "☕" },
        { name: "Ruby", level: 90, icon: "💎" },
        { name: "COBOL", level: 90, icon: "🏦" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 70, icon: "☁️" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "Jest", level: 80, icon: "🧪" }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My technical skills and the technologies I work with
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Always Learning</h4>
            <p>I'm constantly expanding my skill set and staying updated with the latest technologies</p>
          </div>
          <div className="summary-card">
            <h4>Problem Solver</h4>
            <p>I approach challenges with creativity and find efficient solutions</p>
          </div>
          <div className="summary-card">
            <h4>Team Player</h4>
            <p>I collaborate effectively and communicate clearly with team members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

