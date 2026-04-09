"use client";

import { useEffect, useState } from "react";

const FULL_NAME = "Siddhant Yojit";

export default function TypewriterName() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const next = FULL_NAME.slice(0, text.length + 1);
          setText(next);

          if (next === FULL_NAME) {
            setIsDeleting(true);
          }

          return;
        }

        const next = FULL_NAME.slice(0, Math.max(0, text.length - 1));
        setText(next);

        if (next.length === 0) {
          setIsDeleting(false);
        }
      },
      isDeleting ? 90 : text === FULL_NAME ? 900 : 150,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, text]);

  return (
    <span className="hero-name-text">
      {text}
      <span className="hero-name-caret" aria-hidden="true" />
    </span>
  );
}
