import React from "react";
import "./index.css";
import { snakeCase } from "lodash";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const UserProfile = (props: {
  name: string;
  description: string;
  age: number;
  occupation: string;
  location: string;
  needs: string[];
  pains: string[];
}) => {
  const { name, description, age, location, occupation, needs, pains } = props;

  const userNeeds = needs.map((need) => {
    return <li>{need}</li>;
  });

  const userPains = pains.map((pain) => {
    return <li>{pain}</li>;
  });

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "users" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const userImages = data.allFile.nodes;

  const matchedImage = userImages.find(
    (img: { name: string }) => img.name === snakeCase(name.toLowerCase())
  );

  const imageData = getImage(matchedImage);

  return (
    <div className="user-profile">
      <div className="user-profile-info">
        <h4>{name}</h4>
        <div id="about-user">
          <h5>About</h5>
          <p>{description}</p>
        </div>
          {userNeeds.length > 0 && (
            <div id="user-needs">
              <h5>Needs & Goals</h5>
              <ul>{userNeeds}</ul>
            </div>
          )}
          {userPains.length > 0 && (
            <div id="user-pains">
              <h5>Pains</h5>
              <ul>{userPains}</ul>
            </div>
          )}
      </div>
      <div id="user-image-info">
        {imageData && (
          <div className="user-image-container">
            <GatsbyImage
              imgClassName="user-image"
              image={imageData}
              alt={name}
              loading="eager"
              objectFit="contain"
            />
          </div>
        )}
        <div className="profile-details">
          <p>Age</p>
          <p>Occupation</p>
          <p>Location</p>
          <p>{age}</p>
          <p>{occupation}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
