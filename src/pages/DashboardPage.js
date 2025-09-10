// src/pages/DashboardPage.js
import React from "react";
import { CODING_PROFILES } from "../data/data";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import styles from "./DashboardPage.module.css";
import "../index.css";

// The page now accepts the theme prop
const DashboardPage = ({ theme }) => {
  const { leetcode, gfg } = CODING_PROFILES;

  return (
    <main className={`${styles.dashboard} container`}>
      <h1 className={styles.title}>Coding Dashboard</h1>
      <div className={styles.grid}>
        <ProfileCard
          title="LeetCode"
          link={leetcode.link}
          stats={leetcode.stats}
          theme={theme} // <-- Pass theme down
        />
        <ProfileCard
          title="GeeksforGeeks"
          link={gfg.link}
          stats={gfg.stats}
          theme={theme} // <-- Pass theme down
        />
      </div>
    </main>
  );
};

export default DashboardPage;
