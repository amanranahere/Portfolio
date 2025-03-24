import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import ContactComponent from "../components/Contact/ContactComponent";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <div className="mb-[75vh] md:mb-[50vh] lg:mb-[80vh]">
        <ContactComponent />
      </div>

      <Footer />
    </>
  );
}

export default PageTransition(Contact);
