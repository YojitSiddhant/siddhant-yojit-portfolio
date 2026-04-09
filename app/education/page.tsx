import Link from "next/link";

const education = [
  {
    level: "Master of Computer Applications",
    institution: "PES University",
    period: "2024 - 2026",
    result: "Currently Pursuing | Current Overall CGPA: 5.99/10",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Bachelor of Computer Applications",
    institution: "New Horizon College",
    period: "2020 - 2023",
    result: "CGPA: 7.59/10",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Class XII",
    institution: "St Francis PU College",
    period: "2019 - 2020",
    result: "61.33%",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Class X",
    institution: "Narayana e-Techno School",
    period: "2016 - 2017",
    result: "CGPA: 10/10",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
];

export default function EducationPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Education overview">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">Education</p>
                  <h1 className="work-home-title">Academic Background</h1>
                  <p className="work-home-summary">
                    My academic journey across school, undergraduate study, and postgraduate coursework in computer
                    applications.
                  </p>
                </header>

                <section className="work-home-section">
                  <div className="projects-gallery">
                    {education.map((item) => (
                      <article key={item.level} className="projects-gallery-card">
                        <p className="projects-gallery-meta">{item.period}</p>
                        <h2 className="projects-gallery-title">{item.level}</h2>
                        <p className="work-home-meta">{item.institution}</p>
                        <p className="work-home-meta">{item.location}</p>
                        <p className="projects-gallery-stack">{item.result}</p>
                        {item.notes.length > 0 ? (
                          <div className="work-home-project-copy">
                            {item.notes.map((note) => (
                              <p key={note} className="projects-gallery-point">
                                {note}
                              </p>
                            ))}
                          </div>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </section>
              </section>
            </div>

            <aside className="hero-side" aria-label="Primary navigation">
              <Link className="hero-side-link" style={{ "--stagger": 0 } as React.CSSProperties} href="/">
                Home
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 1 } as React.CSSProperties} href="/work">
                Work
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 2 } as React.CSSProperties} href="/projects">
                Projects
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 3 } as React.CSSProperties} href="/skills">
                Skills
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
