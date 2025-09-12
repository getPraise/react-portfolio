// src/components/Hero/Hero.js
import React from "react";
import styles from "./Hero.module.css";
import "../../index.css";

const Hero = () => {
  // Simple smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.content}>
            <h1>
              Hi, I'm <span>Priyanshu Singh</span>
            </h1>
            <h2>
              B.Tech in CSE (AI & ML) | Building Expertise in Machine Learning &
              Algorithms
            </h2>

            <div className={styles.actions}>
              <button
                className={styles.primaryButton}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* --- THIS IS THE CORRECTED IMAGE SECTION --- */}
          <div className={styles.imageContainer}>
            {/* This div provides the background color and the circular shape */}
            <div className={styles.imageBackground}>
              <img
                src="/images/professional-photo.jpg" // Use your transparent, cropped photo
                alt="Priyanshu Singh"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
