import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import WeblogImg from "../../assets/images/weblogAllBlogs.png";
import VidronImg from "../../assets/images/vidronHome.png";
import CurrConvImg from "../../assets/images/currencyConverter.png";
import BrickBreakerImg from "../../assets/images/brickBreaker.png";
import FlappyBirdImg from "../../assets/images/flappyBird.png";
import SnakeGameImg from "../../assets/images/snakeGame.png";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText";
import MaskingGrid from "../Animations/MaskingGrid";

function ProjectsListComponent() {
  const [activeProject, setActiveProject] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveProject(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const projects = [
    {
      name: "Vidron",
      type: "Streaming Platform",
      path: "vidron",
      img: (
        <img
          src={VidronImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Weblog",
      type: "Blogging website",
      path: "weblog",
      img: (
        <img
          src={WeblogImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Currency Converter",
      type: "Tool",
      path: "currencyConverter",
      img: (
        <img
          src={CurrConvImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Brick Breaker",
      type: "Arcade Game",
      path: "brickBreaker",
      img: (
        <img
          src={BrickBreakerImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Flappy Bird Clone",
      type: "Casual Game",
      path: "flappyBird",
      img: (
        <img
          src={FlappyBirdImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Hungry Snake",
      type: "Classic Game",
      path: "hungrySnake",
      img: (
        <img
          src={SnakeGameImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      // placeholder list item
      name: "\u00A0",
      path: "",
    },
  ];

  return (
    <>
      {/* heading and paragraph */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[90%] lg:w-[75%] mt-20 md:mt-40 lg:mt-20">
          <div className="w-full text-3xl lg:text-5xl font-medium select-none josefinSans-text">
            <RandomText text="WHAT I'VE BUILT" />
          </div>

          <div
            className="mt-10 mb-20 md:mt-20 md:mb-28 select-none text-justify font-mono text-sm lg:text-base text-[#6b6b6c] uppercase relative"
            style={{ textIndent: "30%" }}
          >
            <p>
              Here's a collection of the projects I've poured my time,
              creativity, and skills into. Each one reflects a learning curve, a
              new challenge tackled, or a creative solution implemented. From
              frontend finesse to backend logic, these works showcase what I
              love about development—bringing ideas to life through code.
            </p>

            <MaskingGrid
              color="#161616"
              rowSizes={{ sm: 50, md: 35, lg: 40 }}
              columnSizes={{ sm: 50, md: 50, lg: 50 }}
            />
          </div>
        </div>
      </div>

      {/* projects list */}
      <div className="w-full h-full flex justify-center items-center">
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          ref={containerRef}
          className="relative w-screen"
        >
          {projects.map((project, index) => (
            <motion.li
              variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: {
                  opacity: 1,
                  y: "0%",
                  transition: { duration: 0.1 },
                },
              }}
              onClick={() => {
                setActiveProject(index);

                if (window.innerWidth < 1024) {
                  setActiveProject(activeProject === index ? null : index);
                }
              }}
              animate={{
                y: activeProject === index ? -19 : 0,
              }}
              whileHover={{ y: -35 }}
              key={project.path}
              className={`text-5xl md:text-6xl lg:text-8xl flex whitespace-nowrap overflow-hidden lg:overflow-visible lg:line-clamp-1 font-semibold relative  border-y bg-[#161616] lg:shadow-2xl shadow-white border-[#f1f1f1] cursor-pointer transition-transform duration-300 will-change-transform -mt-5 md:-mt-6 lg:-mt-9 first:mt-0 last:hover:transform-none last:pointer-events-none last:border-t last:border-b-0 last:shadow-none hover:shadow-lg select-none project-${index}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <div className="flex justify-between items-center p-2 md:p-3 lg:p-4">
                {/* button for sm and md screens */}
                <a
                  href={`/work/${project.path}`}
                  className={`absolute left-0 top-0 h-full aspect-square 
                  bg-black  active:bg-white/0 text-lg flex items-center justify-center transition-transform duration-300 border-x border-[#f1f1f1]  ${
                    activeProject === index
                      ? "translate-x-0"
                      : "-translate-x-full"
                  } lg:hidden`}
                >
                  <IoMdArrowRoundForward className="w-6 h-6 md:h-8 md:w-8 " />
                </a>

                {/* list for lg screens */}
                <Link
                  to={`/work/${project.path}`}
                  className="hidden lg:block w-full group tracking-tight z-10"
                >
                  <span style={{ wordSpacing: "0.1em" }}>
                    {project.name.toUpperCase()}
                  </span>

                  {project.type && (
                    <span className="text-sm ml-4 self-start text-[#6b6b6c] tracking-wide font-mono">
                      {project.type.toUpperCase()}
                    </span>
                  )}

                  {project.logo && project.logo}
                </Link>

                {/* list for sm and md screens */}
                <span
                  className={`transition-transform duration-300 lg:hidden tracking-tighter ${
                    activeProject === index
                      ? "translate-x-16 md:translate-x-20"
                      : "translate-x-0"
                  }`}
                  style={{ wordSpacing: "0.2em" }}
                >
                  {project.name.toUpperCase()}
                </span>
              </div>

              <a
                href={`/work/${project.path}`}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[40%] h-full overflow-hidden opacity-90"
              >
                {project.img && project.img}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}

export default ProjectsListComponent;
