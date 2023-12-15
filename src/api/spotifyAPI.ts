const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async (): Promise<any> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: `${client_id}`,
      grant_type: "refresh_token",
      client_secret: `${client_secret}`,
      refresh_token: `${refresh_token}`,
    }),
  });

  return await response.json();
};

export const getNowPlaying = async (): Promise<any> => {
  const { access_token } = await getAccessToken();

  const response = fetch(NOW_PLAYING_ENDPOINT, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (await response).json();
};

export const getNowPlayingItem = async () => {
  const song = await getNowPlaying();
  if (song.status === 204 || song.status > 400) {
    return false; // if no song is playing or there's another error
  }

  const albumImageUrl = song.item.album.images[0].url;
  const artist = song.item.artists
    .map((_artist: { name: any }) => _artist.name)
    .join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
};
