import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      name: "CONTACT",
      slug: "/contact",
    },
  ];

  return (
    <div className="max-w-max fixed top-0 right-0 z-[9999] md:mix-blend-difference">
      {/* menu svg for sm screens */}
      <div
        className="md:hidden fixed top-0 right-0 mr-5 mt-10 cursor-pointer z-[99999] mix-blend-difference"
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
            fill={isMenuOpen ? "white" : "black"}
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
            fill={isMenuOpen ? "white" : "black"}
            rx="2"
            ry="2"
          />
        </svg>
      </div>

      {/* when menu is open */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
        className="bg-[#1a1a1a] fixed inset-0 z-[9999] pointer-events-auto"
      >
        <ul className="absolute bottom-32 p-6">
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
                        delay: 0.2,
                        duration: 0.7,
                        ease: [0.25, 1, 0.5, 1],
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className=" text-white hover:text-white/60 active:text-white/60 text-6xl py-1"
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
      </motion.div>

      {/* nav items list on md and lg screens */}
      <div className="hidden md:flex mr-8 mt-10 z-[9999]">
        <ul
          className="m-5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setHoveredItem(null);
          }}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                onMouseEnter={() => setHoveredItem(item.name)}
                className="font-extrabold text-[#fff] hover:text-white/60 transition duration-200"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay div that appears when hovered */}
      {/* {isHovered && (
        <div className="hidden lg:flex justify-center items-center fixed inset-0 bg-black z-[99]">
          <div className="z-50 text-[20vw] bg-black text-white font-bold">
            {hoveredItem}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default Navbar;
