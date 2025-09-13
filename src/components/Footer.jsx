import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer" style={{ textAlign: "center", padding: "1.5rem 0", color: "#b3b3b3", background: "var(--bg-secondary)" }}>
      <div>&copy; 2025 Voice of the College. All rights reserved.</div>
      <div>Made with ❤️ for Indian Higher Education.</div>
      <div style={{ marginTop: "1rem" }}><strong>Team:</strong> Chetan Srinivas K, Seevathsa O, PV Krishna Yesaswi, Lokesh S</div>
      <div style={{ marginTop: "0.5rem" }}><strong>Office:</strong> 2nd Floor, EduHub, MG Road, Bengaluru, India</div>
    </footer>
  );
}
