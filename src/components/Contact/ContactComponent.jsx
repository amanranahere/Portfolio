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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            exercitationem quisquam perferendis dolorem dolorum, nobis
            voluptatem totam non optio vitae ipsa error rerum mollitia repellat
            aliquid, dolore vero veniam ut.
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
            href="https://www.linkedin.com/in/aman-rana-709a0a330/"
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
