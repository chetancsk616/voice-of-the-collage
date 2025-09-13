import React from "react";

export default function Hero() {
  return (
    <section className="hero-grid" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <header className="hero-header">
          <h1 className="hero-title glitch-text" data-text="Voice of the College">Voice of the College</h1>
          <p className="hero-subtitle fade-up">
            The revolutionary Platform empowering 40 million Indian students with AI-powered guidance,
            community connections, digital literacy tools and real-time shuttle tracking.
          </p>
        </header>
      </div>

      <div className="hero-illustration" aria-hidden="true">
        <svg viewBox="0 0 220 220" width="100%" height="100%" style={{ maxWidth: 340, display: "block", margin: "auto" }}>
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary-color)" />
              <stop offset="100%" stopColor="var(--secondary-color)" />
            </radialGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-color)" />
              <stop offset="100%" stopColor="var(--primary-color)" />
            </linearGradient>
          </defs>
          <circle cx="110" cy="110" r="80" fill="url(#grad1)" opacity="0.8">
            <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="110" cy="110" rx="55" ry="80" fill="url(#grad2)" opacity="0.5">
            <animate attributeName="rx" values="55;65;55" dur="2.5s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="110" cy="110" r="30" fill="var(--accent-color)" opacity="0.7">
            <animate attributeName="r" values="30;40;30" dur="2s" repeatCount="indefinite" />
          </circle>
          <rect x="80" y="80" width="60" height="60" rx="18" fill="var(--text-light)" opacity="0.12">
            <animate attributeName="x" values="80;90;80" dur="2.2s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>
    </section>
  );
}
