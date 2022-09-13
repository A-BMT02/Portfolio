import React from "react";
import bars from "../images/bars.svg";
import Sidebar from "./Sidebar";
import { useCycle, motion, AnimatePresence } from "framer-motion";

export default function Navbar({ scroll }) {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="z-20">
      <AnimatePresence>
        <Sidebar open={open} cycleOpen={cycleOpen} scroll={scroll} />
      </AnimatePresence>

      <div className="hidden md:flex md:text-2xl font-poppins bg-dblue text-owhite justify-end space-x-10 mb-5 mt-5">
        <p className="cursor-pointer">Home</p>
        <p onClick={() => scroll("about")} className="cursor-pointer ">
          About
        </p>
        <p onClick={() => scroll("skills")} className="cursor-pointer ">
          Technologies
        </p>
        <p onClick={() => scroll("projects")} className="cursor-pointer ">
          Projects
        </p>
        <p onClick={() => scroll("contact")} className="cursor-pointer ">
          Contact
        </p>
      </div>
      <div className="flex justify-end md:hidden">
        <img onClick={cycleOpen} className="cursor-pointer" src={bars} />
      </div>
    </div>
  );
}
