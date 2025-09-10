// src/components/Footer/Footer.js
import React, { useState } from "react";
import { Github, Linkedin, Copy, Check } from "lucide-react";
import styles from "./Footer.module.css";
import "../../index.css";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "priyanshuofficial2027@gmail.com";

  const handleCopyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* --- Left Column: Call to Action --- */}
          <div className={styles.footerLeft}>
            <h3 className={styles.footerHeading}>Let's Connect</h3>
            <p className={styles.footerText}>
              Have a question or a project in mind? Feel free to reach out. I'm
              always open to discussing new opportunities.
            </p>
            <div className={styles.emailContainer}>
              <a href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
              <button
                onClick={handleCopyEmail}
                className={styles.copyButton}
                aria-label="Copy email"
              >
                {isCopied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          {/* --- Right Column: Social Links --- */}
          <div className={styles.footerRight}>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/getPraise"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub Profile"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com/in/priyanshu-singh-mdu"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.footerRule} />

        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Priyanshu Singh. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
