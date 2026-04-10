import ScrollSideNav from "../components/scroll-side-nav";

const education = [
  {
    level: "Master of Computer Applications",
    institution: "PES University",
    period: "2024 - 2026",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Bachelor of Computer Applications",
    institution: "New Horizon College",
    period: "2020 - 2023",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Class XII",
    institution: "St Francis PU College",
    period: "2019 - 2020",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
  {
    level: "Class X",
    institution: "Narayana e-Techno School",
    period: "2016 - 2017",
    location: "Bangalore, Karnataka, India",
    notes: [],
  },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
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
