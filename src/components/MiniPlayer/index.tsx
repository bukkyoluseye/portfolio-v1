import React, { useState, useEffect, useRef } from "react";
import { getCurrentlyPlayingTrack } from "../../api/spotifyAPI";
import { CurrentlyPlayingItem } from "../../types/types";
import { graphql, useStaticQuery } from "gatsby";
// @ts-ignore
import ColorThief from "colorthief";
import "./index.css";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
const MiniPlayer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<CurrentlyPlayingItem | null>(null);
  const [backgroundColor, setBackgroundColor] =
    useState<string | undefined>(undefined);
  const [textColor, setTextColor] = useState<string | undefined>(undefined);

  const albumArtRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateCurrentlyPlaying = async () => {
      const currentlyPlaying = await getCurrentlyPlayingTrack();
      setResult(currentlyPlaying);
      setLoading(false);
    };
    
    const getTextColor = (background: string) => {
      // const threshold = 4.5; // WCAG 2.0 AA standard for normal text
      const colorDifferenceThreshold = 500;

      const rgbStringToArray = (rgbString: string) => {
        // Extract the numeric values from the RGB string
        const rgbValues = rgbString
          .match(/\d+/g)
          .map((value: string) => parseInt(value, 10));

        return rgbValues;
      };

      const backgroundRGB = rgbStringToArray(background);

      console.log(background, "background");

      const colorDifference =
        Math.max(backgroundRGB[0], 255) -
        Math.min(backgroundRGB[0], 255) +
        (Math.max(backgroundRGB[1], 255) - Math.min(backgroundRGB[1], 255)) +
        (Math.max(backgroundRGB[2], 255) - Math.min(backgroundRGB[2], 255));

      console.log(colorDifference, "color difference");

      // Determine text color based on the calculated contrast ratio
      return colorDifference >= colorDifferenceThreshold ? "#fff" : "#000";
      //     Color brightness is determined by the following formula:
      // ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
      // Note: This algorithm is taken from a formula for converting RGB values to YIQ values. This brightness value gives a perceived brightness for a color.

      // Color difference is determined by the following formula:
      // (maximum (Red value 1, Red value 2) - minimum (Red value 1, Red value 2)) + (maximum (Green value 1, Green value 2) - minimum (Green value 1, Green value 2)) + (maximum (Blue value 1, Blue value 2) - minimum (Blue value 1, Blue value 2))

      // The rage for color brightness difference is 125. The range for color difference is 500.

      // // Helper function to calculate contrast ratio
      // const calculateContrastRatio = (color1: number[], color2: string) => {
      //   const luminance1 = calculateRelativeLuminance(color1);
      //   const luminance2 = calculateRelativeLuminance(color2);

      //   const brighter = Math.max(luminance1, luminance2);
      //   const darker = Math.min(luminance1, luminance2);

      //   return (brighter + 0.05) / (darker + 0.05);
      // };

      // // Helper function to calculate relative luminance
      // const calculateRelativeLuminance = (color: number[] | string) => {
      //   const sRGB = color.map((value: number) => {
      //     const sRGBValue = value / 255;
      //     return sRGBValue <= 0.03928
      //       ? sRGBValue / 12.92
      //       : Math.pow((sRGBValue + 0.055) / 1.055, 2.4);
      //   });

      //   return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
      // };

      // // Calculate contrast ratio with black text
      // const contrastWithBlack = calculateContrastRatio(
      //   rgbStringToArray(background),
      //   "#000"
      // );

      // // Determine text color based on the calculated contrast ratio
      // return contrastWithBlack >= threshold ? "#000" : "#fff";
    };

    const extractImageColor = () => {
      const colorThief = new ColorThief();
      const albumArtImg = albumArtRef.current;

      // Ensure the image is loaded before trying to get the color
      if (albumArtImg && albumArtImg.complete) {
        const result = colorThief.getColor(albumArtImg, 25);
        // Do something with the color result
        console.log("Image color:", result);
        const rgbColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
        setBackgroundColor(rgbColor);
        let newTextColor;
        if (backgroundColor !== undefined) {
          newTextColor = getTextColor(backgroundColor);
        }
        console.log(backgroundColor);
        backgroundColor !== undefined && setTextColor(newTextColor);
      }
    };

    updateCurrentlyPlaying(); // Initial call
    extractImageColor();

    const intervalId = setInterval(() => {
      updateCurrentlyPlaying();
      extractImageColor();
    }, 10000); // Update every 10 seconds

    // Cleanup function
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once

  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "images" }
  //         relativeDirectory: { eq: "users" }
  //       }
  //     ) {
  //       nodes {
  //         name
  //         childImageSharp {
  //           gatsbyImageData
  //         }
  //       }
  //     }
  //   }
  // `);

  // {
  //   loading && <p>Loading...</p>;
  // }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && result === null && (
        <div>
          <span>Currently offline</span>
        </div>
      )}
      {!loading && result !== null && (
        <div>
          <div>
            <VisuallyHidden>
              Bukky is currently listening to: {result.title} by {result.artist}
            </VisuallyHidden>
          </div>
          <div>
            <div className="song-info">
              <img
                crossOrigin="anonymous"
                className="album-art"
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
                ref={albumArtRef}
              />
              <div
                className="song-link hide"
                style={{
                  backgroundColor: backgroundColor,
                  color: textColor,
                }}
              >
                <a href={result.songUrl} target="_blank">
                  <p>{result.title}</p>
                  <p>{result.artist}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniPlayer;
