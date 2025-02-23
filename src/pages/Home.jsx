import React from "react";
import PageTransition from "../components/Transitions/PageTransition";

function Home() {
  return (
    <div className="pb-80">
      <div className="ml-3 lg:ml-10 flex flex-col justify-end h-screen text-[12vw] lg:text-[10vw] text-[#222222] leading-[0.9] tracking-[-0.04em] font-semibold select-none">
        <div>LANDING PAGE</div>
      </div>
    </div>
  );
}

export default PageTransition(Home);
