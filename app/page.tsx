import HomeClock from "./components/home-clock";
import HomeTerminal from "./components/home-terminal";
import ScrollSideNav from "./components/scroll-side-nav";
import TypewriterName from "./components/typewriter-name";
import { homeNavItems } from "./lib/navigation";

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

            <ScrollSideNav items={homeNavItems} />

            <HomeTerminal />

          </div>
        </section>
      </section>
    </main>
  );
}
