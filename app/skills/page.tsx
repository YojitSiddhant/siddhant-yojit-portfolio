import ExtraSkillsPopup from "../components/extra-skills-popup";
import ScrollSideNav from "../components/scroll-side-nav";

const skills = [
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26", alt: "HTML5 logo" },
  { name: "CSS", logo: "https://cdn.simpleicons.org/css/1572B6", alt: "CSS logo" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", alt: "JavaScript logo" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", alt: "React logo" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", alt: "Next.js logo" },
  { name: "Angular", logo: "https://cdn.simpleicons.org/angular/DD0031", alt: "Angular logo" },
  { name: "Mongo DB", logo: "https://cdn.simpleicons.org/mongodb/47A248", alt: "MongoDB logo" },
  { name: "Flutter", logo: "https://cdn.simpleicons.org/flutter/02569B", alt: "Flutter logo" },
  { name: "SQLite", logo: "https://cdn.simpleicons.org/sqlite/003B57", alt: "SQLite logo" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/databricks/FF3621", alt: "Database icon for SQL" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF", alt: "GitHub logo" },
];

const toolsAndTesting = [
  "Manual Testing",
  "UI Testing",
];

const professionalSkills = [
  "Communication",
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function SkillsPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Skills overview">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label skills-page-label">Skills</p>
                  <h1 className="work-home-title skills-page-title">Core Technical Skills</h1>
                  <p className="work-home-summary">
                    Core frontend, backend, database, and testing skills used across internship work and academic
                    projects.
                  </p>
                </header>

                <section className="work-home-section">
                  <div className="skills-single-grid">
                    {skills.map((skill) => (
                      <article key={skill.name} className="skills-single-card">
                        <span className="skills-logo-badge" aria-hidden="true">
                          <img className="skills-logo-image" src={skill.logo} alt={skill.alt} />
                        </span>
                        <span className="skills-single-name">{skill.name}</span>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="work-home-section">
                  <ExtraSkillsPopup
                    toolsAndTesting={toolsAndTesting}
                    professionalSkills={professionalSkills}
                  />
                </section>
              </section>
            </div>

            <ScrollSideNav items={navItems} />

          </div>

          <footer className="page-footer">
            <div className="page-signature">Siddhant Yojit</div>
          </footer>
        </section>
      </section>
    </main>
  );
}
