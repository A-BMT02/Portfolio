import React from "react";
import bars from "../images/bars.svg";
export default function Navbar() {
  return (
    <div className="z-20">
      <div className="hidden md:flex md:text-2xl font-poppins bg-dblue text-owhite justify-end space-x-10 mb-5 mt-5">
        <p>Home</p>
        <p>About</p>
        <p>Technologies</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-end md:hidden">
        <img src={bars} />
      </div>
    </div>
  );
}
