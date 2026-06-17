// Netlify Function: returns what Yiranubari is currently playing, via Last.fm.
// Deployed alongside the static site; reachable at /.netlify/functions/now-playing
//
// Why Last.fm instead of Spotify: Spotify's Web API blocks the "currently
// playing" endpoint for free (non-Premium) accounts. Last.fm scrobbles every
// track you play and exposes a "now playing" flag through a free API, no
// Premium and no OAuth required.
//
// One-time setup:
//   1. Connect Spotify to Last.fm: https://www.last.fm/settings/applications
//      (or last.fm/about/trackmymusic) so your plays get scrobbled.
//   2. Get a free API key: https://www.last.fm/api/account/create
//
// Required environment variables (Netlify -> Site settings -> Environment vars):
//   LASTFM_API_KEY
//   LASTFM_USER      (your Last.fm username)

const API_BASE = "https://ws.audioscrobbler.com/2.0/";

// Last.fm's "no artwork" placeholder (a gray star). Treat it as no image so the
// widget falls back to the clean icon instead of showing the placeholder.
const PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f";

function pickImage(images) {
  if (!Array.isArray(images)) return null;
  const usable = (url) => url && !url.includes(PLACEHOLDER);
  // Prefer the largest available, fall back down the list.
  const order = ["extralarge", "large", "medium", "small"];
  for (const size of order) {
    const found = images.find((i) => i.size === size && usable(i["#text"]));
    if (found) return found["#text"];
  }
  const any = images.find((i) => usable(i["#text"]));
  return any ? any["#text"] : null;
}

exports.handler = async () => {
  const headers = {
    "Content-Type": "application/json",
    // Short cache so we don't hammer Last.fm on every visit.
    "Cache-Control": "public, max-age=30",
  };

  const notPlaying = {
    statusCode: 200,
    headers,
    body: JSON.stringify({ isPlaying: false }),
  };

  try {
    if (!process.env.LASTFM_API_KEY || !process.env.LASTFM_USER) {
      return notPlaying;
    }

    const url =
      API_BASE +
      "?" +
      new URLSearchParams({
        method: "user.getrecenttracks",
        user: process.env.LASTFM_USER,
        api_key: process.env.LASTFM_API_KEY,
        format: "json",
        limit: "1",
      }).toString();

    const res = await fetch(url);
    if (!res.ok) return notPlaying;

    const json = await res.json();
    const tracks =
      json && json.recenttracks && json.recenttracks.track
        ? json.recenttracks.track
        : [];
    const track = Array.isArray(tracks) ? tracks[0] : tracks;

    // Last.fm marks the live track with @attr.nowplaying === "true".
    const live =
      track && track["@attr"] && track["@attr"].nowplaying === "true";
    if (!track || !live) return notPlaying;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        isPlaying: true,
        title: track.name,
        artist:
          track.artist && track.artist["#text"] ? track.artist["#text"] : "",
        album:
          track.album && track.album["#text"] ? track.album["#text"] : "",
        albumArt: pickImage(track.image),
        url: track.url || "https://www.last.fm",
      }),
    };
  } catch {
    return notPlaying;
  }
};
