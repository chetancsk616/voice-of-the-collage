import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav id="main-navbar" className="main-navbar" aria-label="Main Navigation">
        <span style={{ fontWeight: 700, fontSize: "1.3rem", color: "#fff", letterSpacing: "1px" }}>
          Voice of the College
        </span>
        <div>
          <a href="#features" style={{ color: "#fff", marginRight: "2rem", textDecoration: "none", fontWeight: 500 }}>Features</a>
          <a href="#join" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>Join</a>
          <a href="#contact" style={{ color: "#fff", marginLeft: "2rem", textDecoration: "none", fontWeight: 500 }}>Contact</a>
        </div>
      </nav>
    </header>
  );
}
