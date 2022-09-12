import React from "react";
import home from "../images/home.png";
import tailwind from "../images/tailwind.png";
import react from "../images/react.png";
import node from "../images/node.png";
import express from "../images/express.png";
import mongodb from "../images/mongodb.png";
import live from "../images/live.png";
import github from "../images/github.png";

export default function Projects() {
  return (
    <div className="mt-20 text-owhite flex flex-col items-center">
      <p className="self-start text-3xl md:text-4xl mb-10">Projects</p>
      <div className="lg:p-5 max-w-[500px] gradient flex flex-col items-center lg:flex-row lg:max-w-[1400px] lg:space-x-10 ">
        <div className="w-full h-full">
          <img className="" src={home} />
          <div className="hidden lg:flex justify-center items-center mt-10 space-x-4 space-y-4 flex-wrap mb-5 text-xl">
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={react} />
              <p>React</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={node} />
              <p>Node</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={express} />
              <p>Express</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={mongodb} />
              <p>MongoDb</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={tailwind} />
              <p>Tailwind</p>
            </div>
          </div>
        </div>

        <div className="lg:p-0 p-5 flex flex-col space-y-4 ">
          <p className="text-xl md:text-3xl text-center">Spost</p>
          <p className=" md:text-xl text-center">
            Write your content once and post to all your social media profiles
          </p>

          <div className=" flex lg:hidden justify-center items-center mt-10 space-x-4 space-y-4 flex-wrap mb-5">
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={react} />
              <p>React</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={node} />
              <p>Node</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={express} />
              <p>Express</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={mongodb} />
              <p>MongoDb</p>
            </div>
            <div className="flex space-x-2">
              <img className="w-6 h-6" src={tailwind} />
              <p>Tailwind</p>
            </div>
          </div>

          <div className="flex space-x-6 justify-center ">
            <div className="shadow gradient flex space-x-2 items-center bg-lblue pl-4 pr-4 pt-2 pb-2">
              <p>Live</p>
              <img className="w-5 h-5" src={live} />
            </div>

            <div className="shadow gradient flex space-x-4 items-center bg-lblue p-4">
              <p>Github</p>
              <img className="w-5 h-5" src={github} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
