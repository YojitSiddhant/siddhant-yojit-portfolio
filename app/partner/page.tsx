import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="subpage-shell">
      <section className="subpage-header">
        <p className="section-kicker">Need A Partner?</p>
        <h1 className="section-title">Let&apos;s Work Together</h1>
        <p className="subpage-copy">
          Available for internships, junior frontend roles, and freelance website work involving responsive UI implementation and testing-aware delivery.
        </p>
      </section>

      <section className="panel">
        <div className="grid gap-4 sm:grid-cols-2">
          <a className="primary-button" href="mailto:sid.mailconnect@gmail.com">
            Email Siddhant
          </a>
          <a className="secondary-button" href="/Siddhant-Yojit-Resume.pdf" target="_blank" rel="noreferrer">
            Open Resume
          </a>
        </div>
      </section>

      <Link className="back-link" href="/">
        Back to home
      </Link>
    </main>
  );
}
