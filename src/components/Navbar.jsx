import React, { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    // Handle smooth scrolling with offset for fixed navbar
    const handleNavClick = (e, targetId) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - 80; // Account for navbar height

        // Use window.scrollTo with GSAP animation
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetPosition },
          ease: "power2.out"
        });
      }
    };

    // Add click handlers to nav links
    const navLinks = document.querySelectorAll('#main-navbar a[href^="#"]');
    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      link.addEventListener('click', (e) => handleNavClick(e, targetId));
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

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
