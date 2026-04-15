"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    let lastY = window.scrollY;
    const desktopQuery = window.matchMedia("(min-width: 769px) and (min-height: 641px)");

    const updateDesktop = () => {
      setIsDesktop(desktopQuery.matches);
    };

    updateDesktop();

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 80) {
        setIsLowered(false);
      } else if (currentY > lastY) {
        setIsLowered(true);
      } else {
        setIsLowered(false);
      }

      lastY = currentY;
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", updateDesktop);
    } else {
      desktopQuery.addListener(updateDesktop);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);

      if (desktopQuery.removeEventListener) {
        desktopQuery.removeEventListener("change", updateDesktop);
      } else {
        desktopQuery.removeListener(updateDesktop);
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

  return (
    <aside
      className={`hero-side${isLowered ? " hero-side-lowered" : ""}`}
      style={desktopStyle}
      aria-label="Primary navigation"
    >
      {items.map((item, index) => (
        <Link
          key={item.href}
          className="hero-side-link"
          style={{ "--stagger": index } as React.CSSProperties}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </aside>
  );
}
