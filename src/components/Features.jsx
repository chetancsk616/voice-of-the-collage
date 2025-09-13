import React from "react";

export default function Features() {
  const items = [
    { 
      title: "AI Helper", 
      text: "Personalized academic guidance and career counseling powered by advanced AI",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C13.1 2 14 2.9 14 4V5H16V7H13.83L12.83 19H10.83L9.83 7H8V5H10V4C10 2.9 10.9 2 12 2ZM12 4V5H12V4ZM12 7L12.5 17H11.5L12 7Z" fill="url(#aiGradient)"/>
          <circle cx="12" cy="12" r="8" stroke="url(#aiGradient)" strokeWidth="1.5" fill="none"/>
          <circle cx="12" cy="12" r="3" fill="url(#aiGradient)"/>
          <defs>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    { 
      title: "AI UI Designer", 
      text: "Intuitive design tools that adapt to low digital literacy levels",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#designGradient)" strokeWidth="1.5" fill="none"/>
          <circle cx="9" cy="9" r="2" fill="url(#designGradient)"/>
          <rect x="13" y="7" width="6" height="2" rx="1" fill="url(#designGradient)"/>
          <rect x="7" y="13" width="4" height="2" rx="1" fill="url(#designGradient)"/>
          <rect x="13" y="13" width="4" height="2" rx="1" fill="url(#designGradient)"/>
          <rect x="7" y="16" width="6" height="2" rx="1" fill="url(#designGradient)"/>
          <defs>
            <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#6366f1"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    { 
      title: "Community Hub", 
      text: "Connect with peers, mentors, and university networks across India",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="3" stroke="url(#communityGradient)" strokeWidth="1.5" fill="none"/>
          <path d="M12 14C8.13 14 5 15.79 5 18V20H19V18C19 15.79 15.87 14 12 14Z" stroke="url(#communityGradient)" strokeWidth="1.5" fill="none"/>
          <circle cx="18" cy="6" r="2" fill="url(#communityGradient)"/>
          <circle cx="6" cy="6" r="2" fill="url(#communityGradient)"/>
          <line x1="15" y1="9" x2="17" y2="7" stroke="url(#communityGradient)" strokeWidth="1.5"/>
          <line x1="9" y1="9" x2="7" y2="7" stroke="url(#communityGradient)" strokeWidth="1.5"/>
          <defs>
            <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    { 
      title: "Shuttle Tracking", 
      text: "Real-time tracking of university shuttles for safer commutes",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="8" width="20" height="8" rx="2" stroke="url(#shuttleGradient)" strokeWidth="1.5" fill="none"/>
          <circle cx="6" cy="16" r="2" fill="url(#shuttleGradient)"/>
          <circle cx="18" cy="16" r="2" fill="url(#shuttleGradient)"/>
          <rect x="4" y="6" width="16" height="4" rx="1" fill="url(#shuttleGradient)"/>
          <circle cx="19" cy="10" r="1.5" fill="url(#shuttleGradient)"/>
          <path d="M19 10L22 7L20 5L18 7L19 10Z" fill="url(#shuttleGradient)"/>
          <defs>
            <linearGradient id="shuttleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#6366f1"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    { 
      title: "Online Compiler", 
      text: "Compile and run code snippets in real-time for instant feedback",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#codeGradient)" strokeWidth="1.5" fill="none"/>
          <rect x="7" y="7" width="10" height="2" rx="1" fill="url(#codeGradient)"/>
          <rect x="7" y="11" width="8" height="2" rx="1" fill="url(#codeGradient)"/>
          <rect x="7" y="15" width="6" height="2" rx="1" fill="url(#codeGradient)"/>
          <polygon points="7,9 9,7 11,9" fill="url(#codeGradient)"/>
          <polygon points="13,9 15,7 17,9" fill="url(#codeGradient)"/>
          <defs>
            <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    { 
      title: "Campus Tour", 
      text: "Explore the campus virtually with immersive 3D tours and interactive maps",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="url(#campusGradient)" strokeWidth="1.5" fill="none"/>
          <path d="M2 7V17L12 22L22 17V7" stroke="url(#campusGradient)" strokeWidth="1.5" fill="none"/>
          <path d="M12 12V22" stroke="url(#campusGradient)" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="url(#campusGradient)"/>
          <circle cx="8" cy="10" r="1" fill="url(#campusGradient)"/>
          <circle cx="16" cy="10" r="1" fill="url(#campusGradient)"/>
          <defs>
            <linearGradient id="campusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="hero-content fade-section" aria-labelledby="features-heading" style={{ marginTop: "2rem" }}>
      <div className="features-grid">
        {items.map((it, idx) => (
          <div className="feature-card" key={idx} style={{ animationDelay: `${(idx + 1) * 0.2}s` }}>
            <div className="feature-icon" aria-hidden="true" style={{ height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {it.icon}
            </div>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
