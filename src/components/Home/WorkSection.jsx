import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function WorkSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 50, // Adjusts resistance (higher = bouncier, lower = smoother)
    damping: 20, // Controls smoothness (higher = less jitter)
  });

  const firstLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["16%", "-60%"]
  );

  const projectsTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["10%", "-20%"]
  );

  const secondLineTransformX = useTransform(
    smoothScroll,
    [0, 1],
    ["0%", "60%"]
  );

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-[#1e1e1e]">
      <div className="sticky top-0 flex flex-col h-screen justify-center items-center overflow-hidden">
        <motion.div
          style={{ x: firstLineTransformX }}
          className=" text-[14rem] leading-[0.7em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text"
        >
          EXPLORE MY WORK
        </motion.div>

        <motion.div
          style={{ x: projectsTransformX }}
          className="flex gap-10 z-10"
        >
          <div className="w-[30vw]  aspect-video flex-shrink-0 bg-gray-800 rounded-xl p-6">
            <div className="text-white text-3xl mb-4 flex justify-center items-center">
              Project One
            </div>
          </div>

          <div className="w-[30vw]  aspect-video flex-shrink-0 bg-gray-700 rounded-xl p-6">
            <div className="text-white text-3xl mb-4">Project Two</div>
          </div>

          <div className="w-[30vw]  aspect-video flex-shrink-0 bg-gray-600 rounded-xl p-6">
            <div className="text-white text-3xl mb-4">Project Three</div>
          </div>

          <div className="w-[30vw]  aspect-video flex-shrink-0 bg-gray-800 rounded-xl p-6">
            <div className="text-white text-3xl mb-4 flex justify-center items-center">
              Project Four
            </div>
          </div>

          <div className="w-[30vw]  aspect-video flex-shrink-0 bg-gray-800 rounded-xl p-6">
            <div className="text-white text-3xl mb-4 flex justify-center items-center">
              Project Five
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ x: secondLineTransformX }}
          className="z-20 text-[14rem] leading-[0.5em] tracking-tighter font-extrabold text-[#f3f1ec] whitespace-nowrap uppercase select-none oswald-text"
        >
          These projects are made by me over the years
        </motion.div>
      </div>
    </section>
  );
}

export default WorkSection;
