import React from "react";
import "./KeyFeatures.css";

const features = [
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M3.41 22C3.41 18.13 7.26 15 12 15C16.74 15 20.59 18.13 20.59 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 22V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 3L12 7L16 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Learn & Share Skills", 
    desc: "Teach what you know and learn from others in a collaborative community." 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Easy Navigation", 
    desc: "Simple and intuitive flow to sign up, create profiles, and get started quickly." 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Skill-based Search", 
    desc: "Find mentors based on the exact skills you're looking to develop and master." 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15.695 13.7H15.704M15.695 16.7H15.704M11.995 13.7H12.005M11.995 16.7H12.005M8.294 13.7H8.304M8.294 16.7H8.304" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Set Availability", 
    desc: "Be a mentor and set your available time for learners to book sessions with you." 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customized Profiles", 
    desc: "Showcase your skills, interests, and expertise with personalized profiles." 
  },
  { 
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 2L7 6.5L2 7.27L6.18 10.97L5.03 16L9.5 13.27L13.97 16L12.82 10.97L17 7.27L12 6.5L9.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 19L17.5 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Beginner-Friendly", 
    desc: "Designed with a clean, minimal interface that's easy for new users to navigate." 
  },
];

export default function KeyFeatures() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-heading">
          <span className="features-label">What We Offer</span>
          <h2 className="features-title">Key Features</h2>
          <p className="features-subtitle">
            Everything you need to start your learning and teaching journey
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-hover-line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}