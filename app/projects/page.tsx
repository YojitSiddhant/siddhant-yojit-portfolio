import ProjectsGallery from "../components/projects-gallery";
import ScrollSideNav from "../components/scroll-side-nav";

const projects = [
  {
    title: "Smart Civic Grievance Redressal Web Application",
    degree: "MCA Project",
    stack: "Flutter Web, Spring Boot, MongoDB",
    points: [
      "Built a web-based civic grievance platform to centralize complaint registration, assignment, tracking, and resolution.",
      "Implemented role-based access for citizens and administrators, complaint status tracking, image uploads, and crowdfunding-related support features.",
      "Integrated Flutter Web with Spring Boot services and MongoDB to manage complaint records and user interactions end to end.",
    ],
  },
  {
    title: "Smart Note-Taking App",
    degree: "MCA Mini Project",
    stack: "HTML, CSS, JavaScript, Node.js, SQLite",
    points: [
      "Developed a secure note management application with user authentication, CRUD operations, search, and priority-based organization.",
      "Implemented JWT-based authentication and password hashing with bcrypt.js to secure user access and note ownership.",
      "Designed a responsive interface using HTML, CSS, and JavaScript, with Node.js and SQLite handling backend logic and local data storage.",
    ],
  },
  {
    title: "Fake News Detection System",
    degree: "BCA Mini Project",
    stack: "Python, Flask, Scikit-learn, Pandas, NumPy, Jupyter",
    points: [
      "Built a fake news detection application to help users distinguish between real and misleading news content through a simple web interface.",
      "Used Python with Flask and a machine learning pipeline based on TF-IDF vectorization and Passive Aggressive Classifier concepts described in the project documentation.",
      "Worked with Scikit-learn, Pandas, and NumPy in a Jupyter-based workflow to prepare data, train the model, and return prediction results for user-submitted news text.",
    ],
  },
  {
    title: "Fraudulent Seller Detection in Online Marketplaces",
    degree: "BCA Project",
    stack: "JSP, Java, JDBC, MySQL, Apache Tomcat, HTML, CSS, JavaScript",
    points: [
      "Developed a marketplace-focused fraud detection system aimed at identifying untrusted sellers and improving customer confidence in online purchases.",
      "Designed the project around seller trust, user feedback, and web personalization concepts so buyers could review product reliability before making decisions.",
      "Implemented the application with JSP, Java, JDBC, MySQL, and Apache Tomcat, with a frontend built using HTML, CSS, and JavaScript for seller data and system output screens.",
    ],
  },
];

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function ProjectsPage() {
  return (
    <main className="home-shell relative overflow-hidden text-[var(--foreground)]">
      <section className="mx-auto flex min-h-screen w-full max-w-none flex-col px-0 pb-0 pt-0">
        <section className="hero-frame work-page-frame">
          <div className="hero-stage work-page-stage">
            <div className="work-page-center">
              <section className="work-home-content" aria-label="Academic projects overview">
                <header className="work-home-section work-animated-card page-intro-card">
                  <p className="work-home-label">Projects</p>
                  <h1 className="work-home-title">BCA And MCA Academic Projects</h1>
                  <p className="work-home-summary">
                    Project work completed during BCA and MCA, covering full-stack web development, structured workflows, and backend integration.
                  </p>
                </header>

                <section className="work-home-section">
                  <ProjectsGallery projects={projects} />
                </section>
              </section>
            </div>

            <ScrollSideNav items={navItems} />

          </div>

          <footer className="page-footer">
            <div className="page-signature">Siddhant Yojit</div>
          </footer>
        </section>
      </section>
    </main>
  );
}
