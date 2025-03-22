import React from "react";
import { useLocation } from "react-router-dom";
import DarkModeToggle from "../DarkModeToggle";
import { IoIosArrowUp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

function Footer() {
  const location = useLocation();
  const currentPage = location.pathname;

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

  const filteredNavItems = navItems.filter((item) => item.slug !== currentPage);

  return (
    <div className="h-[75vh] md:h-[50vh] lg:h-[80vh] w-screen bg-[#d8fc44] flex flex-col justify-between fixed bottom-0 left-0 -z-10">
      <div className="flex flex-row justify-between relative">
        <div className="w-screen md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col md:flex-row justify-between">
            {/* links to different pages */}
            <ul className="flex flex-col p-10">
              {filteredNavItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.slug}
                    className="text-xl md:text-2xl lg:text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 leading-relaxed"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* social link buttons */}
            <div className="flex flex-col items-start md:items-end p-10">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl lg:text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <span>LINKEDIN</span>
                <MdArrowOutward className="w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 group-hover:rotate-90 transition duration-300" />
              </a>

              <a
                href="https://github.com/amanranahere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl lg:text-4xl font-extrabold hover:text-[rgb(74,74,74)] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <span>GITHUB</span>
                <MdArrowOutward className="w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 group-hover:rotate-90 transition duration-300" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl lg:text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <span>X (TWITTER)</span>
                <MdArrowOutward className="w-7 h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 group-hover:rotate-90 transition duration-300" />
              </a>
            </div>
          </div>

          <a
            href="mailto:amanranahere@gmail.com"
            className="m-10 flex lg:justify-center items-center hover:opacity-75 transition duration-300 text-xl md:text-2xl lg:text-6xl font-extrabold uppercase leading-none oswald-text group"
          >
            <span>amanranahere@gmail.com</span>
            <MdArrowOutward className="w-7 h-7 md:w-9 md:h-9 lg:w-20 lg:h-20 md:pt-1 md:scale-110 group-hover:rotate-90 transition duration-300" />
          </a>
        </div>

        {/* page top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-[4.5rem] md:top-10 right-8 flex flex-col items-center cursor-pointer group -translate-y-20 select-none"
        >
          <IoIosArrowUp
            strokeWidth="10"
            className="h-12 w-12 md:h-20 md:w-20 translate-y-[2.5rem] md:translate-y-16 group-hover:translate-y-[2rem] md:group-hover:translate-y-[3.5rem] transition-transform duration-300"
          />
          <IoIosArrowUp
            strokeWidth="10"
            className="h-12 w-12 md:h-20 md:w-20 translate-y-[0.5rem]  group-hover:translate-y-[0rem] md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300 delay-100"
          />
          <p className="text-sm md:text-base oswald-text tracking-widest">
            PAGE TOP
          </p>
        </div>
      </div>

      {/* name at the very bottom */}
      <div className="flex justify-center text-[9rem] lg:text-[18rem] leading-[6rem] md:leading-[5rem] lg:leading-[9rem] badeenDisplay-text overflow-hidden">
        <span>AMAN</span>
        <span className="hidden md:block">&nbsp;RANA</span>
      </div>
    </div>
  );
}

export default Footer;
