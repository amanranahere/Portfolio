import React, { useState, useEffect } from "react";
import PageTransition from "../components/Transitions/PageTransition.jsx";
import WorkComponent from "../components/Work/WorkComponent.jsx";
import { motion } from "framer-motion";

function Work() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#1e1919] text-[#f1f1f1] select-none"
      >
        <div className="max-w-max font-bold flex flex-col justify-center items-center">
          <div className="absolute top-[33%] lg:top-[15%] lg:left-[30%] text-3xl md:text-6xl lg:text-[5vw] giveYouGlory-text text-[#bfbfbf]">
            My
          </div>

          <div className="w-full absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-8xl md:text-[25vw] leading-[0.7em] tracking-tight bigShoulderStencil-text ">
            Projects
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: scrolled ? "40vh" : "100%", opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <WorkComponent />

        <div>{/* add footer here */}</div>
      </motion.div>
    </>
  );
}

export default PageTransition(Work);
