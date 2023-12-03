import React from "react";
import Layout from "../layout";
import ProjectBreadcrumbs from "../ProjectBreadcrumbs/ProjectBreadcrumbs";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import "./layout.css";

const CaseStudyLayout = (props: {
  children?: any;
  projectImage?: JSX.Element;
  subtitle: string;
  title: string;
  year: number;
}) => {
  const { children, projectImage, subtitle, title, year } = props;
  return (
    <Layout>
      <header
        className={`projects ${title.toLowerCase().split(" ").join("-")}`}
      >
        <ProjectBreadcrumbs title={title} />
        <div className="project-header">
          <div className="project-title-area">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          {projectImage}
        </div>
      </header>
      <ProjectDetails title={title} year={year} />
      {children}
    </Layout>
  );
};

export default CaseStudyLayout;
