import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import WeblogImg from "../../assets/images/weblogAllBlogs.png";
import VidronImg from "../../assets/images/vidronHome.png";
import CurrConvImg from "../../assets/images/CurrencyConverter.png";
import BrickBreakerImg from "../../assets/images/brickBreaker.png";
import FlappyBirdImg from "../../assets/images/flappyBird.png";
import SnakeGameImg from "../../assets/images/snakeGame.png";
import { motion } from "framer-motion";

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
      name: "Weblog",
      type: "Blogging website",
      path: "weblog",
      hoverColor: "hover:bg-blue-100",
      img: (
        <img
          src={WeblogImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Vidron",
      type: "Streaming Platform",
      path: "vidron",
      hoverColor: "hover:bg-teal-100",
      img: (
        <img
          src={VidronImg}
          alt="Project Preview"
          className="w-full h-full object-cover project-img"
        />
      ),
    },
    {
      name: "Currency Converter",
      type: "Tool",
      path: "currencyConverter",
      hoverColor: "hover:bg-pink-100",
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
      hoverColor: "hover:bg-orange-100",
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
      hoverColor: "hover:bg-green-100",
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
      hoverColor: "hover:bg-cyan-100",
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
      {/* MY PROJECTS heading */}
      <motion.div className="mb-12 lg:mb-20 flex justify-center items-center">
        <motion.div
          className=" dark:text-[#f1f1f1] flex flex-col md:flex-row justify-center items-center"
          variants={{
            hidden: { y: "-100%" },
            visible: {
              y: "0%",
              transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="outline-text blackColor dark:text-white giveYouGlory-text text-5xl md:text-8xl lg:text-9xl leading-3 md:pt-12 lg:pt-14">
            MY&nbsp;
          </span>

          <span className="text-[3.5rem] md:text-8xl lg:text-9xl oswald-text font-extrabold">
            PROJECTS
          </span>
        </motion.div>
      </motion.div>

      {/* projects list */}
      <div className="w-full h-full flex justify-center items-center pb-[30vh]">
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
              className={`text-5xl md:text-6xl lg:text-8xl flex whitespace-nowrap overflow-hidden lg:overflow-visible lg:line-clamp-1 font-semibold relative bg-[#f1f1f1] dark:bg-black border-y border-black dark:border-white  shadow-black cursor-pointer transition-transform duration-300 will-change-transform -mt-5 md:-mt-6 lg:-mt-9 first:mt-0 last:hover:transform-none last:pointer-events-none last:border-t last:border-b-0 last:shadow-none last:bg-[#f1f1f1] dark:last:bg-[#1c1d21] hover:shadow-lg select-none ${project.hoverColor} project-${index}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <div className="flex justify-between items-center p-2 md:p-3 lg:p-4">
                {/* button for sm and md screens */}
                <a
                  href={`/work/${project.path}`}
                  className={`absolute left-0 top-0 h-full aspect-square 
                  bg-white dark:bg-[#1c1d21] active:bg-white/0 text-lg flex items-center justify-center transition-transform duration-300 border-x border-black dark:border-white ${
                    activeProject === index
                      ? "translate-x-0"
                      : "-translate-x-full"
                  } lg:hidden`}
                >
                  <IoArrowForwardCircleOutline className="w-6 h-6 md:h-8 md:w-8 dark:text-white" />
                </a>

                {/* list for lg screens */}
                <Link
                  to={`/work/${project.path}`}
                  className="hidden lg:block w-full group dark:text-[#f1f1f1] tracking-tight z-10"
                >
                  {project.name.toUpperCase()}

                  {project.type && (
                    <span className="text-sm ml-2 self-start text-gray-700 dark:text-white/80 tracking-wide">
                      {project.type.toUpperCase()}
                    </span>
                  )}

                  {project.logo && project.logo}
                </Link>

                {/* list for sm and md screens */}
                <span
                  className={`transition-transform duration-300 lg:hidden dark:text-[#f1f1f1] tracking-tighter ${
                    activeProject === index
                      ? "translate-x-16 md:translate-x-20"
                      : "translate-x-0"
                  }`}
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
