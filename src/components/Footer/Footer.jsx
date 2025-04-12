import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowUp } from "react-icons/hi";
import RandomText from "../Animations/RandomText.jsx";

function Footer() {
  const navigate = useNavigate();
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

  const filteredNavItems = navItems.filter((item) => item.slug !== currentPage);

  return (
    <div
      className={`h-[75vh] md:h-[50vh] lg:h-[80vh] w-full bg-black text-white border-t-2 border-white flex flex-col justify-between overflow-hidden relative`}
    >
      <div className="flex flex-row md:justify-between relative">
        <div className="w-screen md:w-[70%] lg:w-[60%]">
          <div className="flex flex-col md:flex-row justify-between">
            {/* links to different pages */}
            <ul className="flex flex-col px-10 py-5 md:p-10">
              {filteredNavItems.map((item) => (
                <li key={item.name}>
                  <div
                    onClick={() => {
                      if (item.action) {
                        item.action();
                      } else {
                        navigate(item.slug);
                      }
                    }}
                    className=" md:text-lg lg:text-xl font-extrabold hover:text-[#7a7a7a] font-mono transition duration-300 leading-relaxed cursor-pointer select-none"
                  >
                    <RandomText text={item.name} />
                  </div>
                </li>
              ))}
            </ul>

            {/* social link buttons */}
            <div className="flex flex-col items-start px-10 py-4 md:p-10">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-lg lg:text-xl font-extrabold hover:text-[#4a4a4a] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="LINKEDIN" />
              </a>

              <a
                href="https://github.com/amanranahere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl lg:text-xl font-extrabold hover:text-[rgb(74,74,74)] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="GITHUB" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="md:text-lg lg:text-xl font-extrabold hover:text-[#4a4a4a] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="X" />
              </a>
            </div>
          </div>

          <a
            href="mailto:amanranahere@gmail.com"
            className="mx-10 my-5 md:m-10 flex lg:justify-start items-center hover:text-[#7a7a7a] transition duration-300 text-xl md:text-2xl lg:text-5xl font-extrabold uppercase leading-none font-mono group"
          >
            <RandomText text="amanranahere@gmail.com" />
          </a>
        </div>

        {/* page top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-6 md:p-10 flex flex-col items-center gap-2 cursor-pointer group select-none"
        >
          <HiOutlineArrowNarrowUp className="text-4xl group-hover:-translate-y-2 md:group-hover:-translate-y-2 transition-transform duration-300" />

          <p className="text-sm text-center font-mono">PAGE TOP</p>
        </div>
      </div>

      {/* name at the very bottom */}
      <div className="w-full flex justify-center text-[9rem] lg:text-[18rem] leading-[6rem] md:leading-[5rem] lg:leading-[9rem] badeenDisplay-text overflow-hidden select-none absolute bottom-0 left-0">
        <span>AMAN</span>
        <span className="hidden md:block">&nbsp;RANA</span>
      </div>
    </div>
  );
}

export default Footer;
