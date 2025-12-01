import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import Footer from "./Footer";

export default function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  const [upcomingClass, setUpcomingClass] = useState(null);
  const [events, setEvents] = useState({ teaching: [], learning: [] });

  

useEffect(() => {
  // Get current logged-in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  if (!currentUser) {
    navigate("/Login");
    return;
  }
  
  // Load profile for THIS specific user
  const savedUser = localStorage.getItem(`userProfile_${currentUser.email}`);
  
  if (savedUser) {
    const data = JSON.parse(savedUser);
    setUser(data);
    setEditData(data);
  } else {
    // No profile → redirect to setup
    navigate("/ProfileSetup");
    return;
  }

  const savedEvents = localStorage.getItem("scheduledEvents");
  if (savedEvents) setEvents(JSON.parse(savedEvents));

  const storedClass = JSON.parse(localStorage.getItem("upcomingClass"));
  setUpcomingClass(storedClass);

  const handleStorageChange = () => {
    const updatedClass = JSON.parse(localStorage.getItem("upcomingClass"));
    setUpcomingClass(updatedClass);
  };
  window.addEventListener("storage", handleStorageChange);

  return () => window.removeEventListener("storage", handleStorageChange);
}, [navigate]);

  if (!user) {
    return (
      <div className="profile-loading">
        <div className="profile-loading-spinner"></div>
        <p>Loading your profile...</p>
      </div>
    );
  }

  const handleChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const addSkill = (type) => {
    const input = prompt(`Enter ${type === 'skills' ? 'skill' : 'interest'}:`);
    if (!input) return;
    setEditData({ ...editData, [type]: [...editData[type], input] });
  };

  const removeSkill = (type, skill) => {
    setEditData({ ...editData, [type]: editData[type].filter((s) => s !== skill) });
  };

  const saveChanges = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  // 🔥 Save to user-specific profile
  localStorage.setItem(`userProfile_${currentUser.email}`, JSON.stringify(editData));
  setUser(editData);
  setEditMode(false);
};

  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    window.location.href = "/Home";
  };

  return (
    <div className="profile-page">
      <ProfileHeader />

      <div className="profile-container">
        {/* Header Section */}
        <div className="profile-header-section">
          <div className="profile-avatar-container">
            <div className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-status-badge">Active</div>
          </div>
          
          <div className="profile-header-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-member-since">Member since {new Date().getFullYear()}</p>
          </div>

          <div className="profile-header-actions">
            {!editMode ? (
              <button className="profile-edit-btn" onClick={() => setEditMode(true)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Edit Profile
              </button>
            ) : (
              <div className="profile-edit-actions">
                <button className="profile-save-btn" onClick={saveChanges}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save
                </button>
                <button className="profile-cancel-btn" onClick={() => setEditMode(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9.17 14.83L14.83 9.17004M14.83 14.83L9.17 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="profile-content-grid">
          {/* Left Column */}
          <div className="profile-left-column">
            {/* Basic Info Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <h2 className="profile-card-title">Basic Information</h2>
              </div>

              <div className="profile-info-group">
                <label className="profile-label">Name</label>
                {editMode ? (
                  <input
                    className="profile-input"
                    value={editData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                ) : (
                  <p className="profile-value">{user.name}</p>
                )}
              </div>

              <div className="profile-info-group">
                <label className="profile-label">Bio</label>
                {editMode ? (
                  <textarea
                    className="profile-textarea"
                    value={editData.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    placeholder="Tell us about yourself..."
                  ></textarea>
                ) : (
                  <p className="profile-bio">{user.bio || "No bio added yet."}</p>
                )}
              </div>
            </div>

            {/* Skills Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <h2 className="profile-card-title">My Skills</h2>
                <span className="profile-badge">{editMode ? editData.skills.length : user.skills.length}</span>
              </div>

              <div className="profile-skill-box">
                {editMode ? (
                  <>
                    {editData.skills.map((skill) => (
                      <span key={skill} className="profile-skill">
                        {skill}
                        <button className="profile-remove-btn" onClick={() => removeSkill("skills", skill)}>
                          ×
                        </button>
                      </span>
                    ))}
                    <button className="profile-add-btn" onClick={() => addSkill("skills")}>
                      + Add Skill
                    </button>
                  </>
                ) : (
                  user.skills.map((skill) => (
                    <span key={skill} className="profile-skill">{skill}</span>
                  ))
                )}
              </div>
            </div>

            {/* Interests Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <h2 className="profile-card-title">Learning Interests</h2>
                <span className="profile-badge">{editMode ? editData.interests.length : user.interests.length}</span>
              </div>

              <div className="profile-skill-box">
                {editMode ? (
                  <>
                    {editData.interests.map((interest) => (
                      <span key={interest} className="profile-interest">
                        {interest}
                        <button className="profile-remove-btn" onClick={() => removeSkill("interests", interest)}>
                          ×
                        </button>
                      </span>
                    ))}
                    <button className="profile-add-btn" onClick={() => addSkill("interests")}>
                      + Add Interest
                    </button>
                  </>
                ) : (
                  user.interests.map((interest) => (
                    <span key={interest} className="profile-interest">{interest}</span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="profile-right-column">
            {/* Teaching Sessions Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <h2 className="profile-card-title">Teaching Sessions</h2>
                <span className="profile-badge">{events.teaching.length}</span>
              </div>

              {events.teaching.length === 0 ? (
                <div className="profile-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>No upcoming teaching sessions</p>
                </div>
              ) : (
                <div className="profile-events-list">
                  {events.teaching.map((item, idx) => (
                    <div key={idx} className="profile-event-item">
                      <div className="profile-event-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="profile-event-details">
                        <p className="profile-event-name">{item.withUser}</p>
                        <p className="profile-event-time">{item.date} • {item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Learning Sessions Card */}
            <div className="profile-card">
              <div className="profile-card-header">
                <h2 className="profile-card-title">Learning Sessions</h2>
                <span className="profile-badge">{upcomingClass ? 1 : 0}</span>
              </div>

              {upcomingClass ? (
                <div className="profile-upcoming-class">
                  <img src={upcomingClass.avatar} className="profile-upcoming-avatar" alt="mentor" />
                  <div className="profile-upcoming-details">
                    <p className="profile-upcoming-label">Mentor</p>
                    <p className="profile-upcoming-name">{upcomingClass.mentorName}</p>
                    <p className="profile-upcoming-label">Scheduled Time</p>
                    <p className="profile-upcoming-slot">{upcomingClass.slot}</p>
                  </div>
                </div>
              ) : (
                <div className="profile-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M20 7.04V16.96C20 18.48 19.86 19.56 19.47 20.38C18.75 21.86 17.54 22.01 15.75 22.01H8.24C6.45 22.01 5.24 21.86 4.52 20.38C4.13 19.56 3.99 18.48 3.99 16.96V7.04C3.99 5.52 4.13 4.44 4.52 3.62C5.24 2.14 6.45 1.99 8.24 1.99H15.75C17.54 1.99 18.75 2.14 19.47 3.62C19.86 4.44 20 5.52 20 7.04Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 9H16M8 13H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>No upcoming learning sessions</p>
                </div>
              )}
            </div>

            {/* Logout Card */}
            <div className="profile-logout-card">
              <button className="profile-logout-btn" onClick={handleLogout}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8.9 7.56C9.21 3.96 11.06 2.49 15.11 2.49H15.24C19.71 2.49 21.5 4.28 21.5 8.75V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24 20.08 8.91 16.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 12H3.62M5.85 8.65L2.5 12L5.85 15.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}