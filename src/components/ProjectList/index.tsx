import React from "react";
import "./index.css";
import "../ProjectCard";
import ProjectCard from "../ProjectCard";
import projectData from "../../content/project-data";

const ProjectList = () => {
  const projectCards = projectData.map(
    (data: { subtitle: string; title: string; tags: string[] }) => (
      <ProjectCard
        subtitle={data.subtitle}
        title={data.title}
        tags={data.tags}
      />
    )
  );
  return (
    <>
      <h2>My Work</h2>
      <div className="project-list">{projectCards}</div>
    </>
  );
};

export default ProjectList;
