// src/pages/SinglePostPage.js
import React, { useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { BLOG_POSTS } from "../data/data";
import Lightbox from "../components/Lightbox/Lightbox";
import styles from "./SinglePostPage.module.css";
import "../index.css"; // This import makes the 'container' class available

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === parseInt(postId));

  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    startIndex: 0,
  });

  const openLightbox = (images, startIndex) => {
    setLightboxState({ isOpen: true, images, startIndex });
  };

  const closeLightbox = useCallback(() => {
    setLightboxState({ isOpen: false, images: [], startIndex: 0 });
  }, []);

  if (!post) {
    return (
      <div className={`${styles.notFound} container`}>
        <h2>Post not found!</h2>
        <Link to="/blog">← Back to all posts</Link>
      </div>
    );
  }

  // --- THIS IS THE CORRECTED LOGIC ---
  // We correctly separate all text-based blocks from all media-based blocks.
  const textContent = post.content.filter(
    (block) =>
      block.type === "heading" ||
      block.type === "paragraph" ||
      block.type === "list" ||
      block.type === "links"
  );
  const mediaContent = post.content.filter(
    (block) =>
      block.type === "image" ||
      block.type === "video" ||
      block.type === "image-gallery"
  );

  // This function now only handles rendering the text blocks
  const renderTextBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        return (
          <h2 key={index} className={styles.postHeading}>
            {block.value}
          </h2>
        );
      case "paragraph":
        return (
          <div key={index} className={styles.textBlock}>
            {" "}
            {block.value.split("\n").map((line, i) => (
              <p key={i}>{line || "\u00A0"}</p>
            ))}{" "}
          </div>
        );
      case "list":
        return (
          <ul key={index} className={styles.postList}>
            {" "}
            {block.value.map((item, i) => (
              <li key={i}>{item}</li>
            ))}{" "}
          </ul>
        );
      case "links":
        return (
          <div key={index} className={styles.linkContainer}>
            {" "}
            {block.value.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                {" "}
                {link.text}{" "}
              </a>
            ))}{" "}
          </div>
        );
      default:
        return null;
    }
  };

  // This function now only handles rendering the media blocks
  const renderMediaBlock = (block, index) => {
    switch (block.type) {
      case "image":
        return (
          <img
            key={index}
            src={block.value}
            alt={`Post media ${index + 1}`}
            className={styles.postMediaItemClickable}
            onClick={() => openLightbox([block.value], 0)}
          />
        );
      case "video":
        return (
          <video
            key={index}
            src={block.value}
            controls
            className={styles.postMediaItem}
          />
        );
      case "image-gallery":
        return (
          <div key={index} className={styles.postImageGallery}>
            {" "}
            {block.value.map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Gallery item ${i + 1}`}
                onClick={() => openLightbox(block.value, i)}
              />
            ))}{" "}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <main className={styles.singlePostPage}>
        <div className="container">
          <Link to="/blog" className={styles.backLink}>
            ← Back to all posts
          </Link>
          <article>
            <p className={styles.postDate}>{post.date}</p>
            <h1 className={styles.postTitle}>{post.title}</h1>

            {/* --- THIS IS THE CORRECTED JSX LAYOUT --- */}
            <div className={styles.postLayout}>
              {/* Left Column for Text */}
              <div className={styles.postContent}>
                {textContent.map(renderTextBlock)}
              </div>

              {/* Right Column for Media */}
              <aside className={styles.postMedia}>
                {mediaContent.map(renderMediaBlock)}
              </aside>
            </div>
          </article>
        </div>
      </main>

      {lightboxState.isOpen && (
        <Lightbox
          images={lightboxState.images}
          startIndex={lightboxState.startIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default SinglePostPage;
