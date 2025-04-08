import React from "react";
import { motion } from "framer-motion";
import RandomText from "../Animations/RandomText.jsx";
import useScreenSize from "../../utils/ScreenSize.jsx";

function ContactComponent() {
  const screenSize = useScreenSize();

  const columnSize = screenSize === "sm" ? 20 : screenSize === "md" ? 50 : 80;
  const rowSize = screenSize === "sm" ? 10 : screenSize === "md" ? 25 : 40;

  return (
    <div className="h-full w-full flex flex-col justify-between">
      <div className="text-xl font-bold tracking-widest select-none josefinSans-text text-white">
        <span>/</span>
        <span className="pl-4 md:pl-10 lg:pl-28">CONTACT</span>
      </div>

      <div className="flex flex-col justify-between">
        {/* paragraph */}
        <div
          className="py-20 lg:py-0 text-sm md:text-base text-semibold text-[#6b6b6c] font-mono text-justify uppercase relative"
          style={{ textIndent: "40%" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            exercitationem quisquam perferendis dolorem dolorum, nobis
            voluptatem totam non optio vitae ipsa error rerum mollitia repellat
            aliquid, dolore vero veniam ut.
          </p>

          {/* masking div for animation */}
          <div
            className="absolute inset-0 z-10 pointer-events-none grid"
            style={{
              gridTemplateColumns: `repeat(auto-fit, minmax(${columnSize}px, 1fr))`,
              gridTemplateRows: `repeat(auto-fit, minmax(${rowSize}px, 1fr))`,
            }}
          >
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-[#161616]"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 0 }}
                transition={{ delay: Math.random() * 1.5, duration: 0.3 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>

        {/* social */}
        <div className="w-full flex justify-between mb-20 lg:mb-0 lg:mt-20">
          <a
            href="https://www.linkedin.com/in/aman-rana-709a0a330/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold font-mono text-[#6b6b6c] hover:text-[#c0c0c0]"
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
