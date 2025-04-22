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
      className={`h-[60vh] md:h-[40vh] lg:h-[60vh] w-full text-white flex flex-col lg:flex-row justify-around overflow-hidden relative`}
    >
      <div className="lg:w-[45%] flex flex-row justify-between items-end ">
        <div className="">
          <div className="flex flex-col">
            {/* links to different pages */}
            <ul className="flex gap-5 pl-20">
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
                    className="md:text-lg lg:text-xl font-extrabold hover:text-[#6b6b6c] font-mono transition duration-300 leading-relaxed cursor-pointer select-none"
                  >
                    <RandomText text={item.name} />
                  </div>
                </li>
              ))}
            </ul>

            {/* social link buttons */}
            <div className="flex gap-10">
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
      <div className="lg:w-[50%] p-4 flex justify-end items-end text-4xl lg:text-9xl leading-none badeenDisplay-text overflow-hidden select-none ">
        AMAN RANA
      </div>
    </div>
  );
}

export default Footer;
