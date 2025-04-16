import React from "react";
import Time from "../../utils/Time.jsx";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";
import MaskingGrid from "../Animations/MaskingGrid.jsx";

function LandingSection() {
  const scrollToAboutSection = () => {
    const section = document.getElementById("aboutSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen pt-20 pb-24 md:pt-40 md:pb-20 w-full flex flex-col items-center justify-between gap-32 lg:gap-0">
      <div className="md:h-[40%] w-full px-14 md:px-24 lg:px-32 flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between text-[#6b6b6c]">
        <div className="lg:w-[40%] flex justify-between pt-14 text-sm font-semibold font-mono">
          <div className="flex flex-col ">
            <p>
              <RandomText text="LOCAL TIME:" />
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Time />
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row text-right">
            <span>
              <RandomText text="BASED&nbsp;IN" />
            </span>
            <span className="hidden lg:block">&nbsp;</span>
            <span>
              <RandomText text="DELHI" />
            </span>
            <span className="hidden md:flex">
              <RandomText text=", INDIA" />
            </span>
          </div>
        </div>

        {/* description */}
        <div
          className="lg:w-[30%] lg:mt-5 text-sm font-semibold uppercase font-mono text-justify relative "
          style={{ textIndent: "20%" }}
        >
          <p>
            Freelance full-stack web developer writing code to create visual
            experiences that feel seamless. From layout to logic, it&apos;s all
            part of the craft.
          </p>

          <MaskingGrid
            color="#161616"
            rowSizes={{ sm: 30, md: 45, lg: 40 }}
            columnSizes={{ sm: 60, md: 90, lg: 50 }}
          />
        </div>
      </div>

      {/* name div */}
      <div className="w-full pl-6 md:px-20 lg:px-32 flex flex-col lg:flex-row justify-between gap-14 lg:gap-0">
        <div className="w-full flex flex-col text-[2rem] text-[#f3f1ec] leading-none md:text-6xl lg:text-[5vw]">
          <RandomText
            text="AMAN RANA"
            className="josefinSans-text font-extralight"
          />
          <RandomText
            text="&nbsp;&nbsp;&nbsp;WEB DEVELOPER"
            className="font-bold josefinSans-text"
          />
        </div>

        <div className="lg:w-[10%] flex justify-end">
          <button
            onClick={scrollToAboutSection}
            className="text-sm text-[#6b6b6c] hover:text-white/50 font-semibold font-mono transition duration-300 px-14 md:px-0"
          >
            <RandomText text="EXPLORE" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
