import Link from "next/link";

const certificates = [
  {
    title: "ChatGPT for Excel",
    category: "AI Productivity",
    href: "/certificates/chatgpt-for-excel.pdf",
  },
  {
    title: "ChatGPT for HR",
    category: "AI Productivity",
    href: "/certificates/chatgpt-for-hr.pdf",
  },
  {
    title: "Class 12 Marks Card",
    category: "Academic Record",
    href: "/certificates/class-12-marks-card.pdf",
  },
  {
    title: "Data Visualisation with Power BI",
    category: "Analytics",
    href: "/certificates/data-visualisation-with-power-bi.pdf",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    href: "/certificates/digital-marketing.pdf",
  },
  {
    title: "Fraudulent Detection in Online Market Place",
    category: "Project Certificate",
    href: "/certificates/fraudulent-detection-in-online-market-place.pdf",
  },
  {
    title: "Google Bard for Microsoft PowerPoint",
    category: "AI Productivity",
    href: "/certificates/google-bard-for-microsoft-powerpoint.pdf",
  },
  {
    title: "HTML",
    category: "Web Development",
    href: "/certificates/html-certificate.pdf",
  },
] as const;

export default function CertificationsPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Certifications page">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">Certifications</p>
                  <h1 className="work-home-title">Training, academic records, and skill credentials.</h1>
                  <p className="work-home-summary">
                    A selected collection of certificates and academic documents that reflect my work across web
                    development, AI tools, analytics, and marketing.
                  </p>
                </header>

                <section className="certifications-grid" aria-label="Certificate list">
                  {certificates.map((certificate) => (
                    <article className="certification-card" key={certificate.href}>
                      <p className="certification-category">{certificate.category}</p>
                      <h2 className="certification-title">{certificate.title}</h2>
                      <p className="certification-copy">PDF document available for preview or direct download.</p>
                      <div className="certification-actions">
                        <a
                          className="certification-link"
                          href={certificate.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View PDF
                        </a>
                        <a className="certification-link certification-link-secondary" href={certificate.href} download>
                          Download
                        </a>
                      </div>
                    </article>
                  ))}
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
              <Link className="hero-side-link" style={{ "--stagger": 4 } as React.CSSProperties} href="/education">
                Education
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
