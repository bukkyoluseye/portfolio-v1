import React from "react";
import Layout from "../layout";
import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import ProjectDetails from "./ProjectDetails";
import Container from "../Container";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import projectData from "../../content/project-data";
import { camelCase } from "lodash";
import "./layout.css";

const CaseStudyLayout = (props: {
  children?: any;
  title: string;
  imageWidth?: any;
}) => {
  const { children, title } = props;

  const currentProject = projectData.find(
    (project) =>
      camelCase(project.title) === camelCase(title) ||
      camelCase(project.title) === camelCase(title).toLowerCase()
  );

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const projectImages = data.allFile.nodes;

  const matchedImage = projectImages.find(
    (img: { name: string }) =>
      img.name === camelCase(currentProject?.title) ||
      img.name === camelCase(currentProject?.title).toLowerCase()
  );

  const imageData = getImage(matchedImage);

  return (
    <Layout>
      {currentProject && (
        <>
          <header
            className={`projects ${title.toLowerCase().split(" ").join("-")}`}
          >
            <Container>
              <ProjectBreadcrumbs title={title} />
            </Container>
            <Container>
              <div className="project-header">
                <div className="project-title-area">
                  <h2>{currentProject.title}</h2>
                  <p>{currentProject.subtitle}</p>
                </div>
                {imageData && (
                  <div className="project-image-container">
                    <GatsbyImage
                      imgClassName="project-image"
                      image={imageData}
                      alt={currentProject.image.alt}
                      loading="eager"
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </Container>
          </header>
          <ProjectDetails title={title} year={currentProject.year} />
        </>
      )}
      <Container>{children}</Container>
    </Layout>
  );
};

export default CaseStudyLayout;
