import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [key, setKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [location.pathname]);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "HOME",
      action: () => {
        if (window.location.pathname !== "/") {
          navigate("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
    },
    {
      name: "WORK",
      slug: "/work",
    },
    {
      name: "ABOUT",
      action: () => {
        if (window.location.pathname !== "/") {
          navigate("/", { state: { scrollToAbout: true } });
        } else {
          window.dispatchEvent(new Event("scrollToAbout"));
        }
      },
    },
    {
      name: "CAPABILITIES",
      slug: "/capabilities",
    },
    {
      name: "CONTACT",
      action: () => {
        if (window.location.pathname !== "/") {
          navigate("/", { state: { scrollToContact: true } });
        } else {
          window.dispatchEvent(new Event("scrollToContact"));
        }
      },
    },
  ];

  const socialIcons = [
    {
      icon: (
        <SiLinkedin className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
      ),
      link: "https://www.linkedin.com/in/amanrana-dev/",
    },
    {
      icon: (
        <SiGithub className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
      ),
      link: "https://github.com/amanranahere",
    },
    {
      icon: (
        <SiX className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
      ),
      link: "#",
    },
    {
      icon: (
        <IoMail className="text-3xl lg:text-3xl scale-110 hover:scale-125 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
      ),
      link: "mailto:amanranahere@gmail.com",
    },
  ];

  const delays = socialIcons.map(() => Math.random() * 0.8);

  return (
    <>
      <motion.div
        key={key}
        initial={{ y: "-800%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        onClick={handleClick}
        className="fixed top-7 right-6 lg:top-2 lg:right-20 mix-blend-difference z-[9999] mb-4 group cursor-pointer"
      >
        {/* line */}
        <motion.div
          initial={{ width: "4rem" }}
          animate={{ width: isMenuOpen ? "9rem" : "6rem" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className=" -translate-y-5 lg:-translate-y-0 h-2 bg-white rounded-full"
        ></motion.div>

        {/* MENU text */}
        <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-xl tracking-widest text-white font-bold font-mono select-none">
          MENU
        </div>
      </motion.div>

      <AnimatePresence>
        <div className="relative">
          {isMenuOpen && (
            <>
              <div
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-[99] bg-black/70"
              ></div>

              {/* menu box */}
              <motion.div
                initial={{ scaleX: 0.3, scaleY: 0, opacity: 0 }}
                animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
                exit={{ scaleX: 0.3, scaleY: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="fixed top-6 right-2 lg:right-16 flex flex-col justify-between z-[9999] origin-top-right "
              >
                <ul className="h-[50vh] lg:h-[60vh] w-[15rem] md:w-[19rem] lg:w-[18rem] py-6 lg:right-10 bg-[#111] rounded-3xl">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <div className="overflow-hidden">
                        <div
                          className="py-1 w-full px-6 text-[#f1f1f1] hover:text-[#4a4a4a] font-bold duration-300 text-2xl md:text-2xl select-none cursor-pointer font-mono tracking-wider"
                          onClick={() => {
                            if (item.action) {
                              item.action();
                            } else {
                              navigate(item.slug);
                            }
                            setIsMenuOpen(false);
                          }}
                        >
                          <RandomText text={item.name} delaySpread={0.6} />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* social icons */}
                <div className="flex absolute bottom-6 right-6 text-white text-2xl md:text-2xl">
                  <div className="flex justify-center items-center gap-3 lg:gap-4">
                    {socialIcons.map((item, index) => (
                      <motion.a
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: delays[index], duration: 0.5 }}
                        exit="hidden"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default Navbar;
