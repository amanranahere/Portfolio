import React from "react";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";
import MaskingGrid from "../Animations/MaskingGrid.jsx";

function ContactComponent() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="text-xl font-bold tracking-widest select-none josefinSans-text text-white">
        <span>/</span>
        <span className="pl-4 md:pl-10 lg:pl-28">
          <RandomText text="CONTACT" />
        </span>
      </div>

      <div className="flex flex-col justify-between">
        {/* paragraph */}
        <div
          className="my-20 lg:my-0 text-sm md:text-base text-semibold text-[#6b6b6c] font-mono text-justify uppercase relative"
          style={{ textIndent: "40%" }}
        >
          <p>
            I'm always open to exciting opportunities — whether it's a potential
            role, freelance collaboration, or a creative idea that needs a
            developer's touch. If you're looking for someone who brings both
            technical skill and a fresh perspective, let's connect. And even if
            it's just to say hi or share thoughts, my inbox is always open.
          </p>

          {/* masking div for animation */}
          <MaskingGrid
            color="#161616"
            rowSizes={{ sm: 30, md: 45, lg: 40 }}
            columnSizes={{ sm: 60, md: 90, lg: 50 }}
          />
        </div>

        {/* social */}
        <div className="w-full flex justify-between mb-20 lg:mb-0 lg:mt-20">
          <a
            href="https://www.linkedin.com/in/amanrana-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c] hover:text-[#c0c0c0] duration-300"
          >
            <RandomText text="LINKEDIN" />
          </a>

          <a
            href="https://github.com/amanranahere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c] hover:text-[#c0c0c0] active:text-[#f7f7f7] duration-300"
          >
            <RandomText text="GITHUB" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c] hover:text-[#c0c0c0] active:text-[#f7f7f7] duration-300"
          >
            <RandomText text="X" />
          </a>

          <a
            href="mailto:amanranahere@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c] hover:text-[#c0c0c0] active:text-[#f7f7f7] duration-300"
          >
            <RandomText text="MAIL" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
