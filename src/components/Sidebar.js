import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ open, cycleOpen }) {
  const sidebarRef = useRef(null);

  const variant = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          ref={sidebarRef}
          exit={{ width: 0, transition: { delay: 0.1, duration: 0.3 } }}
          className="flex flex-col items-center space-y-10 text-owhite text-xl  fixed h-full top-0 right-0 w-full max-w-[300px] bg-lblue"
        >
          <p
            onClick={cycleOpen}
            className="cursor-pointer absolute top-2 text-2xl text-ored left-4"
          >
            X
          </p>
          <motion.p
            className="mt-10 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variant}
          >
            Home
          </motion.p>
          <motion.p
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variant}
          >
            About
          </motion.p>
          <motion.p
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variant}
          >
            Technologies
          </motion.p>
          <motion.p
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variant}
          >
            Projects
          </motion.p>
          <motion.p
            className="cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={variant}
          >
            Contact
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
