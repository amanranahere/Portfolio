import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import ContactForm from "../components/Contact/ContactForm.jsx";

function Contact() {
  return (
    <div className="lg:pt-0 bg-[#0c0a00] h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="p-8 pt-40 md:pt-52 lg:pt-10 bg-[#c9c9c9] text-[4rem] md:text-[15vw] leading-[0.9] tracking-tight font-medium whitespace-nowrap flex justify-center items-center select-none">
          Let's Talk
        </div>

        <div className="bg-[#f1f1f1] flex flex-col justify-between p-4 gap-10 lg:gap-0">
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
        </div>
      </div>

      <div className="w-full h-full">
        <ContactForm />
      </div>
    </div>
  );
}

export default PageTransition(Contact);
