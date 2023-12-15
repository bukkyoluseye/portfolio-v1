import React from "react";
import Icon from "@mdi/react";
import { mdiArrowDownCircleOutline, mdiClockOutline } from "@mdi/js";
import data from "../../../content/project-data.js";
import "./index.css";
import { ProjectDataTypes } from "../../../types/types.js";
import Container from "../../Container/index.js";

const ProjectDetails = (props: { title: string; year: number }) => {
  const { title, year } = props;

  const selectedProject: ProjectDataTypes | undefined = data.find(
    (project) => project.title === title
  );

  return (
    <>
      <header>
        <Container centerAligned={false}>
          <div className="project-details">
            <div className="project-details-left">
              <div className="project-year">
                <Icon path={mdiClockOutline} size={1} />
                <p>{year}</p>
              </div>
              {selectedProject && (
                <div className="project-tags">
                  <p className="bold">TAGS: </p>
                  <p>{selectedProject.tags.join(", ")}</p>
                </div>
              )}
            </div>
            <div className="scroll">
              <Icon path={mdiArrowDownCircleOutline} size={1} />
              <p>SCROLL</p>
            </div>
          </div>
          <hr />
        </Container>
      </header>
    </>
  );
};

export default ProjectDetails;
