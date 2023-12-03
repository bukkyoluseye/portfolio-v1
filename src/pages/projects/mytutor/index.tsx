import React from "react";
import CaseStudyLayout from "../../../components/CaseStudy/layout";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";
import "../../../components/CaseStudy/layout.css";

const MyTutorCaseStudy = () => {
  const title: string = "MyTutor";
  return (
    <CaseStudyLayout title="MyTutor" subtitle="Redesign Case Study" year={2021}>
      <main>
        <p className="about-project">ABOUT {title.toUpperCase()}</p>
        <p>
          MyTutor is the UK’s leading online tutoring platform where you can
          book tailored one-to-one lessons with top tutors. This case study
          looks at redesigning the app created for tutors to manage bookings,
          requests and messages.
        </p>
        <div id="current-mytutor-app">
          <p>Current App</p>
          <StaticImage
            src={"../../../images/current_app_screenshots.png"}
            alt="current my tutor app screenshots"
          ></StaticImage>
          <p>
            The current app is currently experiencing many issues including
            lesson times not being adjusted for British Summer Time (BST).
            According to the iOS App Store, the app was last updated 2 years
            ago. Below are the app ratings for the app taken from the iOS App
            Store and the Google Play Store.
          </p>
        </div>
      </main>
    </CaseStudyLayout>
  );
};

export default MyTutorCaseStudy;
