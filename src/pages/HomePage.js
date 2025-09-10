// src/pages/HomePage.js
import React from "react";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
};

export default HomePage;
