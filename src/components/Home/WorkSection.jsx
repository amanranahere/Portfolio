import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import brickBreaker from "../../assets/images/brickBreaker.png";
import currencyConverter from "../../assets/images/currencyConverter.png";
import flappyBird from "../../assets/images/flappyBird.png";
import snakeGame from "../../assets/images/snakeGame.png";
import vidron from "../../assets/images/vidronHome.png";
import weblog from "../..//assets/images/weblog.png";

function WorkSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50, // Adjusts resistance (higher = bouncier, lower = smoother)
    damping: 20, // Controls smoothness (higher = less jitter)
  });

  const firstLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["23%", "-25%"]
  );

  const projectsTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["10%", "-20%"]
  );

  const secondLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["-26%", "25%"]
  );

  return (
    <section ref={containerRef} className="relative h-[900vh] bg-[#1e1e1e]">
      <div className="sticky top-0 flex flex-col h-screen justify-center items-center overflow-hidden">
        <motion.div
          style={{ x: firstLineTransformX }}
          className=" text-[14rem] leading-[0.7em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text"
        >
          Explore the Depth of My Work
        </motion.div>

        <motion.div
          style={{ x: projectsTransformX }}
          className="flex gap-10 z-10"
        >
          <div className="w-[30vw] aspect-video flex-shrink-0 bg-gray-800 rounded-xl">
            <img
              className="w-full h-full rounded-2xl"
              src={currencyConverter}
              alt="Currency Converter"
            />
          </div>

          <div className="w-[30vw] aspect-video flex-shrink-0 bg-gray-700 rounded-xl">
            <img
              className="w-full h-full rounded-2xl"
              src={weblog}
              alt="Weblog"
            />
          </div>

          <div className="w-[30vw] aspect-video flex-shrink-0 bg-gray-600 rounded-xl">
            <img
              className="w-full h-full rounded-2xl"
              src={vidron}
              alt="Vidron"
            />
          </div>

          <div className="w-[30vw] aspect-video flex-shrink-0 bg-gray-800 rounded-xl">
            <img
              className="w-full h-full rounded-2xl"
              src={brickBreaker}
              alt="Brick Breaker"
            />
          </div>

          <div className="w-[30vw] aspect-video flex-shrink-0 bg-gray-800 rounded-xl">
            <img
              className="w-full h-full rounded-2xl"
              src={snakeGame}
              alt="Snake Game"
            />
          </div>
        </motion.div>

        <motion.div
          style={{ x: secondLineTransformX }}
          className="z-20 text-[14rem] leading-[0.5em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text"
        >
          Built with Expertise & Creativity
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSection;
