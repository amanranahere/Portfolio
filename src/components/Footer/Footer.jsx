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
      className={`h-full w-full pt-[10vh] lg:pt-[30vh] text-white flex flex-col lg:flex-row justify-around overflow-hidden relative`}
    >
      <div className="w-full flex flex-col lg:flex-row">
        <div className="lg:min-w-[50%] flex flex-row justify-between items-end">
          <div className="md:h-[20vh] w-full flex flex-col justify-around">
            <div className="w-full flex flex-col gap-4">
              {/* links to different pages */}
              <ul className="w-full flex flex-wrap justify-around lg:pl-32 ">
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
                      className="md:text-lg lg:text-xl font-extrabold hover:text-[#6b6b6c] font-mono transition duration-300 leading-relaxed tracking-wider cursor-pointer select-none whitespace-nowrap"
                    >
                      <RandomText text={item.name} />
                    </div>
                  </li>
                ))}
              </ul>

              {/* social link buttons */}
              <div className="flex justify-around lg:justify-normal lg:gap-14 lg:pl-20">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:text-lg lg:text-xl font-extrabold hover:text-[#6b6b6c] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
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
                  className="md:text-lg lg:text-xl font-extrabold hover:text-[#6b6b6c] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
                >
                  <RandomText text="X" />
                </a>

                <a
                  href="mailto:amanranahere@gmail.com"
                  className="md:text-lg lg:text-xl font-extrabold hover:text-[#6b6b6c] font-mono transition duration-300 flex justify-center items-center group leading-relaxed"
                >
                  <RandomText text="MAIL" />
                </a>
              </div>
            </div>
          </div>

          {/* page top button */}
          {/* <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="max-h-max p-6 md:p-10 flex flex-col items-center gap-2 cursor-pointer group select-none"
        >
          <HiOutlineArrowNarrowUp className="text-4xl group-hover:-translate-y-2 md:group-hover:-translate-y-2 transition-transform duration-300" />

          <p className="text-sm text-center font-mono">PAGE TOP</p>
        </div> */}
        </div>

        {/* name at the very bottom */}
        <div className="h-[20vh] w-full p-4 flex justify-center lg:justify-end items-end text-[clamp(7rem,8vw,9rem)] leading-none badeenDisplay-text overflow-hidden select-none">
          <div className="md:hidden">
            <RandomText text="AMAN" />
          </div>

          <div className="hidden md:block">
            <RandomText text="AMAN RANA" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
