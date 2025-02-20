import React from "react";
import { useParams } from "react-router-dom";
import Weblog from "../components/Projects/Weblog.jsx";

const project = {
  weblog: <Weblog />,
};

const ProjectDetail = () => {
  const { projectName } = useParams();
  return project[projectName] || <h1>Project not found :(</h1>;
};

export default ProjectDetail;
