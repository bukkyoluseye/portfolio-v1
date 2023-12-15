import React from "react";
import "./index.css";
import { Link, Tag } from "@chakra-ui/react";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

/* PROPS

variant: primary (default) \ secondary \ disabled

hasIcon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

const ProjectCard = (props: {
  subtitle: string;
  title: string;
  tags: string[];
}) => {
  const { subtitle, title, tags } = props;

  const projectTags = tags?.map((tag: string) => (
    <Tag variant="outline" color="white" borderRadius="full">
      {tag}
    </Tag>
  ));

  return (
    <div className="project-card">
      <div className="project-info">
        <div className="title-area">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
        </div>
        <div className="tags">{projectTags}</div>
        <Link
          className="project-link"
          href={`projects/${title.split(" ").join("").toLowerCase()}`}
        >
          VIEW <VisuallyHidden>{title} </VisuallyHidden>PROJECT
          <Icon path={mdiArrowRight} size={1} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
