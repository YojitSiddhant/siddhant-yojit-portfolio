import HomeClock from "./components/home-clock";
import ScrollSideNav from "./components/scroll-side-nav";
import TypewriterName from "./components/typewriter-name";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

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

            <ScrollSideNav items={navItems} />

          </div>
        </section>
      </section>
    </main>
  );
}
