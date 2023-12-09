import React from "react";
import "./index.css";

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
