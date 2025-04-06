import React from "react";
import PageTransition from "../components/Animations/PageTransition";
import Footer from "../components/Footer/Footer.jsx";

function About() {
  return (
    <>
      <div className="">
        <div className="h-screen text-xl flex justify-center items-center bg-white">
          About page
        </div>
        <div className="h-screen text-xl flex justify-center items-center bg-cyan-300">
          About page
        </div>
        <div className="h-screen text-xl flex justify-center items-center bg-blue-950">
          About page
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PageTransition(About);
