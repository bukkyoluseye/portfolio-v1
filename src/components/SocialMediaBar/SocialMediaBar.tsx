import React from "react";
import "./SocialMediaBar.css";
import { Button } from "@chakra-ui/react";
import GitHub from "../icons/GitHub";
import LinkedIn from "../icons/LinkedIn";
import Instagram from "../icons/Instagram";

const SocialMediaBar = () => {
  return (
    <div className="social-media-bar">
      <Button className="social-media-icon" variant="text">
        <GitHub />
      </Button>
      <Button className="social-media-icon" variant="text">
        <LinkedIn />
      </Button>
      <Button className="social-media-icon" variant="text">
        <Instagram />
      </Button>
      <svg width="2" height="100">
        <rect width="2" height="100" />
      </svg>
    </div>
  );
};

export default SocialMediaBar;
