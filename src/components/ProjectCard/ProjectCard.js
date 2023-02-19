import React from "react";
import "./ProjectCard.css";
import Link from "../Link/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* PROPS

variant: primary (default) \ secondary \ disabled

hasIcon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

const ProjectCard = (props) => {
  const { subtitle, title, tags, href } = props;

  const projectTags = [];
  if(tags !== undefined && tags !== null && tags.length > 1){
  for (let i = 0; i < tags.length - 1; i++) {
    projectTags.push(tags[i] + " • ");
  }
  projectTags.push(tags[tags.length - 1]);}

  return (
    <div className="project-card">
      <div className="project-info">
        <div className="title-area">
          <h4>{subtitle}</h4>
          <h3>{title}</h3>
        </div>
        {tags && <p>{tags && tags.length > 1 ? projectTags : tags && tags}</p>}
        <Link className="project-link" href={href}>
          VIEW <span className="visually-hidden">{subtitle} </span>PROJECT
          <ArrowForwardIcon />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
