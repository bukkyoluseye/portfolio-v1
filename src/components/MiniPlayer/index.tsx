import React, { useState, useEffect } from "react";
import { getCurrentlyPlayingTrack } from "../../api/spotifyAPI";
import { CurrentlyPlayingItem } from "../../types/types";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
const MiniPlayer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<CurrentlyPlayingItem | null>(null);

  useEffect(() => {
    const updateCurrentlyPlaying = async () => {
      const currentlyPlaying = await getCurrentlyPlayingTrack();
      setResult(currentlyPlaying);
      setLoading(false);
    };

    updateCurrentlyPlaying();

    const intervalId = setInterval(updateCurrentlyPlaying, 10000); // Update every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

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
                className="album-art"
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
              />
              <div className="song-link hide">
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
