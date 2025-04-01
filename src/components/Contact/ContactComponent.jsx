import React from "react";
import ContactForm from "./ContactForm.jsx";
import { motion } from "framer-motion";

function ContactComponent() {
  return (
    <div className="">
      <motion.div
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[48vh] lg:h-[40vh] flex flex-col lg:flex-row"
      >
        <div className="h-full lg:px-10 pb-5  bg-[#969696] text-7xl md:text-[15vw] leading-[0.9] tracking-tighter lg:tracking-normal font-medium whitespace-nowrap flex justify-center items-end lg:items-center select-none ">
          Let's Talk
        </div>

        <div className="bg-[#f1f1f1] p-2 gap-10 lg:gap-0">
          <div className="text-xl lg:text-3xl leading-tight font-medium px-2 lg:px-3 py-4 lg:pt-6 select-none">
            Looking to bring an idea to life? Let&apos;s work together to shape
            your vision into something meaningful and impactful.
          </div>
        </div>
      </motion.div>

      <div className="w-full h-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactComponent;
