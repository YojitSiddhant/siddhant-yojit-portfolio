"use client";

import { useState, useTransition } from "react";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isPending, startTransition] = useTransition();

  function updateField(field: keyof typeof initialState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        const result = (await response.json()) as { error?: string };

        if (!response.ok) {
          setIsError(true);
          setFeedback(result.error ?? "Message could not be sent.");
          return;
        }

        setIsError(false);
        setFeedback("Message sent successfully. I will get back to you soon.");
        setForm(initialState);
      } catch {
        setIsError(true);
        setFeedback("Something went wrong while sending your message.");
      }
    });
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span className="contact-label">Name</span>
          <input
            className="contact-input"
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label className="contact-field">
          <span className="contact-label">Email</span>
          <input
            className="contact-input"
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="your@email.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="contact-field">
        <span className="contact-label">Subject</span>
        <input
          className="contact-input"
          type="text"
          name="subject"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          placeholder="Project inquiry"
          required
        />
      </label>

      <label className="contact-field">
        <span className="contact-label">Message</span>
        <textarea
          className="contact-input contact-textarea"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          rows={6}
          placeholder="Tell me about your project, timeline, or requirement."
          required
        />
      </label>

      <div className="contact-form-actions">
        <button className="contact-submit-button" type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </button>
        {feedback ? (
          <p className={isError ? "contact-feedback is-error" : "contact-feedback"} aria-live="polite">
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
