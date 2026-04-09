import { cookies } from "next/headers";
import AdminLoginForm from "../components/admin-login-form";
import AdminLogoutButton from "../components/admin-logout-button";
import { adminCookieName, isValidAdminSession } from "@/lib/admin-auth";
import { readContactMessages } from "@/lib/contact-messages";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(adminCookieName)?.value;
  const isAuthenticated = isValidAdminSession(session);
  const messages = isAuthenticated ? await readContactMessages() : [];

  return (
    <main className="admin-shell text-[var(--foreground)]">
      <section className="admin-layout">
        <section className="admin-panel" aria-label="Admin panel">
          {isAuthenticated ? (
            <div className="admin-corner-action">
              <AdminLogoutButton />
            </div>
          ) : null}

          <header className="work-home-section work-animated-card page-intro-card">
            <p className="work-home-label work-page-label">Admin</p>
            <h1 className="work-home-title">Client Messages Inbox</h1>
            <p className="work-home-summary">
              Review messages submitted from the contact page. This dashboard is private and separate from the
              portfolio navigation.
            </p>
          </header>

          {isAuthenticated ? (
            <>
              <section className="work-home-section">
                <div className="admin-toolbar">
                  <p className="projects-gallery-meta">
                    {messages.length} {messages.length === 1 ? "message" : "messages"}
                  </p>
                </div>
              </section>

              <section className="work-home-section">
                <div className="admin-messages-grid">
                  {messages.length > 0 ? (
                    messages.map((message) => (
                      <article className="admin-message-card" key={message.id}>
                        <div className="admin-message-head">
                          <div>
                            <p className="projects-gallery-meta">{message.submittedAt.slice(0, 10)}</p>
                            <h2 className="projects-gallery-title">{message.subject}</h2>
                          </div>
                        </div>
                        <div className="work-home-project-copy">
                          <p className="projects-gallery-point">
                            <strong>Name:</strong> {message.name}
                          </p>
                          <p className="projects-gallery-point">
                            <strong>Email:</strong> {message.email}
                          </p>
                          <p className="projects-gallery-point">
                            <strong>Message:</strong> {message.message}
                          </p>
                        </div>
                      </article>
                    ))
                  ) : (
                    <article className="admin-message-card">
                      <h2 className="projects-gallery-title">No messages yet</h2>
                      <p className="work-home-summary">
                        New contact form submissions will appear here after visitors send them from your contact page.
                      </p>
                    </article>
                  )}
                </div>
              </section>
            </>
          ) : (
            <section className="work-home-section admin-login-section">
              <AdminLoginForm />
            </section>
          )}
        </section>
      </section>
    </main>
  );
}
