// src/components/Navbar/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu

  // Function to close the menu, used when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={`${styles.navContent} container`}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            Priyanshu Singh<span>.</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className={styles.desktopNavLinks}>
            <Link
              to="/"
              className={`${styles.navLink} ${
                location.pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${styles.navLink} ${
                location.pathname === "/about" ? styles.active : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`${styles.navLink} ${
                location.pathname === "/projects" ? styles.active : ""
              }`}
            >
              Projects
            </Link>
            <Link
              to="/dashboard"
              className={`${styles.navLink} ${
                location.pathname === "/dashboard" ? styles.active : ""
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/blog"
              className={`${styles.navLink} ${
                location.pathname === "/blog" ? styles.active : ""
              }`}
            >
              Blog
            </Link>
          </div>

          <div className={styles.rightSide}>
            <button className={styles.themeToggle} onClick={toggleTheme}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Hamburger Menu Button (only visible on mobile) */}
            <button
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.line1Open : ""
                }`}
              />
              {/* --- THIS IS THE CORRECTED LINE --- */}
              <div
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.line2Open : ""
                }`}
              />
              <div
                className={`${styles.hamburgerLine} ${
                  isMenuOpen ? styles.line3Open : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <Link onClick={closeMenu} to="/" className={styles.mobileNavLink}>
          Home
        </Link>
        <Link onClick={closeMenu} to="/about" className={styles.mobileNavLink}>
          About
        </Link>
        <Link
          onClick={closeMenu}
          to="/projects"
          className={styles.mobileNavLink}
        >
          Projects
        </Link>
        <Link
          onClick={closeMenu}
          to="/dashboard"
          className={styles.mobileNavLink}
        >
          Dashboard
        </Link>
        <Link onClick={closeMenu} to="/blog" className={styles.mobileNavLink}>
          Blog
        </Link>
      </div>
    </>
  );
};

export default Navbar;
