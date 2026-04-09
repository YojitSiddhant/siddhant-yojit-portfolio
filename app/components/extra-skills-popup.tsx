"use client";

import { useEffect, useState } from "react";

type ExtraSkillsPopupProps = {
  toolsAndTesting: string[];
  professionalSkills: string[];
};

export default function ExtraSkillsPopup({
  toolsAndTesting,
  professionalSkills,
}: ExtraSkillsPopupProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className="extra-skills-trigger" onClick={() => setIsOpen(true)}>
        <span className="extra-skills-trigger-label">Extra Skills</span>
        <span className="extra-skills-trigger-copy">Tools And Testing + Professional Skills</span>
      </button>

      {isOpen ? (
        <div
          className="extra-skills-overlay"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="extra-skills-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="extra-skills-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="extra-skills-close"
              aria-label="Close extra skills"
              onClick={() => setIsOpen(false)}
            >
              x
            </button>

            <p className="work-home-label">Skills</p>
            <h2 id="extra-skills-title" className="work-home-title">
              Extra Skills
            </h2>

            <section className="extra-skills-section">
              <p className="work-home-label">Tools And Testing</p>
              <div className="skills-chip-grid">
                {toolsAndTesting.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="extra-skills-section">
              <p className="work-home-label">Professional Skills</p>
              <div className="skills-chip-grid">
                {professionalSkills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
