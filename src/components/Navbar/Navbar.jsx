import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "HOME",
      slug: "/",
    },
    {
      name: "WORK",
      slug: "/work",
    },
    {
      name: "ABOUT",
      slug: "/about",
    },
    {
      name: "CAPABILITIES",
      slug: "/capabilities",
    },
    {
      name: "CONTACT",
      slug: "/contact",
    },
  ];

  return (
    <>
      <div
        onClick={handleClick}
        className="rotate-90 lg:rotate-0 fixed top-20 right-0 lg:top-2 lg:right-20 mix-blend-difference z-[9999] mb-4 group cursor-pointer"
      >
        {/* line */}
        <div className="w-16 lg:w-20 -translate-y-5 lg:-translate-y-0 h-2 bg-white rounded-full"></div>

        {/* MENU text */}
        <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-xl tracking-wide text-white font-bold select-none">
          MENU
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed h-screen w-screen z-50 backdrop-blur-lg"
            ></div>

            <motion.div
              initial={{ scaleX: 0.2, scaleY: 0, opacity: 0 }}
              animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
              exit={{ scaleX: 0.2, scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-7 lg:top-6 right-6 lg:right-16 flex flex-col justify-between z-[9999] origin-top-right"
            >
              <ul className="h-[50vh] lg:h-[70vh] w-[15rem] md:w-[19rem] lg:w-[21rem] py-6 lg:right-10 bg-[#111] rounded-3xl">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <div className="overflow-hidden">
                      <div
                        className="py-1 lg:py-2 max-w-max px-6 text-[#f1f1f1] hover:text-white hover:brightness-200 font-semibold hover:scale-110 transition duration-300 text-2xl md:text-4xl select-none cursor-pointer oswald-text tracking-wider"
                        onClick={() => {
                          navigate(item.slug);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex absolute bottom-6 left-6 space-x-5 p-2 text-white text-2xl md:text-3xl">
                <a
                  href="https://www.linkedin.com/in/aman-rana-709a0a330/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin className="hover:brightness-200 hover:scale-110 text-[#f1f1f1] transition duration-300" />
                </a>
                <a
                  href="https://github.com/amanranahere"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="hover:brightness-200 hover:scale-110 text-[#f1f1f1] transition duration-300" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiX className="hover:brightness-200 hover:scale-110 text-[#f1f1f1] transition duration-300" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ------ */}
      {/* <div className="max-w-max fixed top-0 right-0 z-[9999] mix-blend-difference">
     
        <div
          className="fixed top-10 right-5 cursor-pointer z-[999] "
          onClick={handleClick}
        >
          <svg width="50" height="25" viewBox="0 0 50 25">
            <rect
              style={{
                transition: "transform 0.3s ease",
                transformOrigin: "17.5px 4.3px",
                transform: isMenuOpen
                  ? "translate(7.5px, 8.2px) rotate(45deg)"
                  : "translate(0, 0) rotate(0deg)",
              }}
              width="35"
              height="2.6"
              x="0"
              y="3"
              fill="white"
              rx="2"
              ry="2"
            />
            <rect
              style={{
                transition: "transform 0.3s ease",
                transformOrigin: "26.25px 16.3px",
                transform: isMenuOpen
                  ? "translate(-1.25px, -3.8px) rotate(-45deg) scaleX(2)"
                  : "translate(0, 0) rotate(0deg) scaleX(1)",
              }}
              width="17.5"
              height="2.6"
              x="17.5"
              y="15"
              fill="white"
              rx="2"
              ry="2"
            />
          </svg>
        </div>
      </div> */}

      {/* when menu is open */}
      {/* <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="bg-black fixed inset-0 z-[999] pointer-events-auto flex flex-col justify-end items-start"
      >
        <ul className="absolute p-6">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <motion.div className="overflow-hidden">
                <motion.div
                  key={
                    isMenuOpen ? `menu-open-${index}` : `menu-closed-${index}`
                  }
                  variants={{
                    hidden: { y: "-100%" },
                    visible: {
                      y: "0%",
                      transition: {
                        duration: 0.2,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className=" text-[#8a8a8a] hover:text-white font-extrabold transition duration-300 text-6xl md:text-9xl py-1 select-none cursor-pointer"
                  onClick={() => {
                    navigate(item.slug);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </motion.div>
              </motion.div>
            </li>
          ))}
        </ul>
      </motion.div> */}
      {/* ------ */}
    </>
  );
}

export default Navbar;
