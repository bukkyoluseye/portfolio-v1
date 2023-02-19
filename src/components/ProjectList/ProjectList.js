import React from "react";
import "./ProjectList.css";

const ProjectList = (props) => {
  const { children } = props;

  return <div className="project-list">{children}</div>;
};

export default ProjectList;
