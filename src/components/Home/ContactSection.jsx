import React from "react";
import ContactComponent from "../Contact/ContactComponent.jsx";
import ContactForm from "../Contact/ContactForm.jsx";

function ContactSection() {
  return (
    <div className="w-full min-h-screen lg:h-screen flex flex-col lg:flex-row justify-between px-4 md:px-16 lg:px-14 pt-24 pb-20 mb-20">
      <div className="lg:w-[40%] h-full">
        <ContactComponent />
      </div>

      <div className="h-full lg:w-[50%]">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactSection;
