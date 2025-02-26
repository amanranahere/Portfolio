import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import ContactForm from "../components/Contact/ContactForm.jsx";

function Contact() {
  return (
    <div className="lg:pt-0 bg-[#343434] h-screen flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="p-8 pt-40 md:pt-52 lg:pt-10 bg-gray-200 text-[4rem] md:text-[15vw] leading-[0.9] tracking-tight font-medium whitespace-nowrap flex justify-center items-center select-none">
          Let's Talk
        </div>

        <div className="bg-[#f7f7f7] flex flex-col justify-between p-4 gap-10 lg:gap-0">
          <div className="text-3xl md:text-center lg:text-left lg:pr-32 select-none">
            Got a project in mind or just want to say hi? Let’s create something
            amazing together. Feel free to reach out!
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
