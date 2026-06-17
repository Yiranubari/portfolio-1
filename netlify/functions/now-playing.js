const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  if (!res.ok) throw new Error(`token request failed: ${res.status}`);
  const json = await res.json();
  return json.access_token;
}

exports.handler = async () => {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=30",
  };

  const notPlaying = {
    statusCode: 200,
    headers,
    body: JSON.stringify({ isPlaying: false }),
  };

  try {
    if (
      !process.env.SPOTIFY_CLIENT_ID ||
      !process.env.SPOTIFY_CLIENT_SECRET ||
      !process.env.SPOTIFY_REFRESH_TOKEN
    ) {
      return notPlaying;
    }

    const token = await getAccessToken();
    const res = await fetch(NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 204 || res.status > 400) return notPlaying;

    const song = await res.json();
    if (!song || !song.item || song.is_playing === false) return notPlaying;

    const item = song.item;
    const albumArt =
      item.album && item.album.images && item.album.images.length > 0
        ? item.album.images[0].url
        : null;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        isPlaying: true,
        title: item.name,
        artist: (item.artists || []).map((a) => a.name).join(", "),
        album: item.album ? item.album.name : "",
        albumArt,
        url:
          item.external_urls && item.external_urls.spotify
            ? item.external_urls.spotify
            : "https://open.spotify.com",
      }),
    };
  } catch {
    return notPlaying;
  }
};
