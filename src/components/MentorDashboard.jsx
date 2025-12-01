import React, { useEffect, useState } from "react";
import "./MentorDashboard.css";
import ProfileHeader from "./ProfileHeader";
import Footer from "./Footer";

export default function MentorDashboard() {
  const [user, setUser] = useState({});
  const [availability, setAvailability] = useState({});
  const [sessions, setSessions] = useState([]);
  const [upcomingLearning, setUpcomingLearning] = useState(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    "10 AM – 12 PM",
    "12 PM – 2 PM",
    "2 PM – 4 PM",
    "4 PM – 6 PM",
    "6 PM – 8 PM",
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userProfile")) || {};
    const storedAvailability = JSON.parse(localStorage.getItem("mentorAvailability")) || {};
    const storedSessions = JSON.parse(localStorage.getItem("mentorTeachingSessions")) || [];
    const storedLearning = JSON.parse(localStorage.getItem("upcomingClass")) || null;

    setUser(storedUser);
    setAvailability(storedAvailability);
    setSessions(storedSessions);
    setUpcomingLearning(storedLearning);

    const handleStorageChange = () => {
      const updatedLearning = JSON.parse(localStorage.getItem("upcomingClass"));
      setUpcomingLearning(updatedLearning);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleSlot = (day, slot) => {
    const updated = { ...availability };
    if (!updated[day]) updated[day] = [];

    if (updated[day].includes(slot)) {
      updated[day] = updated[day].filter((s) => s !== slot);
    } else {
      updated[day].push(slot);
    }

    setAvailability(updated);
    localStorage.setItem("mentorAvailability", JSON.stringify(updated));
  };

  const removeSlot = (day, slot) => {
    const updated = { ...availability };
    updated[day] = updated[day].filter((s) => s !== slot);
    setAvailability(updated);
    localStorage.setItem("mentorAvailability", JSON.stringify(updated));
  };

  const getTotalSlots = () => {
    return Object.values(availability).reduce((sum, slots) => sum + slots.length, 0);
  };

  return (
    <div className="mentor-page">
      <ProfileHeader />

      <div className="mentor-container">
        {/* Dashboard Header Card */}
        <div className="mentor-header-card">
          <div className="mentor-header-content">
            <div className="mentor-avatar-large">
              {user.name ? user.name.charAt(0).toUpperCase() : "M"}
            </div>
            <div className="mentor-header-info">
              <h1 className="mentor-welcome">Welcome back, {user.name || "Mentor"}!</h1>
              <p className="mentor-bio">{user.bio || "Inspire learners with your expertise and knowledge"}</p>
              
              <div className="mentor-stats-grid">
                <div className="mentor-stat-item">
                  <div className="mentor-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M3.41 22C3.41 18.13 7.26 15 12 15C16.74 15 20.59 18.13 20.59 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="mentor-stat-details">
                    <span className="mentor-stat-number">{user.skills?.length || 0}</span>
                    <span className="mentor-stat-label">Skills</span>
                  </div>
                </div>

                <div className="mentor-stat-item">
                  <div className="mentor-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="mentor-stat-details">
                    <span className="mentor-stat-number">{sessions.length}</span>
                    <span className="mentor-stat-label">Upcoming Sessions</span>
                  </div>
                </div>

                <div className="mentor-stat-item">
                  <div className="mentor-stat-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="mentor-stat-details">
                    <span className="mentor-stat-number">{getTotalSlots()}</span>
                    <span className="mentor-stat-label">Available Slots</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mentor-content-grid">
          {/* Left Column */}
          <div className="mentor-left-column">
            {/* Skills Card */}
            <div className="mentor-card">
              <div className="mentor-card-header">
                <h2 className="mentor-card-title">Your Skills</h2>
                <span className="mentor-badge">{user.skills?.length || 0}</span>
              </div>
              <div className="mentor-skills-grid">
                {user.skills && user.skills.length > 0 ? (
                  user.skills.map((skill, i) => (
                    <span key={i} className="mentor-skill-tag">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M9.5 2L7 6.5L2 7.27L6.18 10.97L5.03 16L9.5 13.27L13.97 16L12.82 10.97L17 7.27L12 6.5L9.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {skill}
                    </span>
                  ))
                ) : (
                  <p className="mentor-empty-text">No skills added yet</p>
                )}
              </div>
            </div>

            {/* Upcoming Learning Class */}
            <div className="mentor-card">
              <div className="mentor-card-header">
                <h2 className="mentor-card-title">Your Learning Session</h2>
              </div>
              {upcomingLearning ? (
                <div className="mentor-learning-card">
                  <img src={upcomingLearning.avatar} className="mentor-learning-avatar" alt="mentor" />
                  <div className="mentor-learning-details">
                    <p className="mentor-learning-label">Learning from</p>
                    <p className="mentor-learning-name">{upcomingLearning.mentorName}</p>
                    <div className="mentor-learning-slot">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M8 2V5M16 2V5M3.5 9.09H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {upcomingLearning.slot}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mentor-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7.04V16.96C20 18.48 19.86 19.56 19.47 20.38C18.75 21.86 17.54 22.01 15.75 22.01H8.24C6.45 22.01 5.24 21.86 4.52 20.38C4.13 19.56 3.99 18.48 3.99 16.96V7.04C3.99 5.52 4.13 4.44 4.52 3.62C5.24 2.14 6.45 1.99 8.24 1.99H15.75C17.54 1.99 18.75 2.14 19.47 3.62C19.86 4.44 20 5.52 20 7.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>No upcoming learning sessions</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="mentor-right-column">
            {/* Manage Availability */}
            <div className="mentor-card">
              <div className="mentor-card-header">
                <h2 className="mentor-card-title">Manage Availability</h2>
                <p className="mentor-card-subtitle">Click slots to toggle your availability</p>
              </div>
              <div className="mentor-availability-grid">
                {days.map((day) => (
                  <div key={day} className="mentor-day-block">
                    <h3 className="mentor-day-name">{day}</h3>
                    {timeSlots.map((slot) => {
                      const active = availability[day]?.includes(slot);
                      return (
                        <button
                          key={slot}
                          className={`mentor-slot-btn ${active ? "mentor-slot-active" : ""}`}
                          onClick={() => toggleSlot(day, slot)}
                        >
                          {active && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Current Availability Summary */}
            <div className="mentor-card">
              <div className="mentor-card-header">
                <h2 className="mentor-card-title">Your Availability Summary</h2>
                <span className="mentor-badge">{getTotalSlots()} slots</span>
              </div>
              {Object.keys(availability).length === 0 || getTotalSlots() === 0 ? (
                <div className="mentor-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>No availability slots selected</p>
                </div>
              ) : (
                <div className="mentor-availability-list">
                  {Object.entries(availability).map(([day, slots]) =>
                    slots.map((slot, i) => (
                      <div key={`${day}-${i}`} className="mentor-availability-item">
                        <div className="mentor-availability-info">
                          <span className="mentor-availability-day">{day}</span>
                          <span className="mentor-availability-time">{slot}</span>
                        </div>
                        <button
                          className="mentor-remove-btn"
                          onClick={() => removeSlot(day, slot)}
                          title="Remove slot"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M9.17 14.83L14.83 9.17004M14.83 14.83L9.17 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Upcoming Teaching Sessions */}
            <div className="mentor-card">
              <div className="mentor-card-header">
                <h2 className="mentor-card-title">Upcoming Teaching Sessions</h2>
                <span className="mentor-badge">{sessions.length}</span>
              </div>
              {sessions.length === 0 ? (
                <div className="mentor-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>No upcoming teaching sessions</p>
                </div>
              ) : (
                <div className="mentor-sessions-list">
                  {sessions.map((s, i) => (
                    <div key={i} className="mentor-session-card">
                      <div className="mentor-session-header">
                        <div className="mentor-session-date">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M8 2V5M16 2V5M3.5 9.09H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                          <span>{s.date}</span>
                        </div>
                        <span className="mentor-session-time">{s.time}</span>
                      </div>
                      <div className="mentor-session-details">
                        <div className="mentor-session-detail">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Learner: {s.learner}</span>
                        </div>
                        <div className="mentor-session-detail">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M20 7.04V16.96C20 18.48 19.86 19.56 19.47 20.38C18.75 21.86 17.54 22.01 15.75 22.01H8.24C6.45 22.01 5.24 21.86 4.52 20.38C4.13 19.56 3.99 18.48 3.99 16.96V7.04C3.99 5.52 4.13 4.44 4.52 3.62C5.24 2.14 6.45 1.99 8.24 1.99H15.75C17.54 1.99 18.75 2.14 19.47 3.62C19.86 4.44 20 5.52 20 7.04Z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                          <span>Topic: {s.topic}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}