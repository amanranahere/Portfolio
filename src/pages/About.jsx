import React from "react";
import PageTransition from "../components/Transitions/PageTransition";

function About() {
  return (
    <>
      <div className="h-screen text-xl flex justify-center items-center">
        About page
      </div>
      <div className="h-screen text-xl flex justify-center items-center bg-red-950">
        About page
      </div>
      <div className="h-screen text-xl flex justify-center items-center bg-blue-950">
        About page
      </div>
    </>
  );
}

export default PageTransition(About);
