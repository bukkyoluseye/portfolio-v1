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
      // The range for color difference
      const colorDifferenceThreshold = 500;

      const rgbStringToArray = (rgbString: string) => {
        // Extract the numeric values from the RGB string
        const rgbValues = rgbString
          .match(/\d+/g)
          .map((value: string) => parseInt(value, 10));

        return rgbValues;
      };

      // Call rgbStringToArray function with the rgbString passed through the getTextColor function
      const backgroundRGB = rgbStringToArray(background);

      // Color difference is determined by the following formula:
      const colorDifference =
        Math.max(backgroundRGB[0], 255) -
        Math.min(backgroundRGB[0], 255) +
        (Math.max(backgroundRGB[1], 255) - Math.min(backgroundRGB[1], 255)) +
        (Math.max(backgroundRGB[2], 255) - Math.min(backgroundRGB[2], 255));

      // Determine text color based on the calculated contrast ratio
      return colorDifference >= colorDifferenceThreshold ? "#fff" : "#000";
    };

    const extractImageColor = () => {
      const colorThief = new ColorThief();
      const albumArtImg = albumArtRef.current;

      // Ensure the image is loaded before trying to get the color
      if (albumArtImg && result) {
        albumArtImg.onload = () => {
          const result = colorThief.getColor(albumArtImg, 25);
          // Convert dominant color from colorThief into an RGB string
          const rgbColor = `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
          setBackgroundColor(rgbColor);
          let newTextColor;
          if (backgroundColor !== undefined) {
            newTextColor = getTextColor(backgroundColor);
          }
          backgroundColor !== undefined && setTextColor(newTextColor);
        };
        albumArtImg.src = result.albumImageUrl
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
            <div className="song-info">
              <p></p>
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
