import React from "react";
import html from "../images/html.png";
import css from "../images/css.svg";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import node from "../images/node.png";
import express from "../images/express.png";
import git from "../images/git.png";
import mongodb from "../images/mongodb.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Skills() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const variant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
      className="mt-20 text-2xl flex flex-col text-owhite space-y-4  "
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl md:text-4xl mb-10 border borer-b-8 border-t-0 border-l-0 border-r-0 border-oorange w-fit pb-1">
        Skills
      </p>
      <div className="flex flex-col space-y-10 max-w-[800px]">
        <div className="flex justify-between">
          <div className="flex items-center flex-col space-y-2 ">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={html} />
            <p className="text-sm md:text-lg">HTML</p>
          </div>
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={css} />
            <p className="text-sm md:text-lg">CSS</p>
          </div>
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={javascript} />
            <p className="text-sm md:text-lg">JAVASCRIPT</p>
          </div>
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={react} />
            <p className="text-sm md:text-lg">REACT</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={node} />
            <p className="text-sm md:text-lg">NODE</p>
          </div>
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={express} />
            <p className="text-sm md:text-lg">EXPRESS</p>
          </div>

          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={git} />
            <p className="text-sm md:text-lg">GIT/GITHUB</p>
          </div>
          <div className="flex items-center flex-col space-y-2">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={mongodb} />
            <p className="text-sm md:text-lg">MONGODB</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
