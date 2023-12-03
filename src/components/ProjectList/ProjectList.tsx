import React from "react";
import "./ProjectList.css";
import "../ProjectCard/ProjectCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../../content/project-data";

const ProjectList = () => {
  console.log(projectData);
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
    <section>
      <h2>My Work</h2>
      <div className="project-list">{projectCards}</div>
    </section>
  );
};

export default ProjectList;
