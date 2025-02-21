import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/Transitions/PageTransition";

function Work() {
  const projects = [
    { name: "Weblog", path: "weblog" },
    { name: "Vidron", path: "vidron" },
  ];

  return (
    <div>
      <div className="p-10 text-xl flex justify-center items-center">
        MY PROJECTS
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <ul>
          {projects.map((project) => (
            <li key={project.path}>
              <Link to={`/work/${project.path}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PageTransition(Work);
