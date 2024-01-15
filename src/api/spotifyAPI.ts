import axios from "axios";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const clientId = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.GATSBY_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async (): Promise<any> => {
  try {
    const params = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: `${refreshToken}`,
      client_id: `${clientId}`,
      client_secret: `${clientSecret}`,
    });

    const basic = btoa(`${clientId}:${clientSecret}`);

    const response = await axios.post(TOKEN_ENDPOINT, params, {
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return await response.data.access_token;
  } catch (error) {
    console.error("Error fetching currently playing track:", error);
    return null;
  }
};

export const getCurrentlyPlayingTrack = async (): Promise<any> => {
  const accessToken = await getAccessToken();
  try {
    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const song = response.data;

    const albumImageUrl = song.item.album.images[0].url;
    const albumName = song.item.album.name;
    const albumType = song.item.album.album_type;
    const artist = song.item.artists
      .map((_artist: { name: any }) => _artist.name)
      .join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
      albumImageUrl,
      albumName,
      albumType,
      artist,
      isPlaying,
      songUrl,
      title,
    };
  } catch (error) {
    console.error("Error fetching currently playing track:", error);
    return null;
  }
};
