import React from "react";
import Time from "../../utils/Time.jsx";

function LandingSection() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen relative top-24 lg:top-40 w-full flex flex-col items-center gap-32 lg:gap-0">
      <div className="lg:h-[40%] w-full px-14 md:px-24 lg:px-32 flex flex-col gap-16 lg:gap-0 lg:flex-row justify-between text-[#6b6b6c]">
        <div className="lg:w-[40%] flex justify-between pt-14 text-sm font-semibold font-mono">
          {/* <div>FREELANCE</div> */}
          <Time />
          <div>BASED IN INDIA</div>
        </div>

        {/* description */}
        <div
          className="lg:w-[30%] text-sm font-semibold uppercase font-mono text-justify"
          style={{ textIndent: "20%" }}
        >
          Loremm ipsumm dolor sit ameddt consectetur adipisicing elit. Optio
          facere aspernatur deleniti dolorusdfasdm nostrum accusantium corporis
          aperiam iusto aliasdasquid molestias, tempora qusadfisquam voluptate
          aliquam.
        </div>
      </div>

      {/* name div */}
      <div className="w-full md:px-24 lg:px-32 flex flex-col lg:flex-row justify-between items-center gap-14 lg:gap-0">
        <div className="flex flex-col text-4xl md:text-6xl lg:text-[6vw]">
          <div className="whitespace-nowrap lato-text">AMAN RANA</div>
          <div className="whitespace-nowrap font-semibold inter-text">
            &nbsp;&nbsp;&nbsp;&nbsp;WEB DEVELOPER
          </div>
        </div>

        <button
          onClick={handleScroll}
          className="w-full text-sm text-[#6b6b6c] hover:text-white/50 font-semibold font-mono transition duration-300 flex justify-end px-14 lg:px-0"
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
}

export default LandingSection;
