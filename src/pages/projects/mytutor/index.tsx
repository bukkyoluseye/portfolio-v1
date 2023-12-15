import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./index.css";
import "../../../templates/CaseStudy/layout.css";
import UserProfile from "../../../components/Floriss/UserProfile";
import Seo from "../../../components/SEO";
import CaseStudyLayout from "../../../templates/CaseStudy/layout";

const MyTutorCaseStudy = () => {
  const title: string = "MyTutor";
  return (
    <CaseStudyLayout title="MyTutor">
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
        <UserProfile
          name="Aliyah Begum"
          description="Aliyah is a recent graduate. She studied Biomedical Sciences at UCL, UK as an international student. She is now back home in Turkey, looking into the possibility of studying  a post-graduate degree. She started tutoroing during university and has chosen to continue whilst she decide what her next steps are. She tutors Biology, Chemistry & Maths on the MyTutor platform."
          age={23}
          occupation="Self-Employed"
          location="Istanbul, Turkey"
          needs={[
            "Instability of her job as a tutor - inconsistent work makes it hard for her to support herself as she decides what to do next",
            "Dealing with difficult students",
            "Managing studying, tutoring and free time",
          ]}
          pains={[]}
        />
        <UserProfile
          name="Michael Goma"
          description="Michael is currently a 2nd year student studying Law with French Law at University of Warwick. In his spare time, between lectures, he tutors English & French to KS3, GCSE & A-Level students on the MyTutor platform. He also tutors French to university students privately."
          age={20}
          occupation="Student"
          location="London, UK"
          needs={[
            "Financial independence - being able to support himself through university",
            "Seeing his students progress and succeed",
          ]}
          pains={[
            "Instability of his job as a tutor - inconsistent work seeks to jeopardise his financial independence",
            "Trying to stay passionate and enthusiastic about tutoring",
            "Managing studying, tutoring and free time",
          ]}
        />
      </main>
    </CaseStudyLayout>
  );
};

export default MyTutorCaseStudy;

export const Head = () => <Seo title="MyTutor" />;
