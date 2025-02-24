import React from "react";
import PageTransition from "../components/Transitions/PageTransition.jsx";
import WorkComponent from "../components/Work/WorkComponent.jsx";
import WorkFooter from "../components/Work/WorkFooter.jsx";

function Work() {
  return (
    <>
      <div className="p-10 text-xl mt-12 md:text-2xl lg:text-3xl flex justify-center items-center py-20">
        MY PROJECTS
      </div>

      <WorkComponent />

      <WorkFooter />
    </>
  );
}

export default PageTransition(Work);
