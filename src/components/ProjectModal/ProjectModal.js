// src/components/ProjectModal/ProjectModal.js
import React, { useState } from "react";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.carousel}>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className={styles.carouselImage}
          />
          {project.images.length > 1 && (
            <>
              <button
                className={`${styles.carouselButton} ${styles.prevButton}`}
                onClick={prevImage}
              >
                &#10094;
              </button>
              <button
                className={`${styles.carouselButton} ${styles.nextButton}`}
                onClick={nextImage}
              >
                &#10095;
              </button>
            </>
          )}
        </div>

        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <p className={styles.modalDescription}>{project.longDescription}</p>

          <h3 className={styles.sectionTitle}>Key Features</h3>
          <ul className={styles.featuresList}>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <div className={styles.tags}>
            {project.techStack.map((tech, index) => (
              <span key={index} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>

          <div className={styles.links}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.liveLink}`}
            >
              Live Preview
            </a>
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.sourceLink}`}
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
