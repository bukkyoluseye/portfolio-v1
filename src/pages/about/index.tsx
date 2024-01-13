import React from "react";
import MiniPlayer from "../../components/MiniPlayer";
import Seo from "../../components/SEO";

const About = () => {

  return (
    <>
      <p id="demo3">
        NOW PLAYING NOW PLAYING NOW PLAYING NOW PLAYING NOW PLAYING NOW PLAYING
      </p>
      <MiniPlayer />
    </>
  );
};

export default About;

export const Head = () => <Seo title="About" />;
