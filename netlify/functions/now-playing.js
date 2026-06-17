const API_BASE = "https://ws.audioscrobbler.com/2.0/";

const PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f";

function pickImage(images) {
  if (!Array.isArray(images)) return null;
  const usable = (url) => url && !url.includes(PLACEHOLDER);
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
    "Cache-Control": "public, max-age=5",
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
