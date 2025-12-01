import React from "react";
import "./CTASection.css"; // switched to normal CSS
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="ctaSection">
      <h2 className="ctaHeading">Ready to Level Up Your Skills?</h2>
      <p className="ctaSubtext">
        Join thousands of learners and mentors today. Start your journey with MentAura!
      </p>
      <Link to="/signup" className="ctaButton">Get Started 🚀</Link>
    </section>
  );
}
