import React from "react";
import ColoringButton from "../Buttons/ColoringButton.jsx";

function FirstSection() {
  return (
    <div className="h-screen mb-80 bg-[#f7f7f7] dark:bg-[#1e1919] dark:text-[#f1f1f1] flex justify-center items-center px-32">
      <p className="text-2xl md:text-5xl font-light md:leading-tight text-center">
        Hi, I'm{" "}
        <span className="ericaOne-text text-4xl md:text-7xl whitespace-nowrap">
          Aman Rana
        </span>
        , a{" "}
        <span className="bigShoulderStencil-text text-3xl md:text-5xl font-bold whitespace-nowrap">
          full-stack developer
        </span>{" "}
        passionate about building <span className="lato-text">modern</span>,{" "}
        <span className="inter-text">efficient</span>, and{" "}
        <span className="sourceCodePro-text">scalable</span> web applications. I
        focus on <span className="kranky-text text-6xl">crafting</span>{" "}
        <span className="italic">seamless user experiences</span> while writing{" "}
        <span className="sourceCodePro-text tracking-tighter">
          clean and maintainable
        </span>{" "}
        code. With a constant drive to{" "}
        <span className="giveYouGlory-text font-semibold">
          learn and experiment
        </span>{" "}
        with new technologies, I love{" "}
        <span className="playwrite-text text-4xl whitespace-nowrap">
          solving complex problems
        </span>{" "}
        and bringing ideas to <span className="montez-text text-6xl">life</span>
        . <span className="vibes-text text-6xl">Explore </span> my{" "}
        <ColoringButton text="skills" type="A" link="/" />
        to see what I <span className="kranky-text text-6xl">work</span> with,
        check out my <ColoringButton text="projects" type="A" link="/work" /> to
        see what
        <span className="specialElite-text whitespace-nowrap"> I've built</span>
        , or <span className="zeyada-text text-6xl">drop me a message</span> and
        <ColoringButton text="let's talk" type="A" link="/contact" />
      </p>
    </div>
  );
}

export default FirstSection;
