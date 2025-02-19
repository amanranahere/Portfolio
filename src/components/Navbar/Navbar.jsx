import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-max fixed top-0 right-0">
      {/* menu svg for sm screens */}
      <div
        className="md:hidden fixed top-0 right-0 mr-5 mt-10 z-50 cursor-pointer"
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

      {isMenuOpen && (
        <div className="bg-[#1a1a1a] fixed inset-0 z-40">
          <ul className="absolute bottom-32 p-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    navigate(item.slug);
                    setIsMenuOpen(false);
                  }}
                  className="font-extrabold text-white hover:text-white/60 active:text-white/60 text-6xl py-1"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* nav items list on md and lg screens */}
      <div className="hidden md:flex mr-5 mt-10">
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
                className="font-extrabold text-[#2a2a2a] hover:text-black/60 transition duration-200"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay div that appears when hovered */}
      {isHovered && (
        <div className="hidden lg:flex justify-center items-center  fixed inset-0 bg-black z-30">
          <div className="z-50 text-[20vw] text-white font-bold">
            {hoveredItem}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
