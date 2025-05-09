import React, { useRef } from "react";
import { motion } from "framer-motion";
import MaskingGrid from "../Animations/MaskingGrid.jsx";
import RandomText from "../Animations/RandomText.jsx";

function AboutSection() {
  return (
    <section className="min-h-screen lg:h-screen px-4 md:px-16 lg:px-14 pt-20 lg:py-20">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[40%] text-lg lg:text-xl font-medium tracking-widest select-none josefinSans-text text-[#f3f1ec]">
          <span>/</span>
          <span className="pl-10 lg:pl-28">
            <RandomText text="ABOUT" />
          </span>
        </div>

        {/* paragraph */}
        <div className="lg:w-[60%] py-20 lg:py-0 flex justify-end">
          <div className="w-full flex items-end">
            <div className=" flex flex-wrap relative">
              <p
                className="lg:text-xl text-[#6b6b6c] text-justify font-semibold uppercase font-mono"
                style={{ textIndent: "40%" }}
              >
                Currently pursuing a B.Tech in Computer Science, I've been
                diving deep into full stack web development using tools like
                React, Node.js, Express, and MongoDB. Alongside that, my
                academics have helped me better understand how computers and
                systems work under the hood, which naturally enhances the way I
                approach development. My interest in tech started with a simple
                curiosity — I used to wonder how websites were built or how
                games reacted to every click, movement, or command. It inspired
                me to start imagining what I could create, just for the sake of
                creating it. That curiosity gradually turned into something I
                genuinely enjoy — writing lines of code and structured logic
                that transform into visual experiences on a screen. When I'm not
                coding, I'm probably out playing basketball or catching a quick
                gaming session to recharge.
              </p>

              <MaskingGrid
                color="#161616"
                rowSizes={{ sm: 60, md: 90, lg: 100 }}
                columnSizes={{ sm: 60, md: 90, lg: 100 }}
                startDelay={0.3}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
