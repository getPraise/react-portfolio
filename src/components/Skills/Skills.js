// src/components/Skills/Skills.js
import React from "react";
import { SKILLS } from "../../data/data"; // Import data from our new file
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skillsMarquee}>
      <div className={styles.marqueeContainer}>
        {/* We render the list twice for a seamless loop */}
        {SKILLS.concat(SKILLS).map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
