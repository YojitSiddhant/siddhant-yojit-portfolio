import ScrollSideNav from "../components/scroll-side-nav";

const highlights = [
  "Frontend Developer with internship experience building responsive interfaces and translating business requirements into production-ready UI.",
  "Comfortable working across frontend development, UI testing, and structured defect reporting.",
  "Academic background in computer applications with project experience in full-stack web applications.",
];

const interests = [
  { emoji: "🚗", label: "Cars and automotive design" },
  { emoji: "📱", label: "Mobile phones and new tech" },
  { emoji: "🚆", label: "Railways and train systems" },
  { emoji: "🏏", label: "Cricket" },
  { emoji: "🎵", label: "Music" },
  { emoji: "🎮", label: "Playing video games" },
  { emoji: "🎬", label: "Watching movies" },
  { emoji: "🌍", label: "Travelling" },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function AboutPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="About page">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">About</p>
                  <h1 className="work-home-title">Frontend developer with a strong interest in clean UI and practical web experiences.</h1>
                  <p className="work-home-summary">
                    I am Siddhant Yojit, a frontend-focused developer based in Bangalore. My work is centered on building
                    responsive websites, clear user flows, and maintainable interfaces while also supporting quality
                    through UI testing and issue reporting.
                  </p>
                </header>

                <section className="work-home-section work-animated-card">
                  <p className="work-home-label">Profile</p>
                  <div className="work-home-list">
                    {highlights.map((item) => (
                      <div key={item} className="work-home-list-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="work-home-section work-animated-card">
                  <p className="work-home-label">Hobbies And Interests</p>
                  <div className="hobbies-grid">
                    {interests.map((item, index) => (
                      <span
                        key={item.label}
                        className={`skill-chip hobby-chip ${interests.length % 2 === 1 && index === interests.length - 1 ? "hobby-chip-centered" : ""}`}
                      >
                        <span className="hobby-icon" aria-hidden="true">
                          {item.emoji}
                        </span>
                        <span>{item.label}</span>
                      </span>
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
