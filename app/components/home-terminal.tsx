"use client";

import { useId, useMemo, useState } from "react";

const READY_COMMAND = "npm run dev";

const terminalOptions = [
  {
    id: "about",
    label: "About",
    prefix: "[about]",
    content: "Siddhant Yojit is a frontend developer focused on clean design, strong functionality, and polished web experiences.",
  },
  {
    id: "skills",
    label: "Skills",
    prefix: "[skills]",
    content: "HTML, CSS, JavaScript, React, Next.js, Angular, MongoDB, Flutter, SQLite, SQL, and GitHub.",
  },
  {
    id: "projects",
    label: "Projects",
    prefix: "[projects]",
    content: "Portfolio work across frontend interfaces, internship deliverables, and modern web builds with a strong UI focus.",
  },
  {
    id: "contact",
    label: "Contact",
    prefix: "[contact]",
    content: "Use the contact section to get in touch for frontend work, collaboration, or project discussions.",
  },
] as const;

export default function HomeTerminal() {
  const [command, setCommand] = useState("");
  const [selectedOption, setSelectedOption] = useState<(typeof terminalOptions)[number]["id"]>("about");
  const inputId = useId();

  const isReady = useMemo(() => command.trim().toLowerCase() === READY_COMMAND, [command]);
  const activeOption = terminalOptions.find((option) => option.id === selectedOption) ?? terminalOptions[0];

  return (
    <section className="home-terminal" aria-label="Interactive command prompt">
      <div className="home-terminal-window">
        <div className="home-terminal-bar" aria-hidden="true">
          <span className="home-terminal-dot home-terminal-dot-close" />
          <span className="home-terminal-dot home-terminal-dot-minimize" />
          <span className="home-terminal-dot home-terminal-dot-expand" />
          <span className="home-terminal-title">portfolio-terminal</span>
        </div>

        <label className="home-terminal-input-row" htmlFor={inputId}>
          <span className="home-terminal-prompt">visitor@portfolio:~$</span>
          <input
            id={inputId}
            className="home-terminal-input"
            type="text"
            autoComplete="off"
            spellCheck={false}
            value={command}
            onChange={(event) => {
              const nextCommand = event.target.value;
              setCommand(nextCommand);

              if (nextCommand.trim().toLowerCase() !== READY_COMMAND) {
                setSelectedOption("about");
              }
            }}
            placeholder="type npm run dev"
            aria-describedby={`${inputId}-hint`}
          />
        </label>

        <p className="home-terminal-hint" id={`${inputId}-hint`}>
          Type <span>npm run dev</span> to reveal project info.
        </p>

        <div
          className={`home-terminal-output${isReady ? " is-visible" : ""}`}
          aria-live="polite"
        >
          <p className="home-terminal-line">
            <span className="home-terminal-prefix">[name]</span>
            <span>Siddhant Yojit</span>
          </p>

          <p className="home-terminal-line">
            <span className="home-terminal-prefix">[select]</span>
            <span>Choose what you want to know.</span>
          </p>

          <div className="home-terminal-options" role="list" aria-label="Info options">
            {terminalOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`home-terminal-option${selectedOption === option.id ? " is-active" : ""}`}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="home-terminal-line home-terminal-line-detail">
            <span className="home-terminal-prefix">{activeOption.prefix}</span>
            <span>{activeOption.content}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
