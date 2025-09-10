// src/components/BackToTop/BackToTop.js
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${styles.backToTopButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Go to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default BackToTop;
