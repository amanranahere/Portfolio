import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
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
                    className="text-lg md:text-xl lg:text-2xl font-extrabold hover:text-[#7a7a7a] oswald-text transition duration-300 leading-relaxed cursor-pointer select-none"
                  >
                    <RandomText text={item.name} />
                  </div>
                </li>
              ))}
            </ul>

            {/* social link buttons */}
            <div className="flex flex-col items-start md:items-end px-10 py-4 md:p-10">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl lg:text-2xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="LINKEDIN" />
              </a>

              <a
                href="https://github.com/amanranahere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl lg:text-2xl font-extrabold hover:text-[rgb(74,74,74)] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="GITHUB" />
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl lg:text-2xl font-extrabold hover:text-[#4a4a4a] oswald-text transition duration-300 flex justify-center items-center group leading-relaxed"
              >
                <RandomText text="X" />
              </a>
            </div>
          </div>

          <a
            href="mailto:amanranahere@gmail.com"
            className="mx-10 my-5 md:m-10 flex lg:justify-start items-center hover:text-[#7a7a7a] transition duration-300 text-xl md:text-2xl lg:text-5xl font-extrabold uppercase leading-none oswald-text group"
          >
            <RandomText text="amanranahere@gmail.com" />
          </a>
        </div>

        {/* page top button */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute top-[3.4rem] md:top-10 right-10 flex flex-col items-center cursor-pointer group -translate-y-20 select-none"
        >
          <IoIosArrowUp
            strokeWidth="10"
            className="h-12 w-12 md:h-20 md:w-20 translate-y-[2.5rem] md:translate-y-16 group-hover:translate-y-[2rem] md:group-hover:translate-y-[3.5rem] transition-transform duration-300 group-hover:text-[#7a7a7a]"
          />
          <IoIosArrowUp
            strokeWidth="10"
            className="h-12 w-12 md:h-20 md:w-20 translate-y-[0.5rem]  group-hover:translate-y-[0rem] md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300 delay-100 group-hover:text-[#7a7a7a]"
          />
          <p className="text-sm md:text-base oswald-text tracking-widest">
            PAGE TOP
          </p>
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
