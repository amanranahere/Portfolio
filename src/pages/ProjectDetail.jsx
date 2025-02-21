import React from "react";
import { useParams } from "react-router-dom";
import Weblog from "../components/Projects/Weblog.jsx";
import Vidron from "../components/Projects/Vidron.jsx";

const project = {
  weblog: <Weblog />,
  vidron: <Vidron />,
};

const ProjectDetail = () => {
  const { projectName } = useParams();
  return project[projectName] || <h1>Project not found :(</h1>;
};

export default ProjectDetail;
