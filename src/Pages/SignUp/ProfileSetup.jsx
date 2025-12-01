import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileSetup.css"; 

export default function ProfileSetup() {
  const navigate = useNavigate();

  const availableSkills = [
    "React",
    "JavaScript",
    "Python",
    "UI/UX",
    "SQL",
    "Angular",
    "Java",
    "Data Analysis",
  ];

  const [formData, setFormData] = useState({
    name: "",
    skills: [],
    interests: [],
    bio: "",
  });

  const toggleSkill = (skill, type) => {
    setFormData((prev) => {
      const list = prev[type];
      return {
        ...prev,
        [type]: list.includes(skill)
          ? list.filter((s) => s !== skill)
          : [...list, skill],
      };
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  
  // Get current logged-in user
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const profileData = {
    ...formData,
    email: currentUser.email,
    name: formData.name || currentUser.name // Use name from form or signup
  };
  
  // Store profile with user's email as key (each user has their own profile)
  localStorage.setItem(`userProfile_${currentUser.email}`, JSON.stringify(profileData));
  
  navigate("/Welcome");
};

  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Join Skill Sharing Hub</h1>
        <p className="subText">Learn from others, share your expertise</p>

        <div className="block">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="block">
          <label>Skills You Can Share</label>
          <div className="skillWrapper">
            {availableSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill, "skills")}
                className={
                  formData.skills.includes(skill)
                    ? "skillSelectedTeach"
                    : "skillButton"
                }
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="block">
          <label>Skills You Want To Learn</label>
          <div className="skillWrapper">
            {availableSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill, "interests")}
                className={
                  formData.interests.includes(skill)
                    ? "skillSelectedLearn"
                    : "skillButton"
                }
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="block">
          <label>Bio</label>
          <textarea
            placeholder="Tell us about yourself..."
            value={formData.bio}
            onChange={(e) =>
              setFormData({ ...formData, bio: e.target.value })
            }
          />
        </div>

        <button className="submitBtn" onClick={handleSubmit}>
          Create Profile & Start Learning
        </button>
      </div>
    </div>
  );
}
