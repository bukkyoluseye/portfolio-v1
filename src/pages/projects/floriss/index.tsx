import React from "react";
import CaseStudyLayout from "../../../components/CaseStudy/layout";
import { StaticImage } from "gatsby-plugin-image";
import './index.css';

const FlorissCaseStudy = () => {
  return (
    <CaseStudyLayout
      title="Floriss"
      projectImage={
        <StaticImage
          id="floriss-screenshots"
          src="../../../images/floriss-phone-header.png"
          alt="floriss app screnshots"
        />
      }
      subtitle="App Case Study"
      year={2021}
    ></CaseStudyLayout>
  );
};

export default FlorissCaseStudy;
