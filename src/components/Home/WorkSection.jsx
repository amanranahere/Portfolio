import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import useScreenSize from "../../utils/ScreenSize.jsx";
import brickBreaker from "../../assets/images/brickBreaker.png";
import currencyConverter from "../../assets/images/currencyConverter.png";
import snakeGame from "../../assets/images/snakeGame.png";
import vidron from "../../assets/images/vidronHome.png";
import weblog from "../..//assets/images/weblog.png";

function WorkSection() {
  const navigate = useNavigate();
  const screenSize = useScreenSize();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const stiffness = screenSize === "sm" ? 200 : screenSize === "md" ? 120 : 50;
  const damping = screenSize === "sm" ? 30 : screenSize === "md" ? 25 : 20;

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: stiffness,
    damping: damping,
  });

  const firstLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    screenSize === "sm"
      ? ["40%", "-42%"]
      : screenSize === "md"
      ? ["20%", "-30%"]
      : ["25%", "-27%"]
  );

  const projectsTransformX = useTransform(
    smoothScroll,
    [0, 1],
    screenSize === "sm"
      ? ["25%", "-30%"]
      : screenSize === "md"
      ? ["10%", "-25%"]
      : ["10%", "-20%"]
  );

  const secondLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    screenSize === "sm"
      ? ["-42%", "42%"]
      : screenSize === "md"
      ? ["-26%", "30%"]
      : ["-27%", "27%"]
  );

  return (
    <>
      <div className="h-full w-full bg-[#1e1e1e] flex justify-between items-center px-4 md:px-16 lg:px-14 py-20">
        <div className="josefinSans-text font-semibold text-sm text-[#f1f1f1] select-none flex items-center">
          <span>/</span>
          <span className="pl-10 lg:pl-28 text-lg lg:text-xl tracking-widest ">
            WORK
          </span>
        </div>

        <div className="flex items-center justify-center select-none">
          <button
            onClick={() => navigate("/work")}
            className="tracking-widest text-[#9a9a9a] hover:text-[#f7f7f7] font-mono duration-300 text-xs lg:text-sm flex items-center"
          >
            <span className="px-2 whitespace-nowrap">VIEW ALL</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>

      <section
        ref={containerRef}
        className="relative h-[4000vh] lg:h-[900vh] bg-[#1e1e1e]"
      >
        <div className="sticky top-0 flex flex-col h-screen transform -translate-y-5 justify-center items-center overflow-hidden">
          <motion.div
            style={{ x: firstLineTransformX }}
            className="text-[15rem] md:text-[15rem] leading-[0.7em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text flex"
          >
            Explore{" "}
            <span className="hidden lg:block">&nbsp;the Depth of&nbsp;</span> My
            Work
          </motion.div>

          <motion.div
            style={{ x: projectsTransformX }}
            className="flex gap-6 md:gap-8 z-10"
          >
            <div className="w-[90vw] lg:w-[30vw] aspect-video flex-shrink-0 rounded-2xl">
              <img
                className="w-full h-full rounded-2xl"
                src={currencyConverter}
                alt="Currency Converter"
              />
            </div>

            <div className="w-[90vw] lg:w-[30vw] aspect-video flex-shrink-0 rounded-2xl">
              <img
                className="w-full h-full rounded-2xl"
                src={weblog}
                alt="Weblog"
              />
            </div>

            <div className="w-[90vw] lg:w-[30vw] aspect-video flex-shrink-0 rounded-2xl">
              <img
                className="w-full h-full rounded-2xl"
                src={vidron}
                alt="Vidron"
              />
            </div>

            <div className="w-[90vw] lg:w-[30vw] aspect-video flex-shrink-0 rounded-2xl">
              <img
                className="w-full h-full rounded-2xl"
                src={brickBreaker}
                alt="Brick Breaker"
              />
            </div>

            <div className=" w-[90vw] lg:w-[30vw] aspect-video flex-shrink-0 rounded-2xl">
              <img
                className="w-full h-full rounded-2xl"
                src={snakeGame}
                alt="Snake Game"
              />
            </div>
          </motion.div>

          <motion.div
            style={{ x: secondLineTransformX }}
            className="z-20 text-[15rem] md:text-[15rem] leading-[0.5em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text flex"
          >
            Built with{" "}
            <span className="hidden lg:block">&nbsp;Expertise &&nbsp;</span>
            Creativity
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default WorkSection;
