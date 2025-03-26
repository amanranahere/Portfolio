import React from "react";
import CapabilitiesComponent from "../components/Capabilities/CapabilitiesComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Capabilities() {
  return (
    <>
      <div className="mb-[75vh] md:mb-[50vh] lg:mb-[80vh] border-b-2 border-white">
        <CapabilitiesComponent />
      </div>

      {/* <div className="border-t-2 border-white"></div> */}

      <Footer />
    </>
  );
}

export default Capabilities;
