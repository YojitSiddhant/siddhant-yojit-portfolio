import Link from "next/link";
import HomeClock from "./components/home-clock";
import TypewriterName from "./components/typewriter-name";

export default function Home() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame">
          <div className="hero-stage">
            <div className="hero-copy">
              <p className="hero-kicker">Frontend developer focused on clean design, strong functionality, and quality.</p>
              <p className="hero-name">
                <TypewriterName />
              </p>
              <p className="hero-intro">I build clear, modern web interfaces.</p>
            </div>

            <div className="hero-center">
              <HomeClock />
            </div>

            <aside className="hero-side" aria-label="Primary navigation">
              <Link className="hero-side-link" style={{ "--stagger": 0 } as React.CSSProperties} href="/work">
                Work
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
        </section>
      </section>
    </main>
  );
}
