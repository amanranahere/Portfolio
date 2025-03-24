import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import brickBreaker from "../../assets/images/brickBreaker.png";
import currencyConverter from "../../assets/images/currencyConverter.png";
import flappyBird from "../../assets/images/flappyBird.png";
import snakeGame from "../../assets/images/snakeGame.png";
import vidron from "../../assets/images/vidronHome.png";
import weblog from "../..//assets/images/weblog.png";

function WorkSection() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState("lg");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("sm");
      } else if (window.innerWidth < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="h-[50vh] bg-[#1e1e1e] text-white flex justify-center items-center">
        <div className="absolute outline-text whiteColor pb-7 text-7xl md:text-8xl lg:text-9xl tracking-widst">
          SEE ALL
        </div>

        <button
          onClick={() => navigate("/work")}
          className="px-8 lg:px-10 py-2 lg:py-3 text-sm lg:text-base bg-black z-10 border border-white font-bold tracking-widest rounded-[0.3rem] hover:text-black hover:bg-[#fff] transition duration-300 active:scale-95"
        >
          PROJECTS
        </button>
      </div>
    </>
  );
}

export default WorkSection;
