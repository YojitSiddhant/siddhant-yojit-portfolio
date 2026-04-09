import Link from "next/link";

const education = [
  {
    degree: "Master of Computer Applications",
    school: "PES University",
    period: "2024 - 2026",
    note: "CGPA: 5.99/10",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "New Horizon College",
    period: "2020 - 2023",
    note: "CGPA: 7.59/10",
  },
];

export default function GaragePage() {
  return (
    <main className="subpage-shell">
      <section className="subpage-header">
        <p className="section-kicker">The Garage</p>
        <h1 className="section-title">Background and Build Notes</h1>
        <p className="subpage-copy">
          Education, technical grounding, and the systems behind the interface work.
        </p>
      </section>

      <section className="subpage-grid single-column">
        {education.map((item) => (
          <article key={item.degree} className="panel">
            <p className="font-[family-name:var(--font-display)] text-2xl text-white">{item.degree}</p>
            <p className="mt-2 text-[var(--soft)]">{item.school}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {item.period}
            </p>
            <p className="mt-2 text-[#f1c40f]">{item.note}</p>
          </article>
        ))}
      </section>

      <Link className="back-link" href="/">
        Back to home
      </Link>
    </main>
  );
}
