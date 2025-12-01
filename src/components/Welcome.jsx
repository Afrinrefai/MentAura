import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Footer from "./Footer";
import MentorList from "./MentorList";
import ProfileHeader from "./ProfileHeader";

export default function Welcome() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

useEffect(() => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  
  // Load profile for this user
  if (currentUser.email) {
    const userProfile = JSON.parse(localStorage.getItem(`userProfile_${currentUser.email}`));
    if (userProfile) {
      setUser(userProfile);
    } else {
      setUser(currentUser);
    }
  } else {
    setUser(currentUser);
  }
}, []);

  const stats = [
    { icon: "👥", number: "500+", label: "Active Mentors" },
    { icon: "🎓", number: "1000+", label: "Learning Sessions" },
    { icon: "⭐", number: "50+", label: "Skills Available" }
  ];

  return (
    <div className="welcome-page">
      <ProfileHeader />

      {/* Hero Section */}
      <section className="welcome-hero">
        <div className="welcome-hero-content">
          <div className="welcome-greeting-badge">Welcome Back!</div>
          <h1 className="welcome-greeting">
            Hello, <span className="welcome-user-name">{user.name || "Learner"}</span>
          </h1>
          <p className="welcome-quote">
            "Knowledge is never complete in one person — it becomes powerful when shared"
          </p>
          
          <div className="welcome-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="welcome-stat-item">
                <span className="welcome-stat-icon">{stat.icon}</span>
                <div className="welcome-stat-details">
                  <span className="welcome-stat-number">{stat.number}</span>
                  <span className="welcome-stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="welcome-hero-illustration">
          <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="150" r="120" fill="rgba(74, 144, 226, 0.1)"/>
            <circle cx="200" cy="150" r="80" fill="rgba(74, 144, 226, 0.2)"/>
            <path d="M200 100 L220 140 L180 140 Z" fill="var(--accent-blue)"/>
            <circle cx="200" cy="150" r="30" fill="var(--accent-blue)"/>
            <path d="M150 180 L250 180 M150 200 L250 200 M150 220 L220 220" stroke="var(--accent-blue)" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="welcome-actions-section">
        <h2 className="welcome-section-title">What would you like to do today?</h2>
        
        <div className="welcome-action-cards">
          <div className="welcome-action-card welcome-card-learner" onClick={() => navigate("/LearnerDashboard")}>
            <div className="welcome-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="welcome-card-title">Find Your First Mentor</h3>
            <p className="welcome-card-desc">
              Discover experienced professionals ready to guide you in your learning journey
            </p>
            <button className="welcome-card-btn">
              Explore Mentors
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="welcome-action-card welcome-card-mentor" onClick={() => navigate("/MentorDashboard")}>
            <div className="welcome-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="welcome-card-title">Ready to Teach?</h3>
            <p className="welcome-card-desc">
              Share your expertise and help others grow by setting your availability schedule
            </p>
            <button className="welcome-card-btn">
              Set Availability
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="welcome-action-card welcome-card-profile" onClick={() => navigate("/Profile")}>
            <div className="welcome-card-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="welcome-card-title">Manage Your Profile</h3>
            <p className="welcome-card-desc">
              Update your skills, interests, and bio to get the most personalized experience
            </p>
            <button className="welcome-card-btn">
              View Profile
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="welcome-features-section">
        <h2 className="welcome-section-title">Why Choose MentAura?</h2>
        
        <div className="welcome-features-grid">
          <div className="welcome-feature-item">
            <div className="welcome-feature-icon">🎯</div>
            <h4 className="welcome-feature-title">Personalized Learning</h4>
            <p className="welcome-feature-desc">Match with mentors who align with your goals and interests</p>
          </div>
          
          <div className="welcome-feature-item">
            <div className="welcome-feature-icon">⚡</div>
            <h4 className="welcome-feature-title">Flexible Scheduling</h4>
            <p className="welcome-feature-desc">Book sessions that fit your schedule and pace</p>
          </div>
          
          <div className="welcome-feature-item">
            <div className="welcome-feature-icon">🤝</div>
            <h4 className="welcome-feature-title">Community Driven</h4>
            <p className="welcome-feature-desc">Join a supportive community of learners and experts</p>
          </div>
          
          <div className="welcome-feature-item">
            <div className="welcome-feature-icon">📈</div>
            <h4 className="welcome-feature-title">Track Progress</h4>
            <p className="welcome-feature-desc">Monitor your learning journey and celebrate milestones</p>
          </div>
        </div>
      </section>

      {/* Available Mentors Section */}
      <section className="welcome-mentors-section">
        <MentorList />
      </section>

      <Footer />
    </div>
  );
}