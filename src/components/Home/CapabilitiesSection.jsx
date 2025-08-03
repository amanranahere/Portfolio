import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import useScreenSize from "../../utils/ScreenSize";
import RandomText from "../Animations/RandomText.jsx";
import c001 from "../../assets/lotties/c001.json";
import c002 from "../../assets/lotties/c002.json";
import c003 from "../../assets/lotties/c003.json";
import c004 from "../../assets/lotties/c004.json";
import c005 from "../../assets/lotties/c005.json";

function CapabilitiesSection() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const screenSize = useScreenSize();
  const lottieRef1 = useRef();
  const lottieRef2 = useRef();
  const lottieRef3 = useRef();
  const lottieRef4 = useRef();
  const lottieRef5 = useRef();

  useEffect(() => {
    lottieRef1.current?.setSpeed(0.2);
    lottieRef2.current?.setSpeed(0.2);
    lottieRef3.current?.setSpeed(0.2);
    lottieRef4.current?.setSpeed(0.2);
    lottieRef5.current?.setSpeed(0.2);
  }, []);

  const data = [
    {
      number: "C / 001",
      title: "Crafting Engaging Interfaces",
      description: (
        <>
          Clean, responsive UI<span className="normal-case">s</span> start with
          modular React components. I use Tailwind CSS for rapid styling and
          Framer Motion & GSAP to add smooth, intuitive animations. React Hook
          Form ensures seamless interaction in forms. My goal is to build
          interfaces that feel fluid and alive.
        </>
      ),
      buttonText: "Explore My Frontend Stack",
      category: "Frontend",
      lottie: (
        <Lottie
          animationData={c001}
          lottieRef={lottieRef1}
          loop
          className="w-[400px] h-[400px]"
        />
      ),
    },
    {
      number: "C / 002",
      title: "Engineering Scalable Backends",
      description: (
        <>
          A solid backend powers any real-world application. I use Node.js with
          Express.js to create fast, scalable API
          <span className="normal-case">s</span>. MongoDB with Mongoose offers
          flexible data storage, while JWT and Bcrypt.js ensure secure
          authentication workflows.
        </>
      ),
      buttonText: "Dive Into My Backend Toolkit",
      category: "Backend",
      lottie: (
        <Lottie
          animationData={c002}
          lottieRef={lottieRef2}
          loop
          className="w-[400px] h-[400px]"
        />
      ),
    },
    {
      number: "C / 003",
      title: "Dev Tools & Enhancements",
      description: (
        <>
          Efficiency matters. Vite speeds up development, Axios simplifies API
          requests, and Postman helps test them. For backend-as-a-service needs,
          I use Appwrite to ship faster without sacrificing flexibility.
        </>
      ),
      buttonText: "Check Out My Dev Toolkit",
      category: "Tools & Services",
      lottie: (
        <Lottie
          animationData={c004}
          lottieRef={lottieRef4}
          loop
          className="w-[400px] h-[400px]"
        />
      ),
    },
    {
      number: "C / 004",
      title: "Speaking in Code",
      description: (
        <>
          From scripting dynamic web pages with JavaScript and TypeScript to
          solving algorithmic problems in C++, I enjoy learning languages that
          make me think differently. Each one brings new tools for expressing
          logic, solving problems, and building smarter software.
        </>
      ),
      buttonText: "Explore My Programming Languages",
      category: "Languages",
      lottie: (
        <Lottie
          animationData={c003}
          lottieRef={lottieRef3}
          loop
          className="w-[250px] h-[250px]"
        />
      ),
    },
    {
      number: "C / 005",
      title: "Always Exploring",
      description: (
        <>
          I'm always curious about what's next. Currently exploring Three.js for
          3D web experiences. Learning never stops — it's how I grow and refine
          my craft.
        </>
      ),
      buttonText: "Discover What I'm Learning",
      category: "Exploring / Learning",
      lottie: (
        <Lottie
          animationData={c005}
          lottieRef={lottieRef5}
          loop
          className="w-[300px] h-[300px]"
        />
      ),
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
        <div className="lg:w-[25%] my-10 lg:my-0 text-lg lg:text-xl font-semibold tracking-widest select-none josefinSans-text">
          <span>/</span>
          <span className="pl-4 md:pl-10 lg:pl-28">
            <RandomText text="CAPABILITIES" />
          </span>
        </div>

        <div className="flex flex-col mx-auto mt-14 lg:mb-14">
          <div className="text-3xl lg:text-5xl font-medium lg:mt-14 mr-auto josefinSans-text flex flex-col md:flex-row">
            <RandomText text="TOOLS THAT SHAPE" startDelay={0.3} />
            <div className="flex justify-end">
              <RandomText text=" MY CRAFT" startDelay={0.3} />
            </div>
          </div>

          <div className="md:mx-20 my-2 lg:mx-0 lg:my-0 text-sm font-semibold tracking-widest lg:flex lg:justify-end overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-end items-center select-none"
            >
              <button
                onClick={() => navigate("/capabilities")}
                className="text-[#6b6b6c] hover:text-black overflow-hidden font-mono flex items-center cursor-pointer"
              >
                <span className="px-2 whitespace-nowrap text-xs lg:text-sm">
                  VIEW ALL
                </span>
                <HiOutlineArrowNarrowRight />
              </button>
            </motion.div>
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
                className={`h-[70vh] md:h-[60vh] lg:h-[90vh] border-t-2 border-dotted border-[#6a6a6a] flex flex-col lg:flex-row bg-[#f1f1f1] sticky last:relative last:border-none last:h-[50vh] last:bg-transparent `}
                style={{ top: `${index * 12}vh`, y: moveUp }}
              >
                <div className="text-xs lg:text-sm lg:w-[25%] py-2 lg:py-5 font-mono">
                  {item.number}
                </div>

                <div className="lg:w-[50%] md:px-20 lg:px-0">
                  <h1 className="text-lg md:text-xl lg:py-5 pr-4 uppercase font-semibold">
                    <RandomText text={item.title} />
                  </h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-sm md:text-base mt-16 lg:mt-20 mb-20 lg:mr-40 text-justify uppercase font-mono text-[#6b6b6c] font-medium relative"
                    style={{ textIndent: "30%" }}
                  >
                    {item.description}
                  </motion.p>

                  {item.buttonText && (
                    <div className="w-full flex justify-end lg:justify-start">
                      <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.3,
                        }}
                        viewport={{ once: true }}
                        onClick={() =>
                          navigate("/capabilities", {
                            state: { selectedCategory: item.category },
                          })
                        }
                        className="px-6 py-2 text-black/70 border border-black/50 bg-[#f1f1f1] text-xs font-medium md:tracking-widest rounded-[0.21rem] hover:text-white hover:bg-black duration-300 active:scale-95 uppercase font-mono flex cursor-pointer"
                      >
                        {item.buttonText}
                        <span className="leading-3 text-base pl-2">
                          <HiOutlineArrowNarrowRight />
                        </span>
                      </motion.button>
                    </div>
                  )}
                </div>

                {item.lottie && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="hidden lg:flex lg:w-[25%] lg:h-[80%] my-7  justify-end items-center rounded-sm"
                  >
                    <div className="w-full h-full bg-[#e8e9eb] rounded-sm flex justify-center items-center ">
                      {item.lottie}
                    </div>
                  </motion.div>
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
