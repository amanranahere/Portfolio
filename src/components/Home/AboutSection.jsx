import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

function AboutSection() {
  const navigate = useNavigate();
  const targetRef = useRef(null);

  const paragraph =
    "I'm a full-stack developer passionate about building intuitive and scalable digital experiences. With a strong foundation in both front-end and back-end technologies, I craft seamless applications that blend.";

  const words = paragraph.split(" ");

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.2"],
  });

  const wordAnimation = (word, index) => {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

    return (
      <motion.span
        key={index}
        style={{ opacity }}
        className="mr-3 leading-snug"
      >
        {word}
      </motion.span>
    );
  };

  return (
    <div className=" bg-[#f1f1f1] text-black">
      <div className="h-screen flex flex-col relative mx-10 md:mx-20 lg:mx-40">
        {/* paragraph */}
        <div className="w-full absolute top-32">
          <motion.div
            ref={targetRef}
            className="text-xl md:text-4xl lg:text-5xl font-bold text-center flex flex-wrap absolute yesevaOne-text"
          >
            {words.map((word, index) => (
              <span className="mr-3 leading-snug opacity-10">{word}</span>
            ))}
          </motion.div>

          <motion.div
            ref={targetRef}
            className="text-xl md:text-4xl lg:text-5xl font-bold text-center flex flex-wrap absolute yesevaOne-text"
          >
            {words.map((word, index) => wordAnimation(word, index))}
          </motion.div>
        </div>

        {/* about me button */}
        <div
          onClick={() => navigate("/about")}
          className="absolute bottom-24 py-6 flex justify-center items-center gap-8 cursor-pointer rounded-md transition duration-300 hover:text-white/35"
        >
          <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-widest">
            ABOUT ME
          </p>
          <IoIosArrowForward className="text-4xl mt-1 absolute -right-16" />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
