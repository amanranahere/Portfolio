import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/Transitions/PageTransition";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Work() {
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
    { name: "Weblog", path: "weblog", hoverColor: "hover:bg-blue-100" },
    { name: "Vidron", path: "vidron", hoverColor: "hover:bg-teal-100" },
    {
      name: "Currency Converter",
      path: "currencyConverter",
      hoverColor: "hover:bg-yellow-100",
    },
    {
      name: "Brick Breaker",
      path: "brickBreaker",
      hoverColor: "hover:bg-orange-100",
    },
    {
      name: "Flappy Bird Clone",
      path: "flappyBird",
      hoverColor: "hover:bg-purple-100",
    },
    {
      name: "Hungry Snake",
      path: "hungrySnake",
      hoverColor: "hover:bg-green-100",
    },
  ];

  return (
    <div>
      <div className="p-10 text-xl mt-14 md:text-2xl lg:text-3xl flex justify-center items-center py-20">
        MY PROJECTS
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <ul ref={containerRef} className="relative w-screen">
          {projects.map((project, index) => (
            <li
              key={project.path}
              onClick={() => setActiveProject(index)}
              className={`text-5xl md:text-6xl lg:text-8xl whitespace-nowrap overflow-hidden font-semibold relative bg-white p-2 md:p-3 lg:p-4 border-y border-black shadow-md cursor-pointer transition-transform duration-500 will-change-transform -mt-5 md:-mt-6 lg:-mt-9 first:mt-0 hover:-translate-y-5 md:hover:-translate-y-6 lg:hover:-translate-y-9 hover:shadow-lg select-none ${project.hoverColor}`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <div className="flex justify-between items-center">
                {/* button for sm and md screens */}
                <a
                  href={`/work/${project.path}`}
                  className={`absolute left-0 top-0 h-full aspect-square 
                  bg-white active:bg-white/0 text-lg flex items-center justify-center
                  transition-transform duration-300 border-x border-black ${
                    activeProject === index
                      ? "translate-x-0"
                      : "-translate-x-full"
                  } lg:hidden`}
                >
                  <IoArrowForwardCircleOutline className="w-6 h-6 md:h-8 md:w-8 " />
                </a>

                {/* link for lg screens */}
                <Link
                  to={`/work/${project.path}`}
                  className="hidden lg:block w-full"
                >
                  {project.name.toUpperCase()}
                </Link>

                <span
                  className={`transition-transform duration-300 lg:hidden ${
                    activeProject === index
                      ? "translate-x-16 md:translate-x-20"
                      : "translate-x-0"
                  }`}
                >
                  {project.name.toUpperCase()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageTransition(Work);
