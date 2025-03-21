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
    <div className="h-[80vh] bg-[#d8fc44] flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <div className="flex flex-col md:flex-row justify-between">
            {/* links to different pages */}
            <ul className="flex flex-col p-10">
              {filteredNavItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.slug}
                    className="text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* social link buttons */}
            <div className="flex flex-col items-end p-10">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group"
              >
                <span>LINKEDIN</span>
                <MdArrowOutward className="w-12 h-12 group-hover:rotate-90 transition duration-300" />
              </a>

              <a
                href="https://github.com/amanranahere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-extrabold hover:text-[rgb(74,74,74)] oswald-text transition duration-300 flex justify-center items-center group"
              >
                <span>GITHUB</span>
                <MdArrowOutward className="w-12 h-12 group-hover:rotate-90 transition duration-300" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group"
              >
                <span>X (TWITTER)</span>
                <MdArrowOutward className="w-12 h-12 group-hover:rotate-90 transition duration-300" />
              </a>
            </div>
          </div>

          <a
            href="mailto:amanranahere@gmail.com"
            className="m-10 flex justify-center items-center hover:opacity-75 transition duration-300 text-6xl font-extrabold uppercase leading-none oswald-text group"
          >
            <span>amanranahere@gmail.com</span>
            <MdArrowOutward className="w-20 h-20 pt-1 scale-110 group-hover:rotate-90 transition duration-300" />
          </a>
        </div>

        {/* page top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-10 flex flex-col items-center cursor-pointer group -translate-y-20"
        >
          <IoIosArrowUp
            strokeWidth="10"
            className="h-20 w-20 translate-y-16 group-hover:translate-y-[3.5rem] transition-transform duration-300"
          />
          <IoIosArrowUp
            strokeWidth="10"
            className="h-20 w-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100"
          />
          <p className="oswald-text tracking-widest">PAGE TOP</p>
        </div>
      </div>

      {/* name at the very bottom */}
      <div className="flex justify-center items-end text-[9rem] lg:text-[18rem] leading-[6rem] md:leading-[5rem] lg:leading-[9rem] badeenDisplay-text overflow-hidden">
        <span>AMAN</span>
        <span className="hidden md:block">&nbsp;RANA</span>
      </div>
    </div>
  );
}

export default Footer;
