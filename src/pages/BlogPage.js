// src/pages/BlogPage.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { BLOG_POSTS } from "../data/data";
import styles from "./BlogPage.module.css";
import "../index.css";

const BlogPage = () => {
  return (
    <main className={`${styles.blogPage} container`}>
      <h1 className={styles.title}>Blog & Writings</h1>
      <div className={styles.postsContainer}>
        {BLOG_POSTS.map((post) => {
          // --- THIS IS THE CORRECTED LOGIC ---
          // It now correctly looks for the first "paragraph" block to create the excerpt.
          const firstParagraph =
            post.content.find((b) => b.type === "paragraph")?.value || "";
          const excerpt =
            firstParagraph.split(" ").slice(0, 30).join(" ") + "...";

          return (
            <article key={post.id} className={styles.post}>
              <p className={styles.postDate}>{post.date}</p>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.excerpt}>{excerpt}</p>
              <Link to={`/blog/${post.id}`} className={styles.readMoreLink}>
                Read More &rarr;
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
};

export default BlogPage;
