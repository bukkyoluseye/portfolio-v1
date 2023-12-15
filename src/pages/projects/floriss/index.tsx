import React from "react";
import Seo from "../../../components/SEO";
import CaseStudyLayout from "../../../templates/CaseStudy/layout";
import "./index.css";

const FlorissCaseStudy = () => {
  return <CaseStudyLayout title="Floriss"></CaseStudyLayout>;
};

export default FlorissCaseStudy;

export const Head = () => <Seo title="Floriss" />;
