import Link from "next/link";
import ContactForm from "../components/contact-form";

export default function ContactPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Contact page">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">Contact</p>
                  <h1 className="work-home-title">Let&apos;s Connect</h1>
                  <p className="work-home-summary">
                    Open to internships, junior frontend roles, freelance website work, and collaboration opportunities.
                  </p>
                </header>

                <section className="work-home-section">
                  <div className="projects-gallery">
                    <article className="projects-gallery-card contact-form-panel">
                      <p className="projects-gallery-meta">Send A Message</p>
                      <h2 className="projects-gallery-title">Contact Form</h2>
                      <p className="work-home-summary contact-form-summary">
                        Clients can send a message here and it will appear inside your admin panel inbox.
                      </p>
                      <div className="contact-form-wrap">
                        <ContactForm />
                      </div>
                    </article>

                    <article className="projects-gallery-card">
                      <p className="projects-gallery-meta">Email</p>
                      <h2 className="projects-gallery-title">sid.mailconnect@gmail.com</h2>
                      <div className="work-home-project-copy">
                        <p className="projects-gallery-point">
                          Best for project discussions, job opportunities, and direct communication.
                        </p>
                      </div>
                    </article>

                    <article className="projects-gallery-card">
                      <p className="projects-gallery-meta">Phone</p>
                      <h2 className="projects-gallery-title">+91 7899304430</h2>
                      <div className="work-home-project-copy">
                        <p className="projects-gallery-point">
                          Available for quick contact regarding interviews, work, and collaboration.
                        </p>
                      </div>
                    </article>

                    <article className="projects-gallery-card">
                      <p className="projects-gallery-meta">Location</p>
                      <h2 className="projects-gallery-title">Bangalore, Karnataka, India</h2>
                      <div className="work-home-project-copy">
                        <p className="projects-gallery-point">
                          Based in Bangalore and open to onsite, hybrid, and remote opportunities.
                        </p>
                      </div>
                    </article>

                    <article className="projects-gallery-card">
                      <p className="projects-gallery-meta">Profiles</p>
                      <h2 className="projects-gallery-title">LinkedIn And GitHub</h2>
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <a
                          href="https://www.linkedin.com/in/siddhant-yojit-ab805327b/"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Open LinkedIn profile"
                          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#0a66c2] transition hover:-translate-y-1 hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                          </svg>
                        </a>

                        <a
                          href="https://github.com/YojitSiddhant"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Open GitHub profile"
                          className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:border-[rgba(241,196,15,0.45)] hover:bg-[rgba(241,196,15,0.08)] hover:text-[#f1c40f]"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                            <path d="M12 2C6.477 2 2 6.596 2 12.264c0 4.534 2.865 8.38 6.839 9.738.5.096.682-.223.682-.495 0-.245-.008-.893-.013-1.752-2.782.62-3.369-1.4-3.369-1.4-.455-1.185-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.004.073 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.664.349-1.115.635-1.372-2.22-.26-4.555-1.14-4.555-5.074 0-1.121.39-2.038 1.03-2.756-.103-.261-.447-1.31.097-2.73 0 0 .84-.277 2.75 1.053A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.348c1.909-1.33 2.747-1.053 2.747-1.053.546 1.42.202 2.469.1 2.73.64.718 1.028 1.635 1.028 2.756 0 3.944-2.339 4.811-4.566 5.066.359.319.678.948.678 1.911 0 1.379-.012 2.49-.012 2.829 0 .274.18.595.688.494C19.138 20.64 22 16.796 22 12.264 22 6.596 17.523 2 12 2Z" />
                          </svg>
                        </a>
                      </div>
                    </article>
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
              <Link className="hero-side-link" style={{ "--stagger": 4 } as React.CSSProperties} href="/education">
                Education
              </Link>
              <Link className="hero-side-link" style={{ "--stagger": 5 } as React.CSSProperties} href="/certifications">
                Certifications
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
