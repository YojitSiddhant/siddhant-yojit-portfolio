import ScrollSideNav from "../components/scroll-side-nav";
import { secondaryNavItems } from "../lib/navigation";

const certificates = [
  {
    title: "ChatGPT for Excel",
    issuer: "Great Learning Academy",
    subject: "AI productivity for Excel workflows",
  },
  {
    title: "ChatGPT for HR",
    issuer: "Great Learning Academy",
    subject: "AI productivity for HR tasks and workflow support",
  },
  {
    title: "Data Visualisation with Power BI",
    issuer: "Great Learning Academy",
    subject: "Data analysis and dashboard visualisation",
  },
  {
    title: "Digital Marketing",
    issuer: "Great Learning Academy",
    subject: "Digital marketing fundamentals",
  },
  {
    title: "Google Bard for Microsoft PowerPoint",
    issuer: "Great Learning Academy",
    subject: "AI productivity for presentation workflows",
  },
  {
    title: "HTML",
    issuer: "Great Learning Academy",
    subject: "Frontend web development fundamentals",
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
                    A clean overview of the training programs, certifications, and academic credentials that support my
                    background in web development, AI tools, analytics, and marketing.
                  </p>
                </header>

                <section className="certifications-grid" aria-label="Certificate list">
                  {certificates.map((certificate) => (
                    <article className="certification-card" key={certificate.title}>
                      <p className="certification-category">Issued By</p>
                      <p className="work-home-meta">{certificate.issuer}</p>
                      <h2 className="certification-title">{certificate.title}</h2>
                      <div className="work-home-project-copy">
                        <p className="projects-gallery-point">
                          <strong>Subject:</strong> {certificate.subject}
                        </p>
                      </div>
                    </article>
                  ))}
                </section>
              </section>
            </div>

            <ScrollSideNav items={secondaryNavItems} />

          </div>

          <footer className="page-footer">
            <div className="page-signature">Siddhant Yojit</div>
          </footer>
        </section>
      </section>
    </main>
  );
}
