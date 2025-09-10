// src/pages/ProjectsPage.js
import React, { useState } from "react";
import { PROJECTS } from "../data/data";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import styles from "./ProjectsPage.module.css";
import cardStyles from "../components/Projects/Projects.module.css";
import "../index.css";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <main className={styles.projectsPage}>
        <div className="container">
          <h1 className={styles.title}>All Projects</h1>

          {/* --- NEW: Subheading to guide the user --- */}
          <p className={styles.subtitle}>
            Filter by category to explore my work.
          </p>

          <div className={styles.filterBar}>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterButton} ${
                  activeFilter === tag ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className={cardStyles.grid}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={cardStyles.card}
                onClick={() => openModal(project)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={cardStyles.cardImage}
                />
                <div className={cardStyles.cardOverlay}>
                  <div className={cardStyles.overlayText}>View Details</div>
                  <div className={cardStyles.overlaySubtext}>
                    Click to learn more
                  </div>
                </div>
                <div className={cardStyles.cardContent}>
                  <h3 className={cardStyles.cardTitle}>{project.title}</h3>
                  <p className={cardStyles.cardDescription}>
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectsPage;
