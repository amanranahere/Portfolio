import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../../utils/ScreenSize";
import RandomText from "../Animations/RandomText";

function CapabilitiesSection() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const screenSize = useScreenSize();

  const data = [
    {
      number: "C / 001",
      title: "Crafting Engaging Interfaces",
      description:
        "Bringing ideas to life requires more than just code—it’s about crafting seamless, interactive, and dynamic experiences. With React.js, I build modular and reusable UI components that are efficient and scalable. Managing state efficiently is essential, and Redux ensures a predictable flow, while React Router allows users to navigate effortlessly through applications.",
      buttonText: "Explore My Frontend Stack",
      category: "Frontend",
      img: "img",
    },
    {
      number: "C / 002",
      title: "Engineering Scalable Backends",
      description:
        "Behind every robust application is a powerful backend that handles data, authentication, and scalability. I rely on Node.js and Express.js to create high-performance APIs that process requests efficiently. MongoDB, coupled with Mongoose, provides flexible and scalable data storage, while JWT and Bcrypt.js ensure secure authentication for user protection.",
      buttonText: "Dive Into My Backend Toolkit",
      category: "Backend",
      img: "img",
    },
    {
      number: "C / 003",
      title: "Aesthetics & Motion",
      description:
        "Design is not just about appearance—it's about experience. Tailwind CSS allows me to style applications with precision and speed, keeping the UI clean and responsive. To add motion and interactivity, I use Framer Motion and GSAP, creating fluid transitions and engaging animations that make interfaces feel alive. Forms are an essential part of user interaction, and with React Hook Form, I ensure smooth validation and state management.",
      buttonText: "See My Design & Animation Tools",
      category: "Frontend",
      img: "img",
    },
    {
      number: "C / 004",
      title: "Dev Tools & Enhancements",
      description:
        "A streamlined workflow is key to building efficiently. Vite accelerates development with instant hot module replacement, while Axios simplifies API communication. Debugging and testing are critical, and tools like Postman help analyze API responses effectively. For backend services without the hassle of manual setup, I leverage Appwrite, a powerful backend-as-a-service solution.",
      buttonText: "Check Out My Dev Toolkit",
      category: "Tools & Services",
      img: "img",
    },
    {
      number: "C / 005",
      title: "Always Exploring",
      description:
        "The tech landscape is constantly evolving, and I strive to grow with it. Exploring TypeScript has enhanced my ability to write maintainable and error-free code. Three.js opens the door to immersive 3D web experiences, while Docker streamlines development and deployment processes. Learning never stops, and I’m always on the lookout for the next tool to refine my craft.",
      buttonText: "Discover What I’m Learning",
      category: "Exploring / Learning",
      img: "img",
    },
    {
      number: "",
      title: "",
      description: "",
    },
  ];

  const moveUp = useTransform(
    scrollYProgress,
    [0, 1],
    screenSize === "sm"
      ? [3000, -300]
      : screenSize === "md"
      ? [2000, -100]
      : [1000, -400]
  );

  return (
    <div className="min-h-max bg-[#f1f1f1] px-4">
      <div className="pt-16 lg:pt-28 px-4 md:px-16 lg:px-14 flex flex-col text-[#333]">
        <div className="lg:w-[25%] my-10 lg:my-0  text-lg lg:text-xl font-semibold tracking-widest select-none josefinSans-text">
          <span>/</span>
          <span className="pl-4 md:pl-10 lg:pl-28">CAPABILITIES</span>
        </div>

        <div className="flex flex-col mx-auto">
          <div className="text-3xl lg:text-5xl font-medium lg:mt-14 mr-auto josefinSans-text flex flex-col lg:flex-row">
            <RandomText text="TOOLS THAT SHAPE" />
            <div className="flex justify-end">
              <RandomText text=" MY CRAFT" />
            </div>
          </div>

          <div className="md:mx-20 my-2 lg:mx-0 lg:my-0 text-sm font-semibold tracking-widest lg:flex lg:justify-end overflow-hidden">
            <div className="flex justify-end items-center select-none">
              <button
                onClick={() => navigate("/capabilities")}
                className="text-[#6b6b6c] overflow-hidden font-mono"
              >
                <span className="px-4 whitespace-nowrap text-xs lg:text-sm">
                  VIEW ALL
                </span>
                <span className="text-lg">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="relative z-10">
        <ul className="">
          {data.map((item, index) => {
            return (
              <motion.li
                key={index}
                className={`h-[70vh] md:h-[60vh] lg:h-[70vh] border-t-2 border-dotted border-[#6a6a6a] flex flex-col lg:flex-row bg-[#f1f1f1] sticky last:relative last:border-none last:h-[50vh] last:bg-transparent`}
                style={{ top: `${index * 12}vh`, y: moveUp }}
              >
                <div className="text-xs lg:text-sm lg:w-[25%] py-2 lg:py-5 font-mono">
                  {item.number}
                </div>

                <div className="lg:w-[50%] md:px-20 lg:px-0">
                  <h1 className="text-lg md:text-xl lg:py-5 pr-4 uppercase font-semibold">
                    {item.title}
                  </h1>

                  <p
                    className="text-sm md:text-base pt-16 lg:pt-20 pb-12 lg:pr-40 text-justify uppercase font-mono text-[#6b6b6c] font-medium"
                    style={{ textIndent: "30%" }}
                  >
                    {item.description}
                  </p>

                  {item.buttonText && (
                    <div className="w-full flex justify-end lg:justify-start ">
                      <button
                        onClick={() =>
                          navigate("/capabilities", {
                            state: { selectedCategory: item.category },
                          })
                        }
                        className="px-6 py-2 text-black/70 border border-black/50 bg-[#f1f1f1] text-xs font-medium md:tracking-widest rounded-[0.21rem] hover:text-white hover:bg-black transition duration-300 active:scale-95 uppercase font-mono"
                      >
                        {item.buttonText}{" "}
                        <span className="leading-3 text-base">
                          &nbsp;&rarr;
                        </span>
                      </button>
                    </div>
                  )}
                </div>

                {item.img && (
                  <div className="hidden lg:flex lg:w-[25%] my-7  justify-end items-center rounded-sm">
                    <div className="w-full h-full bg-gray-300 rounded-sm flex justify-center items-center">
                      {item.img}
                    </div>
                  </div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CapabilitiesSection;
