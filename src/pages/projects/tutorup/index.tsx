import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ProblemSummary from "../../../components/TutorUp/ProblemSummary";
import "./index.css";
import Seo from "../../../components/SEO";
import CaseStudyLayout from "../../../templates/CaseStudy/layout";

const TutorUpCaseStudy = () => {
  return (
    <CaseStudyLayout title="Tutor Up" imageWidth="482.5px">
      <main>
        <div>
          <p>The problem</p>
          <div id="problems-list">
            <ProblemSummary
              type="Bookings"
              image={
                <StaticImage
                  src="../../../images/weary-face-emoji.png"
                  alt="Weary face emoji"
                />
              }
              body={
                <p>
                  The bookings page can only be viewed in a <em>list form</em>{" "}
                  which is <em>frustrating</em> for users who are trying to{" "}
                  <em>see what their availability is</em>
                </p>
              }
            ></ProblemSummary>
            <ProblemSummary
              type="Bookings"
              image={
                <StaticImage
                  src="../../../images/calendar.png"
                  alt="Weary face emoji"
                />
              }
              body={
                <p>
                  Bookings can't be <em>synced to your calendar</em> so users
                  are having to manually add them to their personal calendars
                </p>
              }
            ></ProblemSummary>
            <ProblemSummary
              type="Student details"
              image={
                <StaticImage src="../../../images/memo.png" alt="Memo emoji" />
              }
              body={
                <p>
                  Tutors are unable to <em>see their lesson reports</em> in the
                  app
                </p>
              }
            ></ProblemSummary>
          </div>
        </div>
      </main>
    </CaseStudyLayout>
  );
};

export default TutorUpCaseStudy;

export const Head = () => <Seo title="Tutor Up" />;
