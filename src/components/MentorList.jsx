import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MentorList.css";
import ProfileHeader from "./ProfileHeader";
import Footer from "./Footer";

export default function MentorList() {
  const [mentors, setMentors] = useState([]);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [bookedMentor, setBookedMentor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Alice Johnson",
        skills: ["React", "UI/UX", "JavaScript"],
        category: "Development",
        about: "Frontend expert with 4+ years experience.",
        rating: 4.9,
        sessions: 127,
        next: "Today, 7 PM",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        id: 2,
        name: "Sara Lee",
        skills: ["Python", "ML", "Data Science"],
        category: "Data Science",
        about: "Helps beginners kickstart careers in ML.",
        rating: 4.8,
        sessions: 95,
        next: "Tomorrow, 5 PM",
        avatar: "https://i.pravatar.cc/150?img=20",
      },
      {
        id: 3,
        name: "Rahul Sharma",
        skills: ["Java", "Spring Boot"],
        category: "Development",
        about: "Backend mentor & problem-solving coach.",
        rating: 4.7,
        sessions: 83,
        next: "Friday, 8 PM",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        id: 4,
        name: "Michael Chen",
        skills: ["Node.js", "Express", "MongoDB"],
        category: "Development",
        about: "Full-stack developer specializing in scalable web apps.",
        rating: 4.9,
        sessions: 142,
        next: "Saturday, 6 PM",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
      {
        id: 5,
        name: "Priya Kapoor",
        skills: ["UI/UX", "Figma", "Design Systems"],
        category: "Design",
        about: "Design mentor passionate about accessibility and clean interfaces.",
        rating: 5.0,
        sessions: 156,
        next: "Monday, 4 PM",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      {
        id: 6,
        name: "David Miller",
        skills: ["C++", "Algorithms", "Competitive Programming"],
        category: "Development",
        about: "Guides learners in mastering problem-solving and coding interviews.",
        rating: 4.8,
        sessions: 108,
        next: "Tuesday, 7 PM",
        avatar: "https://i.pravatar.cc/150?img=7",
      },
      {
        id: 7,
        name: "Fatima Noor",
        skills: ["SQL", "Data Analysis", "Power BI"],
        category: "Data Science",
        about: "Data analyst helping learners visualize and interpret data effectively.",
        rating: 4.7,
        sessions: 91,
        next: "Wednesday, 5 PM",
        avatar: "https://i.pravatar.cc/150?img=25",
      },
      {
        id: 8,
        name: "Lucas Martinez",
        skills: ["Android", "Kotlin", "Mobile Apps"],
        category: "Development",
        about: "Mobile developer with expertise in Android ecosystems.",
        rating: 4.6,
        sessions: 74,
        next: "Thursday, 6 PM",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      {
        id: 9,
        name: "Emily Davis",
        skills: ["HTML", "CSS", "Accessibility"],
        category: "Design",
        about: "Frontend mentor focusing on semantic HTML and inclusive design.",
        rating: 4.9,
        sessions: 119,
        next: "Friday, 3 PM",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      {
        id: 10,
        name: "Hiro Tanaka",
        skills: ["AI", "Deep Learning", "TensorFlow"],
        category: "Data Science",
        about: "AI researcher guiding learners through neural networks and ML projects.",
        rating: 5.0,
        sessions: 163,
        next: "Saturday, 8 PM",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 11,
        name: "Sophia Williams",
        skills: ["Project Management", "Agile", "Scrum"],
        category: "Business",
        about: "Helps learners understand team collaboration and agile workflows.",
        rating: 4.8,
        sessions: 132,
        next: "Sunday, 2 PM",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
      {
        id: 12,
        name: "Ahmed Khan",
        skills: ["Cybersecurity", "Networking", "Linux"],
        category: "Security",
        about: "Security mentor teaching fundamentals of safe systems and networks.",
        rating: 4.7,
        sessions: 87,
        next: "Monday, 6 PM",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      {
        id: 13,
        name: "Julia Roberts",
        skills: ["Content Writing", "SEO", "Blogging"],
        category: "Marketing",
        about: "Creative mentor guiding learners in writing and digital storytelling.",
        rating: 4.9,
        sessions: 145,
        next: "Tuesday, 4 PM",
        avatar: "https://i.pravatar.cc/150?img=30",
      }
    ];
    setMentors(data);
  }, []);

  const categories = ["All", "Development", "Design", "Data Science", "Business", "Security", "Marketing"];

  const filteredMentors = mentors.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || m.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const bookSession = (mentor, slot) => {
    setBookedMentor(mentor.id);
    setExpanded(null);

    const bookedClass = {
      mentorName: mentor.name,
      slot: slot,
      avatar: mentor.avatar,
    };
    localStorage.setItem("upcomingClass", JSON.stringify(bookedClass));
    navigate("/Profile");
  };

  return (
    <div className="mentorlist-page">
      <ProfileHeader />

      <div className="mentorlist-container">
        {/* Header Section */}
        <div className="mentorlist-header">
          <h1 className="mentorlist-title">Explore Available Mentors</h1>
          <p className="mentorlist-subtitle">
            Connect with experienced professionals across various domains
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mentorlist-search-section">
          <div className="mentorlist-search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mentorlist-search-icon">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              className="mentorlist-search"
              type="text"
              placeholder="Search by name or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="mentorlist-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`mentorlist-category-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mentorlist-results-info">
          <span className="mentorlist-results-count">
            {filteredMentors.length} {filteredMentors.length === 1 ? "mentor" : "mentors"} found
          </span>
        </div>

        {/* Mentors Grid */}
        <div className="mentorlist-grid">
          {filteredMentors.map((m) => (
            <div key={m.id} className="mentorlist-card">
              <div className="mentorlist-card-header">
                <img src={m.avatar} className="mentorlist-avatar" alt={m.name} />
                <div className="mentorlist-rating">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                  <span>{m.rating}</span>
                </div>
              </div>

              <div className="mentorlist-card-body">
                <h3 className="mentorlist-name">{m.name}</h3>
                <p className="mentorlist-category">{m.category}</p>
                <p className="mentorlist-desc">{m.about}</p>

                <div className="mentorlist-tags">
                  {m.skills.map((s) => (
                    <span key={s} className="mentorlist-tag">{s}</span>
                  ))}
                </div>

                <div className="mentorlist-meta">
                  <div className="mentorlist-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Next: {m.next}</span>
                  </div>
                  <div className="mentorlist-meta-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{m.sessions} sessions</span>
                  </div>
                </div>
              </div>

              <div className="mentorlist-card-footer">
                {bookedMentor === m.id ? (
                  <div className="mentorlist-booked">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Session Booked!
                  </div>
                ) : (
                  <button
                    className="mentorlist-connect-btn"
                    onClick={() => setExpanded(expanded === m.id ? null : m.id)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    {expanded === m.id ? "Close" : "Schedule Session"}
                  </button>
                )}
              </div>

              {expanded === m.id && (
                <div className="mentorlist-slot-box">
                  <p className="mentorlist-slot-title">Select a time slot:</p>
                  <div className="mentorlist-slots">
                    {["Today 7 PM", "Tomorrow 5 PM", "Friday 8 PM"].map((t) => (
                      <button
                        key={t}
                        className="mentorlist-slot"
                        onClick={() => bookSession(m, t)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="mentorlist-empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3>No mentors found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}