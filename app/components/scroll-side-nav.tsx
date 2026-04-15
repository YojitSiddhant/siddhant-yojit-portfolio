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
  const isLoweredRef = useRef(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let scrollFrame = 0;
    const floatingQuery = window.matchMedia("(min-width: 641px)");
    const desktopQuery = window.matchMedia("(min-width: 769px) and (min-height: 641px)");
    const updateLowered = (nextValue: boolean) => {
      if (isLoweredRef.current === nextValue) {
        return;
      }

      isLoweredRef.current = nextValue;
      setIsLowered(nextValue);
    };

    const updateDesktop = () => {
      setIsDesktop(desktopQuery.matches);
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
    } else {
      floatingQuery.addListener(updateDesktop);
      desktopQuery.addListener(updateDesktop);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      if (floatingQuery.removeEventListener) {
        floatingQuery.removeEventListener("change", updateDesktop);
        desktopQuery.removeEventListener("change", updateDesktop);
      } else {
        floatingQuery.removeListener(updateDesktop);
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

  const tabletLoweredStyle =
    !isDesktop && isLowered
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
      className={`hero-side${isLowered ? " hero-side-lowered" : ""}`}
      style={desktopStyle ?? tabletLoweredStyle}
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
