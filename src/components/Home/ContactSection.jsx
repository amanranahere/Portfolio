import React from "react";
import ContactComponent from "../Contact/ContactComponent.jsx";

function ContactSection() {
  return (
    <div
      id="contactSection"
      className="h-full flex justify-center items-center bg-black px-3 md:px-6 lg:px-10 py-14"
    >
      <ContactComponent />
    </div>
  );
}

export default ContactSection;
