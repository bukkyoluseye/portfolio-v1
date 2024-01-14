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
      // WCAG 2.0 AA standard for normal text
      const threshold = 4.5;

      const rgbStringToArray = (rgbString: string) => {
        // Extract the numeric values from the RGB string
        const rgbValues = rgbString
          .match(/\d+/g)
          .map((value: string) => parseInt(value, 10));

        return rgbValues;
      };

      // Call rgbStringToArray function with the rgbString passed through the getTextColor function
      const backgroundRGB = rgbStringToArray(background);
      console.log(backgroundRGB);

      // Helper function to calculate contrast ratio
      const calculateContrastRatio = (color1: number[], color2: number[]) => {
        const luminance1 = calculateRelativeLuminance(color1);
        const luminance2 = calculateRelativeLuminance(color2);
        console.log(luminance1);
        console.log(luminance2);

        const brighterColor = Math.max(luminance1, luminance2);
        const darkerColor = Math.min(luminance1, luminance2);

        return (brighterColor + 0.05) / (darkerColor + 0.05);
      };
      // Determine text color based on the calculated contrast ratio
      /* Helper function to calculate relative luminance of a color based on its RGB values. 
      Relative luminance is a measure of the perceived brightness of a color in the human visual system https://www.w3.org/TR/WCAG20/#relativeluminancedef */
      const calculateRelativeLuminance = (color: number[]) => {
        const sRGB = color.map((value) => {
          // Convert RGB values to sRGB values (normalize by dividing each component by 255)
          const sRGBValue = value / 255;
          // Gamma-corrected the normalized sRGB values
          return sRGBValue <= 0.03928
            ? sRGBValue / 12.92
            : Math.pow((sRGBValue + 0.055) / 1.055, 2.4);
        });

        return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
      };

      // Calculate contrast ratio with black text
      const contrastWithBlack = calculateContrastRatio(
        backgroundRGB,
        [18, 18, 18]
      );
      console.log(contrastWithBlack);
      // Determine text color based on the calculated contrast ratio
      return contrastWithBlack >= threshold ? "#121212" : "#fff";
    };

    const extractImageColor = () => {
      const colorThief = new ColorThief();
      const albumArtImg = albumArtRef.current;

      // Ensure the image is loaded before trying to get the color
      if (albumArtImg) {
        albumArtImg.onload = () => {
          const result = colorThief.getColor(albumArtImg, 25);
          // Convert dominant color from colorThief into an RGB string
          const rgbColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
          setBackgroundColor(rgbColor);
          console.log(rgbColor);
          console.log(backgroundColor);
          let newTextColor;
          if (backgroundColor !== undefined) {
            newTextColor = getTextColor(backgroundColor);
          }
          backgroundColor !== undefined && setTextColor(newTextColor);
        };
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
  }, [backgroundColor, result]); // Set background color and result as a dependency for the useEffect

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
            <a href={result.songUrl} target="_blank" className="song-info">
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
                <div>
                  <p>{result.title}</p>
                  <p>{result.artist}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniPlayer;
