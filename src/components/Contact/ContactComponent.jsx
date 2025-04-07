import React from "react";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";

function ContactComponent() {
  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="text-xl font-bold tracking-widest select-none josefinSans-text text-white">
        <span>/</span>
        <span className="pl-4 md:pl-10 lg:pl-28">CONTACT</span>
      </div>

      <div className="flex flex-col justify-between">
        {/* paragraph */}
        <div
          className="py-20 lg:py-0 text-sm md:text-base text-semibold text-[#6b6b6c] font-mono text-justify uppercase"
          style={{ textIndent: "40%" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          exercitationem quisquam perferendis dolorem dolorum, nobis voluptatem
          totam non optio vitae ipsa error rerum mollitia repellat aliquid,
          dolore vero veniam ut.
        </div>

        <div className="border-b border-[#6b6b6c] my-10"></div>

        {/* social */}
        <div className="w-full flex justify-between">
          <a
            href="https://www.linkedin.com/in/aman-rana-709a0a330/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c]"
          >
            <RandomText text="LINKEDIN" />
          </a>

          <a
            href="https://github.com/amanranahere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c]"
          >
            <RandomText text="GITHUB" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c]"
          >
            <RandomText text="X" />
          </a>

          <a
            href="mailto:amanranahere@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c]"
          >
            <RandomText text="MAIL" />
          </a>
        </div>

        <div className="lg:hidden border-b border-[#6b6b6c] my-10"></div>
      </div>
    </div>
  );
}

export default ContactComponent;
