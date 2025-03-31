import React from "react";
import ContactComponent from "../Contact/ContactComponent.jsx";

function ContactSection() {
  return (
    <div className="h-full flex justify-center items-center bg-black px-3 md:px-6 lg:px-10 py-20">
      <ContactComponent />
    </div>
  );
}

export default ContactSection;
