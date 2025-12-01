import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Learn. Teach. Grow.</h1>
        
        <p className="hero-description">
          Connect with passionate mentors and eager learners. MentAura is your skill-sharing hub 
          where knowledge flows freely and everyone grows together.
        </p>
        
        <Link to="/SignUp" className="hero-btn">
          Get Started
          <svg className="hero-btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Active Mentors</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">50+</span>
            <span className="hero-stat-label">Skills Shared</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">1000+</span>
            <span className="hero-stat-label">Learning Sessions</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}