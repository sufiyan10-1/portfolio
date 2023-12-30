import React from "react";
import Hero from "../Components/Hero"
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skill from "../Components/Skill";
import About from "../Components/About"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill/>
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
