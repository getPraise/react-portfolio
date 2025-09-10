// src/components/Projects/Projects.js
import React, { useState } from "react";
import { PROJECTS } from "../../data/data";
import ProjectModal from "../ProjectModal/ProjectModal";
import styles from "./Projects.module.css";
import "../../index.css"; // Make sure this global CSS is imported

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className={styles.projectsSection}>
        <div className="container">
          <h2 className={styles.title}>Featured Projects</h2>
          <div className={styles.grid}>
            {/* We map over the first 3 projects for the homepage */}
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className={styles.card}
                onClick={() => openModal(project)}
              >
                {/* Image is a direct child of the card */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={styles.cardImage}
                />

                {/* The new overlay is a direct child of the card */}
                <div className={styles.cardOverlay}>
                  <div className={styles.overlayText}>View Details</div>
                  <div className={styles.overlaySubtext}>
                    Click to learn more
                  </div>
                </div>

                {/* The content container is a direct child of the card */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The modal logic remains outside the section, which is correct */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default Projects;
