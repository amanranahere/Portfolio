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
      <div className="max-w-max fixed top-0 right-0 z-[9999] mix-blend-difference">
        {/* menu svg */}
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
      </div>

      {/* when menu is open */}
      <motion.div
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
      </motion.div>
    </>
  );
}

export default Navbar;
