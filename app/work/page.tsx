import Link from "next/link";

const experience = {
  role: "UI Developer Intern",
  company: "TechVanta Labs Pvt. Ltd.",
  period: "Jan 2026 - Present",
  location: "Bengaluru, India",
  summary:
    "Frontend internship experience focused on responsive websites, reusable UI structure, and testing-aware delivery.",
  responsibilities: [
    "Develop client-facing websites and responsive user flows aligned with business requirements, brand guidelines, and maintainable frontend implementation practices.",
    "Build UI screens, navigation journeys, and reusable layout components for business and NGO websites using HTML, CSS, JavaScript, and component-based frontend workflows.",
    "Support software testing by writing test cases, validating UI behavior across key flows, identifying visual and functional issues, and reporting defects for resolution.",
  ],
};

export default function WorkPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Work overview">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">Work</p>
                  <h1 className="work-home-title">{experience.role}</h1>
                  <p className="work-home-meta">
                    {experience.company} | {experience.period} | {experience.location}
                  </p>
                  <p className="work-home-summary">{experience.summary}</p>
                </header>

                <section className="work-home-section work-animated-card">
                  <p className="work-home-label">Responsibilities</p>
                  <div className="work-home-list">
                    {experience.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="work-home-list-item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

              </section>
            </div>

            <aside className="hero-side" aria-label="Primary navigation">
              <Link className="hero-side-link" style={{ "--stagger": 0 } as React.CSSProperties} href="/">
                Home
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 1 } as React.CSSProperties} href="/projects">
                Projects
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 2 } as React.CSSProperties} href="/skills">
                Skills
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 3 } as React.CSSProperties} href="/education">
                Education
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 4 } as React.CSSProperties} href="/certifications">
                Certifications
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 5 } as React.CSSProperties} href="/contact">
                Contact
              </Link>
            </aside>

          </div>

          <footer className="page-footer">
            <div className="page-signature">Siddhant Yojit</div>
          </footer>
        </section>
      </section>
    </main>
  );
}
