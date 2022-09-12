import React, { useState } from "react";
import bars from "../images/bars.svg";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="z-20">
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
      <div className="hidden md:flex md:text-2xl font-poppins bg-dblue text-owhite justify-end space-x-10 mb-5 mt-5">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer ">About</p>
        <p className="cursor-pointer ">Technologies</p>
        <p className="cursor-pointer ">Projects</p>
        <p className="cursor-pointer ">Contact</p>
      </div>
      <div className="flex justify-end md:hidden">
        <img
          onClick={(e) => setShowSidebar(true)}
          className="cursor-pointer"
          src={bars}
        />
      </div>
    </div>
  );
}
