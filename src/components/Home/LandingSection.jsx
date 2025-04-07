import React from "react";
import Time from "../../utils/Time.jsx";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";

function LandingSection() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen pt-24 pb-24 md:pt-40 md:pb-20 w-full flex flex-col items-center justify-between gap-32 lg:gap-0">
      <div className="md:h-[40%] w-full px-14 md:px-24 lg:px-32 flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between text-[#6b6b6c]">
        <div className="lg:w-[40%] flex justify-between pt-14 text-sm font-semibold font-mono">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
            className="flex flex-col "
          >
            <p>LOCAL TIME:</p>
            <p>
              <Time />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
            className="flex flex-col lg:flex-row text-right"
          >
            <span>BASED IN</span>
            <span className="hidden lg:block">&nbsp;</span>
            <span>INDIA</span>
          </motion.div>
        </div>

        {/* description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="lg:w-[30%] text-sm font-semibold uppercase font-mono text-justify"
          style={{ textIndent: "20%" }}
        >
          Loremm ipsumm dolor sit ameddt consectetur adipisicing elit. Optio
          facere aspernatur deleniti dolorusdfasdm nostrum accusantium corporis
          aperiam iusto aliasdasquid molestias, tempora qusadfisquam voluptate
          aliquam.
        </motion.div>
      </div>

      {/* name div */}
      <div className="w-full pl-6 md:px-24 lg:px-32 flex flex-col lg:flex-row justify-between gap-14 lg:gap-0">
        <div className="w-full flex flex-col text-[2rem] leading-none md:text-6xl lg:text-[5vw]">
          <RandomText
            text="AMAN RANA"
            className="josefinSans-text font-extralight"
          />
          <RandomText
            text="&nbsp;&nbsp;&nbsp;WEB DEVELOPER"
            className="font-bold josefinSans-text"
          />
        </div>

        <div className="flex justify-end">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
            onClick={handleScroll}
            className="text-sm text-[#6b6b6c] hover:text-white/50 font-semibold font-mono transition duration-300 px-14 md:px-0"
          >
            EXPLORE
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
