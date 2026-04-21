import type { Metadata } from "next";
import Image from "next/image";
import ScrollSideNav from "../components/scroll-side-nav";
import { secondaryNavItems } from "../lib/navigation";

const featuredWork = [
  {
    title: "Selco Lift",
    stack: "Live company website",
    image: "/selco-logo.webp",
    imageAlt: "Selco Lift logo",
    href: "https://selcolift.com/",
    cta: "Visit Website",
  },
  {
    title: "ARAQ",
    stack: "Live product website",
    image: "/araq-logo-black.png",
    imageAlt: "ARAQ logo",
    href: "https://araq.techvantalabs.com/",
    cta: "Visit Website",
  },
  {
    title: "Genius Hunt 2026",
    stack: "Live campaign website",
    image: "/genius-hunt.jpeg",
    imageAlt: "Genius Hunt 2026 logo",
    href: "https://dblms.techvantalabs.com/",
    cta: "Visit Website",
  },
  {
    title: "MD PAWAR BANK",
    stack: "Live banking website",
    image: "/mdp-war-bank.png",
    imageAlt: "MD PAWAR BANK logo",
    href: "https://mdpwarbank.in.net/",
    cta: "Visit Website",
  },
] as const;

export const metadata: Metadata = {
  title: "My Work | Siddhant Yojit",
  description:
    "A showcase page for Siddhant Yojit's live work, portfolio builds, and website projects.",
};

export default function MyWorkPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="My work page">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label work-page-label">My Work</p>
                  <h1 className="work-home-title">Selected work and contributions across live client and product websites.</h1>
                </header>

                <section className="work-home-section">
                  <div className="projects-gallery">
                    {featuredWork.map((work) => (
                      <article key={work.title} className="projects-gallery-card">
                        {work.image ? (
                          <div className="flex min-h-44 items-center justify-center rounded-[22px] border border-white/8 bg-white px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                            <Image
                              src={work.image}
                              alt={work.imageAlt}
                              width={240}
                              height={160}
                              className="h-auto max-h-32 w-auto object-contain"
                              priority={work.title === "Selco Lift"}
                            />
                          </div>
                        ) : (
                          <div className="flex min-h-44 items-center justify-center rounded-[22px] border border-dashed border-white/10 bg-white/4 px-6 py-6 text-center text-sm uppercase tracking-[0.08em] text-white/45">
                            Logo coming soon
                          </div>
                        )}
                        <h2 className="projects-gallery-title">{work.title}</h2>
                        <p className="projects-gallery-stack">{work.stack}</p>
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <a
                            href={work.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center rounded-full border border-[rgba(var(--accent-rgb),0.28)] bg-[rgba(var(--accent-rgb),0.12)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent-rgb),0.48)] hover:bg-[rgba(var(--accent-rgb),0.18)]"
                          >
                            {work.cta}
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
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
