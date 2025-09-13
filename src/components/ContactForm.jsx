import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email address.";
    if (!form.message.trim()) errs.message = "Please enter your message.";
    return errs;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("Sending...");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        setStatus("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network error");
      }
    } catch {
      setStatus("Sorry, there was a problem sending your message. Please try again.");
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: 12 }}>
        <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Name</label>
        <input id="name" name="name" value={form.name} onChange={(e) => setForm(f => ({...f, name: e.target.value}))} aria-required="true" aria-label="Your Name" />
        <span className="error-message" aria-live="polite">{errors.name}</span>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={(e) => setForm(f => ({...f, email: e.target.value}))} aria-required="true" aria-label="Your Email" />
        <span className="error-message" aria-live="polite">{errors.email}</span>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="message" style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Message</label>
        <textarea id="message" name="message" rows="4" value={form.message} onChange={(e) => setForm(f => ({...f, message: e.target.value}))} aria-required="true" aria-label="Your Message"></textarea>
        <span className="error-message" aria-live="polite">{errors.message}</span>
      </div>

      <button type="submit" className="cta-button" style={{ width: "100%" }}>Send Message</button>
      <div id="form-status" aria-live="polite" style={{ marginTop: 12 }}>{status}</div>
    </form>
  );
}
