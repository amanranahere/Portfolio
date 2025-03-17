import React from "react";
import CapabilitiesComponent from "../components/Capabilities/CapabilitiesComponent.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Capabilities() {
  return (
    <>
      <div className="mb-80">
        <CapabilitiesComponent />
        <div className="h-screen w-full bg-blue-200"></div>
      </div>
      <Footer />
    </>
  );
}

export default Capabilities;
