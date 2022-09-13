import React, { useState } from "react";
import twitter from "../images/twitter.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/mail.png";
import { send } from "emailjs-com";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Contact() {
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

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const onSubmit = (e) => {
    console.log("here");
    e.preventDefault();
    send(
      "service_bxitwtb",
      "template_scanoi6",
      {
        from_name: name,
        to_name: "Ahmad",
        message,
        reply_to: subject,
      },
      "ftD4KKgQVP08NW2-q"
    )
      .then((res) => {
        alert("Message sent successfully");
      })
      .catch((err) => {
        alert("An error occured");
      });
  };

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={control}
      className="mb-14 space-y-10 mt-10 flex flex-col text-owhite space-y-4 "
    >
      <p className=" text-3xl md:text-4xl border borer-b-8 border-t-0 border-l-0 border-r-0 border-oorange w-fit pb-1">
        Contact
      </p>
      <p className="text-lg">
        You can contact me via
        <a
          className="underline-offset-2 underline-offset-2"
          href="mailto:ahmadbmtahir@gmail.com"
        >
          <span> ahmadbmtahir@gmail </span>
        </a>
        or any of my social media below
      </p>

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
        {/* <a target="_blank" href="mailto:ahmadbmtahir@gmail.com">
          <img className="w-10 h-10 md:w-16 md:h-16" src={mail} />
        </a> */}
      </div>
      <div className="flex items-center space-x-2 w-full justify-center">
        <hr className="w-5/12" />
        <p className="text-center">or</p>
        <hr className="w-5/12" />
      </div>
      <form className="flex flex-col space-y-2 lg:space-y-4 max-w-[600px] ">
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl ">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue "
          />
        </div>
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue "
          />
        </div>
        <div className="flex-flex-col space-y-1">
          <p className="text-xl md:2xl">Subject</p>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-owhite rounded-md p-2 w-full max-w-[300px] text-dblue "
          />
        </div>
        <div className="flex-flex-col space-y-1 ">
          <p className="text-xl md:2xl">Message</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-40 bg-owhite rounded-md p-2 w-full max-w-[500px] text-dblue "
          />
        </div>
        <div className="self-end text-xl ">
          <button
            onClick={(e) => onSubmit(e)}
            className="bg-lblue p-2 rounded-lg hover:text-white hover:bg-dblue hover:border hover:border-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
}
