import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import node from "../images/node.png";
import express from "../images/express.png";
import git from "../images/git.png";
import mongodb from "../images/mongodb.png";

export default function Skills() {
  return (
    <div className="mt-20 text-2xl flex flex-col text-owhite space-y-4 ">
      <p className="text-3xl md:text-4xl mb-10">Skills</p>
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
    </div>
  );
}
