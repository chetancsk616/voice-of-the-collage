import React from "react";

export default function FloatingElements() {
  return (
    <div className="floating-elements" aria-hidden="true">
      <div className="floating-element" style={{ top: "20%", left: "10%", ["--delay"]: "0s", ["--duration"]: "6s" }} />
      <div className="floating-element" style={{ top: "60%", right: "15%", ["--delay"]: "2s", ["--duration"]: "8s" }} />
      <div className="floating-element" style={{ top: "30%", right: "20%", ["--delay"]: "4s", ["--duration"]: "7s" }} />
      <div className="floating-element" style={{ bottom: "20%", left: "20%", ["--delay"]: "1s", ["--duration"]: "9s" }} />
    </div>
  );
}
