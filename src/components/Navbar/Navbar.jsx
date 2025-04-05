import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

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
      action: () => {
        if (window.location.pathname !== "/") {
          navigate("/", { state: { scrollToContact: true } });
        } else {
          window.dispatchEvent(new Event("scrollToContact"));
        }
      },
    },
  ];

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
        <div className="hidden lg:block absolute top-full left-1/2 -translate-x-1/2 opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out text-xl tracking-wide text-white font-bold select-none">
          MENU
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[99] backdrop-blur-lg"
            ></div>

            {/* menu box */}
            <motion.div
              initial={{ scaleX: 0.3, scaleY: 0, opacity: 0 }}
              animate={{ scaleX: 1, scaleY: 1, opacity: 1 }}
              exit={{ scaleX: 0.3, scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-6 right-2 lg:right-16 flex flex-col justify-between z-[9999] origin-top-right"
            >
              <motion.ul
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="h-[50vh] lg:h-[70vh] w-[15rem] md:w-[19rem] lg:w-[21rem] py-6 lg:right-10 bg-[#111] rounded-3xl"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="py-1 lg:py-2 max-w-max px-6 text-[#f1f1f1] hover:text-[#4a4a4a] font-semibold hover:scale-105 transition duration-300 text-2xl md:text-4xl select-none cursor-pointer oswald-text tracking-wider"
                        onClick={() => {
                          if (item.action) {
                            item.action();
                          } else {
                            navigate(item.slug);
                          }
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.7, duration: 0.3 },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex absolute bottom-6 left-6 text-white text-2xl md:text-3xl"
              >
                <div className="flex justify-center items-center gap-3 lg:gap-5">
                  <a
                    href="https://www.linkedin.com/in/aman-rana-709a0a330/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
                  </a>

                  <a
                    href="https://github.com/amanranahere"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiX className="hover:scale-110 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
                  </a>

                  <a
                    href="mailto:amanranahere@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoMail className="text-3xl lg:text-4xl scale-110 hover:scale-125 text-[#f1f1f1] hover:text-[#7a7a7a] transition duration-300" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
