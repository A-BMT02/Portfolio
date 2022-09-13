import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
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
      className="mt-20 text-2xl flex flex-col text-owhite space-y-4 min-h-[100vh] "
    >
      <p className="text-3xl md:text-4xl mb-10 border borer-b-8 border-t-0 border-l-0 border-r-0 border-oorange w-fit pb-1">
        Skills
      </p>
      <div className="flex flex-col space-y-10 max-w-[800px]">
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={html} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={css} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={javascript} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={react} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={node} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={express} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={git} />
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 lg:w-16 lg:h-16" src={mongodb} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
