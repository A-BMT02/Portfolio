import React, { useRef } from "react";

export default function Sidebar({ setShowSidebar }) {
  const sidebarRef = useRef(null);

  const closeSidebar = () => {
    sidebarRef.current.classList.add("hidden");
  };

  return (
    <div
      ref={sidebarRef}
      className="flex flex-col items-center space-y-10 text-owhite text-xl  fixed h-full top-0 right-0 w-full max-w-[300px] bg-lblue"
    >
      <p
        onClick={(e) => setShowSidebar(false)}
        className="absolute top-2 text-2xl text-ored left-4"
      >
        X
      </p>
      <p className="mt-10">Home</p>
      <p>About</p>
      <p>Technologies</p>
      <p>Projects</p>
      <p>Contact</p>
    </div>
  );
}
