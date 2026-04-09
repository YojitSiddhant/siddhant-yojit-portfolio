"use client";

import { useEffect, useState } from "react";

function getTimeParts(date: Date) {
  const formatted = new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(date);
  const parts = formatted.replace(/\s/g, "").match(/(\d{2}):(\d{2}):(\d{2})(AM|PM)/i);

  if (!parts) {
    return ["--", "--", "--", "--"];
  }

  const [, hours, minutes, seconds, meridiem] = parts;
  return [hours, minutes, seconds, meridiem.toUpperCase()];
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export default function HomeClock() {
  const [now, setNow] = useState<Date | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => {
      setNow(new Date());
    }, 0);

    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  const [hours, minutes, seconds, meridiem] = now ? getTimeParts(now) : ["--", "--", "--", "--"];

  return (
    <div className="clock-panel" aria-label="Live digital clock">
      <div className="clock-grid">
        {[hours, minutes, seconds, meridiem].map((part, index) => (
          <div
            key={`${part}-${index}`}
            className={`clock-card${activeIndex === index ? " is-active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <span className="clock-divider" aria-hidden="true" />
            <span key={`${part}-${index}-face`} className="clock-flip-face">
              <span className="clock-number">{part}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="clock-location">Bangalore, Karnataka, India</p>
      <p className="clock-date">{now ? formatDate(now) : "Loading time..."}</p>
    </div>
  );
}
