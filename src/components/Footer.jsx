import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="simple-footer">
      <div className="footer-top">
        <h2 className="footer-logo">MentAura</h2>
        <p className="footer-tagline">Grow. Learn. Mentor.</p>
      </div>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#mentors">Mentors</a>
        <a href="#contact">Contact</a>
        <a href="#privacy">Privacy</a>
      </div>

      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} MentAura. All rights reserved.
      </p>
    </footer>
  );
}
