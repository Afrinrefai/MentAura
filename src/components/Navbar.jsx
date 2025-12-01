import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MentAura</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <a href="#faq">FAQ</a>
        <Link to="/Login">Login</Link>
        <Link to="/SignUp" className="navbar-cta">Get Started</Link> 
      </div>
    </nav>
  );
}