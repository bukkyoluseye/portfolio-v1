import React from "react";
import "./ProblemSummary.css";
import { StaticImage } from "gatsby-plugin-image";
// import image from '../../images/weary-face-emoji.png'

const ProblemSummary = (props: {
  body?: JSX.Element;
  type: string;
  image?: JSX.Element;
}) => {
    const { body, type, image } = props;

  return (
    <div
      className={`project-summary ${type.toLowerCase().split(" ").join("-")}`}
    >
      <div className="type">
        <p>{type}</p>
      </div>
      <div className="problem-body">
        <div className="circle-image">
          {image}
        </div>
        {body}
      </div>
    </div>
  );
};

export default ProblemSummary;
