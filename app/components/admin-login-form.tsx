"use client";

import { useState, useTransition } from "react";

export default function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    if (!password.trim()) {
      setFeedback("Enter the admin password.");
      return;
    }

    startTransition(async () => {
      try {
        const response = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });

        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          setFeedback(result.error ?? "Login failed.");
          return;
        }

        window.location.reload();
      } catch {
        setFeedback("Login request failed.");
      }
    });
  }

  return (
    <form className="contact-form-card admin-login-card" noValidate onSubmit={handleSubmit}>
      <label className="contact-field">
        <span className="contact-label">Admin Password</span>
        <input
          className="contact-input"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          autoFocus
        />
      </label>

      <div className="contact-form-actions">
        <button className="contact-submit-button" type="submit" disabled={isPending}>
          {isPending ? "Checking..." : "Open Admin Panel"}
        </button>
        {feedback ? (
          <p className="contact-feedback is-error" aria-live="polite">
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
