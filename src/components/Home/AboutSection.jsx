import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useScreenSize from "../../utils/ScreenSize.jsx";

function AboutSection() {
  const screenSize = useScreenSize();

  const columnSize = screenSize === "sm" ? 60 : screenSize === "md" ? 90 : 120;
  const rowSize = screenSize === "sm" ? 30 : screenSize === "md" ? 45 : 60;

  return (
    <section className="min-h-screen lg:h-screen px-4 md:px-16 lg:px-14 py-20">
      <div className="h-full flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[40%] text-xl font-semibold tracking-widest select-none font-mono">
          <span>/</span>
          <span className="pl-4 md:pl-10 lg:pl-28 text-[#6b6b6c]">ABOUT</span>
        </div>

        {/* paragraph */}
        <div className="lg:w-[60%] py-20 lg:py-0 flex justify-end">
          <div className="w-full flex items-end">
            <div className=" flex flex-wrap relative">
              <p
                className="lg:text-xl text-[#6b6b6c] text-justify font-extrabold uppercase font-mono"
                style={{ textIndent: "40%" }}
              >
                I'm a full-stack developer passionate about building intuitive
                and scalable digital experiences. With a strong foundation in
                both front-end and back-end technologies, I craft seamless
                applications that blend. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Commodi deserunt et perferendis eligendi
                facilis cum, beatae enim a sed, ipsum esse magnam animi
                delectus, at vitae architecto minima ullam! Voluptas! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                maiores voluptatibus delectus voluptatum nisi ea, reprehenderit,
                suscipit error sequi neque placeat, deserunt ullam? In libero,
                atque neque at alias ea? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Natus ea maxime voluptates dignissimos tempora
                molestiae, totam, consequatur illum, eaque quae quaerat. Nisi
                veritatis explicabo voluptatum veniam, nemo ullam nostrum totam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                blanditiis modi, a quos dolor eveniet, optio distinctio
                inventore est delectus ea impedit eaque, nulla quis ipsa
                doloribus beatae voluptatem explicabo.
              </p>
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
                    className="bg-[#f1f1f1]"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: Math.random() * 1.5, duration: 0.3 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
