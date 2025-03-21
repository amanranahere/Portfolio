import React from "react";
import PageTransition from "../components/Transitions/PageTransition";
import ContactComponent from "../components/Contact/ContactComponent";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <ContactComponent />

      {/* <div>
        <Footer />
      </div> */}
    </>
  );
}

export default PageTransition(Contact);
