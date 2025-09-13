import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import UIComponents from "./components/UIComponents";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef();

  useEffect(() => {
    // Navbar slide-in similar to original
    gsap.fromTo(
      "#main-navbar",
      { y: -80 },
      { y: 0, duration: 1.1, ease: "power4.out", delay: 0.2 }
    );

    // Button hover pulse (JS-powered) - we also keep CSS hover
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
      const enter = () =>
        gsap.to(btn, {
          scale: 1.08,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: "power1.inOut"
        });
      const leave = () =>
        gsap.to(btn, { scale: 1, duration: 0.18, ease: "power1.inOut" });
      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);
      // cleanup later? not needed here because app persists
    });

    // Scroll-triggered fade-ins
    gsap.utils.toArray(".fade-section").forEach((section, i) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: i * 0.15
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="hero-section" ref={rootRef}>
        <div className="stars-background" />
        <div className="container" style={{ paddingTop: "100px" }}>
          <Hero />
          <div style={{ marginBottom: "4rem" }}>
            <UIComponents />
          </div>
          <div style={{ marginBottom: "4rem" }}>
            <Features />
          </div>
          <div className="cta-section fade-section" id="join" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <button className="cta-button pulse">Join the Revolution</button>
            <p className="cta-subtext" style={{ marginTop: "1.5rem" }}>Bridging the gap between 1,000+ universities and millions of aspiring students</p>
          </div>

          <section className="hero-footer fade-section" id="stats" style={{ marginTop: "2rem", marginBottom: "4rem" }}>
            <div className="stats" style={{ justifyContent: "center" }}>
              <div className="stat">
                <span className="stat-number">40M+</span>
                <span className="stat-label">Target Students</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Universities</span>
              </div>
              <div className="stat">
                <span className="stat-number">1.2T</span>
                <span className="stat-label">Market Size</span>
              </div>
            </div>

            <div id="contact" style={{ maxWidth: 680, margin: "2rem auto", padding: "1.5rem", background: "rgba(255,255,255,0.03)", borderRadius: 16 }}>
              <ContactForm />
            </div>
          </section>
        </div>

        <FloatingElements />

      </main>

      <Footer />
    </>
  );
}
