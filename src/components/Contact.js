import React from "react";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";

export default function Contact() {
  return (
    <div className="mb-14 space-y-10 mt-10 flex flex-col text-owhite space-y-4 ">
      <p className="text-3xl md:text-4xl">Contact</p>
      <div className="flex space-x-4 lg:space-x-6">
        <a target="_blank" href="https://twitter.com/AhmadBMTahir">
          <img className="w-10 h-10 md:w-16 md:h-16" src={twitter} />
        </a>
        <a target="_blank" href="https://github.com/A-BMT02">
          <img className="w-10 h-10 md:w-16 md:h-16" src={github} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ahmad-tahir-561876232/"
        >
          <img className="w-10 h-10 md:w-16 md:h-16" src={linkedin} />
        </a>
        <a target="_blank" href="mailto:ahmadbmtahir@gmail.com">
          <img className="w-10 h-10 md:w-16 md:h-16" src={mail} />
        </a>
      </div>
      <div className="flex items-center space-x-2 w-full justify-center">
        <hr className="w-5/12" />
        <p className="text-center">or</p>
        <hr className="w-5/12" />
      </div>
      <form className="flex flex-col space-y-2 lg:space-y-4 max-w-[600px] ">
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl ">Name</p>
          <input className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue " />
        </div>
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl">Email</p>
          <input className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue " />
        </div>
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl">Subject</p>
          <input className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue " />
        </div>
        <div className="flex-flex-col space-y-1 ">
          <p className="text-xl md:2xl">Message</p>
          <textarea className="h-60 bg-owhite rounded-md p-2 w-full max-w-[600px] text-dblue " />
        </div>
        <div className="self-end text-xl ">
          <button className="bg-lblue p-2 rounded-lg hover:text-white hover:bg-dblue hover:border hover:border-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
