import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scroll = (to) => {
    switch (to) {
      case "home":
        return homeRef.current.scrollIntoView();
      case "about":
        return aboutRef.current.scrollIntoView();
      case "skills":
        return skillsRef.current.scrollIntoView();
      case "projects":
        return projectsRef.current.scrollIntoView();
      case "contact":
        return contactRef.current.scrollIntoView();
    }
  };
  return (
    <div
      ref={homeRef}
      className="relative flex flex-col font-poppins m-5 ml-5 mr-5 md:ml-20 md:mr-20 "
    >
      <Navbar scroll={scroll} />
      <div className=" mt-10 flex flex-col space-y-4 lg:space-y-6 bg-dblue text-owhite">
        <p className="text-xl md:text-3xl">Welcome, I am</p>
        <p className="text-2xl md:text-4xl">Ahmad Tahir</p>
        <p className="color text-2xl md:text-5xl font-bold text-oorange">
          Fullstack Developer
        </p>
        <p className="text-lg md:text-3xl w-full max-w-[500px] tracking-wide">
          I build fullstack web applications that are accessible and responsive
        </p>
        <div className="flex justify-between">
          <div className="mt-12 flex space-x-10">
            <a target="_blank" href="https://twitter.com/AhmadBMTahir">
              <img className="w-12 h-12 lg:w-16 lg:h-16" src={twitter} />
            </a>
            <a target="_blank" href="https://github.com/A-BMT02">
              <img className="w-12 h-12 lg:w-16 lg:h-16" src={github} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ahmad-tahir-561876232/"
            >
              <img className="w-12 h-12 lg:w-16 lg:h-16" src={linkedin} />
            </a>
          </div>
        </div>
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div className="text-owhite flex justify-center mb-5">
        <p>© {year} - Built by Ahmad Tahir</p>
      </div>
    </div>
  );
}
