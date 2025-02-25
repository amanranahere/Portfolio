import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import ContactForm from "../components/Contact/ContactForm.jsx";

function Contact() {
  return (
    <div className="pt-24 lg:pt-0 bg-[#343434] h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="p-8 pt-10 bg-[#e7e7e7] text-[4rem] md:text-[15vw] leading-[0.9] tracking-tight font-medium whitespace-nowrap flex justify-center items-center">
          Let's Talk
        </div>

        <div className="bg-[#f7f7f7] flex flex-col justify-between p-4 gap-10 lg:gap-0">
          <div className="text-3xl md:pr-32 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            illum ratione perferendis sed ab odio dolor nesciunt totam id.
          </div>

          <div className="flex justify-between text-sm">
            <span className="leading-none">Prefer Email?</span>
            <a
              href="mailto:amanranahere@gmail.com"
              className="underline leading-none"
            >
              amanranahere@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default PageTransition(Contact);
