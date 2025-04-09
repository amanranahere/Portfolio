import React from "react";
import { motion } from "framer-motion";
import ContactComponent from "../Contact/ContactComponent.jsx";
import ContactForm from "../Contact/ContactForm.jsx";

function ContactSection() {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-between px-4 md:px-16 lg:px-14 py-20">
      <div className="lg:w-[40%] h-full">
        <ContactComponent />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="h-full lg:w-[50%]"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}

export default ContactSection;
