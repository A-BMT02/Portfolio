import React from "react";
import Navbar from "../components/Navbar";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="relative flex flex-col font-poppins m-5 ml-5 mr-5 md:ml-20 md:mr-20 ">
      <Navbar />
      <div className="h-[70vh] mt-10 flex flex-col space-y-4 lg:space-y-6 bg-dblue text-owhite">
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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
