"use client";

import { useEffect, useState } from "react";

type Project = {
  title: string;
  degree: string;
  stack: string;
  points: string[];
};

type ProjectsGalleryProps = {
  projects: Project[];
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="projects-gallery">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            className="projects-gallery-card projects-gallery-button"
            onClick={() => setActiveProject(project)}
          >
            <p className="projects-gallery-meta">{project.degree}</p>
            <h2 className="projects-gallery-title">{project.title}</h2>
            <p className="projects-gallery-stack">{project.stack}</p>
            <div className="projects-gallery-copy">
              {project.points.map((point) => (
                <div key={point} className="projects-gallery-point">
                  {point}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {activeProject ? (
        <div
          className="projects-modal-overlay"
          role="presentation"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="projects-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="projects-modal-close"
              aria-label="Close project details"
              onClick={() => setActiveProject(null)}
            >
              x
            </button>
            <p className="projects-gallery-meta">{activeProject.degree}</p>
            <h2 id="project-modal-title" className="projects-gallery-title">
              {activeProject.title}
            </h2>
            <p className="projects-gallery-stack">{activeProject.stack}</p>
            <div className="projects-gallery-copy">
              {activeProject.points.map((point) => (
                <div key={point} className="projects-gallery-point">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
