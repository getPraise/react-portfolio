// src/components/Lightbox/Lightbox.js
import React, { useState, useEffect, useCallback } from "react"; // Import useCallback
import styles from "./Lightbox.module.css";

const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  // Wrap the functions in useCallback
  const nextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },
    [images.length]
  ); // This function only changes if the number of images changes

  const prevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    },
    [images.length]
  ); // This function only changes if the number of images changes

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextImage, prevImage, onClose]); // <-- UPDATED DEPENDENCY ARRAY

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button
        className={`${styles.navButton} ${styles.closeButton}`}
        onClick={onClose}
      >
        &times;
      </button>

      <button
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevImage}
      >
        &#10094;
      </button>

      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery view ${currentIndex + 1}`}
        />
      </div>

      <button
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Lightbox;
