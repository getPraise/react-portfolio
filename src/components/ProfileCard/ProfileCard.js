// src/components/ProfileCard/ProfileCard.js
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./ProfileCard.module.css";

// ... (CustomTooltip component from the previous step remains the same)
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p
          className={styles.tooltipLabel}
        >{`${payload[0].name}: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ProfileCard = ({ title, link, stats, theme }) => {
  const totalSolved = stats.reduce((acc, entry) => acc + entry.count, 0);
  const legendTextColor = theme === "light" ? "#6B7280" : "#9CA3AF";

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.chartContainer}>
        <div className={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stats}
                dataKey="count"
                nameKey="level"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={70}
                paddingAngle={2}
              >
                {stats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={"var(--background-secondary)"}
                    strokeWidth={4}
                  />
                ))}
              </Pie>
              <Tooltip
                cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
                content={<CustomTooltip />}
              />
              <Legend
                wrapperStyle={{ color: legendTextColor, paddingTop: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className={styles.centerLabel}>
            {/* --- THIS IS THE CORRECTED ORDER --- */}
            <div className={styles.totalText}>Total Solved</div>
            <div className={styles.totalNumber}>{totalSolved}</div>
          </div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.profileLink}
      >
        Visit Profile
      </a>
    </div>
  );
};

export default ProfileCard;
