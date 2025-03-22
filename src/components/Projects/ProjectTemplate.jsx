import React, { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function ProjectTemplate({
  projectName,
  projectTagline,
  projectLink,
  projectVideo,
  projectYear,
  projectOverview,
  projectMaking01,
  projectMaking02,
  projectMaking03,
  projectCodeLink,
  projectBuiltWith,
  projectImages,
}) {
  const videoRef = useRef(null);
  const isLargeScreen = window.innerWidth >= 1024;

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1.1], [1.1, 0.8]);

  const nameVariant = {
    hidden: { y: "-100%" },
    visible: {
      y: "0%",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const hrVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div className="mx-4 md:mx-8 pt-60">
      {/* project name */}
      <motion.div className="overflow-hidden">
        <motion.div
          className="text-[3.5rem] md:text-[8vw] text-[#f1f1f1] leading-[0.9] tracking-tight font-medium flex-wrap"
          variants={nameVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectName}
        </motion.div>
      </motion.div>

      <div className="mx-2">
        {/* project tagline */}

        <div className="mt-10 text-xs font-medium text-[#f1f1f1] md:w-[50%] lg:w-[30%] fade-in">
          {projectTagline.toUpperCase()}
        </div>

        {/* project link */}

        <div className="text-xl md:text-2xl my-8 text-[#f1f1f1] hover:text-white/80 font-bold flex items-center fade-in">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center break-all"
          >
            {projectLink.replace(/^https?:\/\//, "").toUpperCase()}
            <MdArrowOutward className="w-7 h-7" />
          </a>
        </div>

        {/* project video */}

        <div className="w-full my-8 md:my-10 lg:my-8 ">
          {isLargeScreen ? (
            <motion.video
              ref={videoRef}
              style={{ scale }}
              className="w-full h-auto  fade-in"
              autoPlay
              loop
              muted
            >
              <source src={projectVideo} type="video/mp4" />
            </motion.video>
          ) : (
            <motion.video className="w-full h-auto fade-in" autoPlay loop muted>
              <source src={projectVideo} type="video/mp4" />
            </motion.video>
          )}
        </div>

        {/* project 1st heading */}

        <div className="lg:w-[40%] text-3xl md:text-4xl text-[#f1f1f1] font-semibold leading-none fade-in">
          IN A NUTSHELL
        </div>

        <motion.hr
          className="w-full border-t border-white my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        <div className="w-full flex justify-end text-sm font-medium text-[#f1f1f1]">
          <motion.div
            className="lg:w-[55%]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* year */}
            <div className="flex">
              <div className="w-[30%]">YEAR</div>
              <div>{projectYear}</div>
            </div>

            <hr className="w-full border-t border-white my-4" />

            {/* overview */}
            <div className="flex">
              <div className="w-[30%]">OVERVIEW</div>
              <div className="w-[70%] md:pr-2">
                {projectOverview.toUpperCase()}
              </div>
            </div>

            <hr className="w-full border-t border-white my-4" />

            {/* the making of */}
            <div className="flex">
              <div className="w-[30%]">THE MAKING OF</div>
              <div className="w-[70%] md:pr-2 uppercase">
                <p>{projectMaking01}</p>
                {projectMaking02 && <p>{projectMaking02}</p>}
                {projectMaking03 && <p>{projectMaking03}</p>}
              </div>
            </div>

            <hr className="w-full border-t border-white my-4" />

            {/* code */}
            <div className="flex">
              <div className="w-[30%]">CODE</div>
              <a
                href={projectCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center break-all w-[70%] text-[#f1f1f1] hover:text-white/80"
              >
                {projectCodeLink.replace(/^https?:\/\//, "").toUpperCase()}
                <MdArrowOutward className="w-[1.1rem] h-[1.1rem]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* project 2nd heading */}

        <div className="lg:w-[40%] mt-32 text-4xl text-[#f1f1f1] font-semibold leading-none">
          BUILT WITH
        </div>

        <motion.hr
          className="w-full border-t border-white my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <motion.div
          className="w-full flex justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="lg:w-[55%] text-[#f1f1f1] flex flex-wrap gap-2 pr-2">
            {projectBuiltWith}
          </div>
        </motion.div>

        {/* project 3rd heading */}

        <div className="lg:w-[40%] mt-32 text-4xl text-[#f1f1f1] font-semibold leading-none">
          WEB VIEW
        </div>

        <motion.hr
          className="w-full border-t border-white my-4 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        <div className="w-full h-full">{projectImages}</div>

        <motion.hr
          className="w-full border-t border-white my-4 mt-20 origin-left"
          variants={hrVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        />

        {/* other projects heading */}

        <motion.div className="overflow-hidden">
          <motion.div
            variants={nameVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to={`/work`}
              className="text-4xl mb-40 md:text-[8vw] text-[#f1f1f1] hover:text-white/80 leading-[0.9] tracking-tight font-medium flex flex-wrap justify-end"
            >
              OTHER WORKS
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectTemplate;
