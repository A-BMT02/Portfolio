import React from "react";
import image from "../images/image.png";

export default function About() {
  return (
    <div className="text-owhite mt-20">
      <p className="text-3xl lg:text-4xl md:mb-5">About</p>
      <div className="flex flex-col-reverse items-center space-y-10 md:space-x-10 flex-col md:flex-row ">
        <div className=" md:text-xl flex flex-col space-y-4 md:w-3/4 ">
          <div>
            <p className="tracking-wide">
              I am an undergraduate software engineering student. I love using
              web tecnologies to solve problems.
            </p>
            <br></br>
            <p className="tracking-wide">
              I usally work with javascript technologies like React , Node ,
              Express and MongoDb to create responsive and accessible websites.
            </p>

            <br></br>
            <p className="tracking-wide">
              I started my programming journey with the popular CS50 harvard edx
              course. I spent some time solving DSA questions . I came acrorss
              web development and have since then fallen in love with it
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <img
            className=" rounded rounded-lg w-3/4 md:w-full max-w-[434px] mb-10 lg:mb-0 max-h-[344px]"
            src={image}
          />
        </div>
      </div>
    </div>
  );
}
