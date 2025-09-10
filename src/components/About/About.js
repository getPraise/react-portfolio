// src/components/About/About.js
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ACADEMIC_DATA, CERTIFICATES } from "../../data/data";
import styles from "./About.module.css";
import "../../index.css"; // This import makes the 'container' class available

const About = ({ theme }) => {
  const isLightTheme = theme === "light";

  const chartColors = {
    axis: isLightTheme ? "#111827" : "#9CA3AF",
    grid: isLightTheme ? "#E5E7EB" : "rgba(255, 255, 255, 0.1)",
    line: isLightTheme ? "#4F46E5" : "#6366F1",
    tooltipBg: isLightTheme ? "#FFFFFF" : "#1F2937",
    tooltipBorder: isLightTheme ? "#E5E7EB" : "#374151",
    tooltipText: isLightTheme ? "#111827" : "#E5E7EB",
  };

  return (
    // The <section> only handles the vertical padding now.
    <section className={styles.aboutSection}>
      {/* This container div handles all centering and horizontal padding. */}
      <div className="container">
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.journeySection}>
          <div className={styles.journeyText}>
            <h3>My Journey</h3>

            {/* --- THIS IS THE FINAL, COMPLETE TEXT --- */}
            <p>
              I am a Computer Science & Engineering undergraduate at Maharshi
              Dayanand University (UIET), specializing in AI & Machine Learning.
              My approach to engineering is built on a strong practical
              foundation, which I developed by building complete software
              applications like a state-managed Paste App and a complex
              Razorpay-inspired UI.
            </p>
            <p>
              With this foundation in place, my time is now dedicated to the two
              parallel pursuits that define my career goals. My primary focus is
              a deep dive into the world of{" "}
              <span className={styles.highlightText}>Machine Learning</span>,
              where I am actively learning to build and deploy intelligent
              models.
            </p>
            <p>
              Simultaneously, I am committed to a rigorous, daily study of{" "}
              <span className={styles.highlightText}>
                Data Structures and Algorithms
              </span>{" "}
              to strengthen my core problem-solving abilities. I believe that
              the combination of practical ML knowledge and a deep understanding
              of algorithmic efficiency is the key to becoming a truly effective
              engineer. My goal is to be the kind of builder who can not only
              design an intelligent system but also write the high-quality,
              efficient code required to bring it to life.
            </p>
          </div>
          <img
            src="/images/my-photo.jpg"
            alt="Priyanshu Singh"
            className={styles.journeyImage}
          />
        </div>

        <h3 className={styles.sectionTitle}>Academic Performance</h3>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={ACADEMIC_DATA}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
              <XAxis dataKey="semester" stroke={chartColors.axis} />
              <YAxis stroke={chartColors.axis} domain={[6, 9]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: chartColors.tooltipBg,
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: "8px",
                }}
                labelStyle={{ color: chartColors.tooltipText }}
                itemStyle={{ color: chartColors.tooltipText }}
              />
              <Line
                type="monotone"
                dataKey="gpa"
                stroke={chartColors.line}
                strokeWidth={2}
                dot={{ fill: chartColors.line }}
                activeDot={{ r: 8, stroke: chartColors.line }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <h3 className={styles.sectionTitle}>Certifications</h3>
        <div className={styles.certificatesGrid}>
          {CERTIFICATES.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificateCard}
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className={styles.certificateImage}
              />
              <div className={styles.certificateInfo}>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <p className={styles.certId}>
                  Credential ID: {cert.credentialId}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
