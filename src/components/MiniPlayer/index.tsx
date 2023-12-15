import React, { useState, useEffect } from "react";
import { getNowPlayingItem } from "../../api/spotifyAPI";
import { graphql, useStaticQuery } from "gatsby";
import "./index.css";
import { url } from "inspector";

type ResultType =
  | {}
  | {
      albumImageUrl: string | undefined;
      artist: string | undefined;
      isPlaying: boolean;
      songUrl: string | undefined;
      title: string | undefined;
    };
const MiniPlayer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<ResultType>({});
  useEffect(() => {
    setInterval(() => {
      Promise.all([getNowPlayingItem()]).then((results) => {
        setResult(results[0]);
        setLoading(false);
      });
    }, 1000);
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
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && Object.keys(result).length === 0 && (
        <div>
          <span>Currently offline</span>
        </div>
      )}
      {!loading && Object.keys(result).length !== 0 && (
        <div>
          <div>
            <span>Now playing</span>
          </div>
          <div>
            <div className="song-info">
              <img
                className="album-art"
                src={result.albumImageUrl}
                alt={`${result.title} album art`}
              />
              <a
                href={result.songUrl}
                className="song-link hide"
                style={{ background: `url(${result.albumImageUrl})` }}
              >
                <p>{result.title}</p>
                <p>{result.artist}</p>
              </a>
            </div>
            <a href={result.songUrl} target="_blank">
              {result.title}
            </a>
            <p>{result.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniPlayer;
