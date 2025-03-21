import React from "react";
import ContactForm from "./ContactForm.jsx";
import { motion } from "framer-motion";

function ContactComponent() {
  return (
    <div className="lg:pt-0 bg-[#f7f7f7] h-screen flex flex-col md:overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <motion.div
          initial={{ x: -300, y: -300, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6,
          }}
          className="p-8 pt-40 md:pt-52 lg:pt-10 bg-[#c9c9c9] text-[4rem] md:text-[15vw] leading-[0.9] tracking-tight font-medium whitespace-nowrap flex justify-center items-center select-none"
        >
          Let's Talk
        </motion.div>

        <motion.div
          initial={{ x: 300, y: -300, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6,
          }}
          className="bg-[#f1f1f1] flex flex-col justify-between p-2 gap-10 lg:gap-0"
        >
          <div className="text-3xl md:text-center lg:text-left lg:pr-36 lg:pt-4 select-none">
            Looking to bring an idea to life? Let&apos;s work together to create
            something impactful!
          </div>

          <div className="flex justify-between text-sm">
            <span className="leading-none select-none">Prefer Email?</span>
            <a
              href="mailto:amanranahere@gmail.com"
              className="underline leading-none"
            >
              amanranahere@gmail.com
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactComponent;
