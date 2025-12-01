import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileHeader.css";

export default function ProfileHeader() {
  const [mode, setMode] = useState("learner");
  const navigate = useNavigate();

  const switchToLearner = () => {
    setMode("learner");
    navigate("/LearnerDashboard");
  };

  const switchToMentor = () => {
    setMode("mentor");
    navigate("/MentorDashboard");
  };

  return (
    <nav className="profileHeader">

      {/* LOGO */}
      <div className="profileHeader-logo" onClick={() => navigate("/")}>
        MentAura
      </div>

      {/* RIGHT SIDE */}
      <div className="profileHeader-right">
        
        {/* HOME */}
        <button className="profileHeader-home" onClick={() => navigate("/Welcome")}>
          Home
        </button>

        {/* MODE SWITCH */}
        <div className="toggleBox">
          <div
            className={`toggleBtn ${mode === "learner" ? "active" : ""}`}
            onClick={switchToLearner}
          >
            Learner
          </div>
          <div
            className={`toggleBtn ${mode === "mentor" ? "active" : ""}`}
            onClick={switchToMentor}
          >
            Mentor
          </div>
        </div>

        {/* PROFILE ICON */}
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="profile"
          className="profileIcon"
          onClick={() => navigate("/Profile")}
        />
      </div>
    </nav>
  );
}
