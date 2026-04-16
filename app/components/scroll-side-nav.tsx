"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type ScrollSideNavProps = {
  items: NavItem[];
};

export default function ScrollSideNav({ items }: ScrollSideNavProps) {
  const [isLowered, setIsLowered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoweredRef = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const lastTukRef = useRef(0);

  const playTukTuk = () => {
    const now = window.performance.now();
    if (now - lastTukRef.current < 140) {
      return;
    }

    lastTukRef.current = now;
    const AudioContextClass = window.AudioContext;
    const audioContext = audioContextRef.current ?? new AudioContextClass();
    audioContextRef.current = audioContext;

    const startSound = () => {
      const baseTime = audioContext.currentTime;

      [0, 0.075].forEach((offset, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const start = baseTime + offset;
        const end = start + 0.045;

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(index === 0 ? 210 : 175, start);
        oscillator.frequency.exponentialRampToValueAtTime(index === 0 ? 105 : 88, end);
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.08, start + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, end);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(start);
        oscillator.stop(end);
      });
    };

    if (audioContext.state === "suspended") {
      void audioContext.resume().then(startSound).catch(() => undefined);
      return;
    }

    startSound();
  };

  useEffect(() => {
    let lastY = window.scrollY;
    let scrollFrame = 0;
    const floatingQuery = window.matchMedia("(min-width: 641px)");
    const desktopQuery = window.matchMedia("(min-width: 769px) and (min-height: 641px)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const updateLowered = (nextValue: boolean) => {
      if (isLoweredRef.current === nextValue) {
        return;
      }

      isLoweredRef.current = nextValue;
      setIsLowered(nextValue);
    };

    const updateDesktop = () => {
      setIsDesktop(desktopQuery.matches);
      setIsMobileMenu(mobileQuery.matches);
      if (!mobileQuery.matches) {
        setIsMenuOpen(false);
      }

      if (!floatingQuery.matches) {
        updateLowered(false);
      }
    };

    updateDesktop();

    const onScroll = () => {
      if (scrollFrame) {
        return;
      }

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        const currentY = window.scrollY;

        if (!floatingQuery.matches) {
          updateLowered(false);
          lastY = currentY;
          return;
        }

        if (currentY <= 80) {
          updateLowered(false);
        } else if (currentY > lastY) {
          updateLowered(true);
        } else {
          updateLowered(false);
        }

        lastY = currentY;
      });
    };

    if (floatingQuery.addEventListener) {
      floatingQuery.addEventListener("change", updateDesktop);
      desktopQuery.addEventListener("change", updateDesktop);
      mobileQuery.addEventListener("change", updateDesktop);
    } else {
      floatingQuery.addListener(updateDesktop);
      desktopQuery.addListener(updateDesktop);
      mobileQuery.addListener(updateDesktop);
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      if (floatingQuery.removeEventListener) {
        floatingQuery.removeEventListener("change", updateDesktop);
        desktopQuery.removeEventListener("change", updateDesktop);
        mobileQuery.removeEventListener("change", updateDesktop);
      } else {
        floatingQuery.removeListener(updateDesktop);
        desktopQuery.removeListener(updateDesktop);
        mobileQuery.removeListener(updateDesktop);
      }
    };
  }, []);

  const desktopStyle = isDesktop
    ? ({
        position: "fixed",
        top: isLowered ? "52svh" : "1.2rem",
        right: isLowered ? "2rem" : "2.8rem",
        bottom: "auto",
        left: "auto",
        zIndex: 50,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        marginTop: 0,
        transform: "none",
      } satisfies React.CSSProperties)
    : undefined;

  const tabletLoweredStyle =
    !isDesktop && !isMobileMenu && isLowered
      ? ({
          position: "fixed",
          top: "52svh",
          right: "1.25rem",
          bottom: "auto",
          left: "auto",
          zIndex: 50,
          flexDirection: "column",
          flexWrap: "nowrap",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          marginTop: 0,
          transform: "none",
        } satisfies React.CSSProperties)
      : undefined;

  return (
    <aside
      className={`hero-side${isLowered ? " hero-side-lowered" : ""}${isMenuOpen ? " hero-side-open" : ""}`}
      style={desktopStyle ?? tabletLoweredStyle}
      aria-label="Primary navigation"
    >
      <button
        className="hero-menu-button"
        type="button"
        aria-controls="primary-navigation-links"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        className="hero-side-links"
        id="primary-navigation-links"
        aria-hidden={isMobileMenu && !isMenuOpen}
      >
        {items.map((item, index) => (
          <Link
            key={item.href}
            className="hero-side-link"
            style={{ "--stagger": index } as React.CSSProperties}
            href={item.href}
            tabIndex={isMobileMenu && !isMenuOpen ? -1 : undefined}
            onClick={() => setIsMenuOpen(false)}
            onFocus={playTukTuk}
            onPointerEnter={playTukTuk}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}
