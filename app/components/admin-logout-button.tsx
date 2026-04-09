"use client";

import { useTransition } from "react";

export default function AdminLogoutButton() {
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(async () => {
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.reload();
    });
  }

  return (
    <button className="contact-submit-button contact-submit-button-secondary" type="button" onClick={handleLogout}>
      {isPending ? "Signing Out..." : "Logout"}
    </button>
  );
}
